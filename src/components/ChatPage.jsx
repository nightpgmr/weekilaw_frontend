import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/chatModal.css';
import PageLayout from './PageLayout.jsx';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';

/**
 * Full-page chat experience (no iframe). Plug your API into `callChatApi`.
 */
const ChatPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { chatId } = useParams();
  const fileInputRef = useRef(null);
  const scrollAnchorRef = useRef(null);
  const [messages, setMessages] = useState(() => [
    { id: 'm-hello', role: 'assistant', text: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>لطفاً مسئله حقوقی خود را به زبان ساده مطرح کنید.' },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const processedPrompt = useRef('');

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#f7f9fb';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  // Load existing chat if chatId is provided
  useEffect(() => {
    if (chatId && chatId !== 'new') {
      loadExistingChat(chatId);
    } else {
      // Reset to new chat state
      setCurrentChatId(null);
      setMessages([
        { id: 'm-hello', role: 'assistant', text: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>لطفاً مسئله حقوقی خود را به زبان ساده مطرح کنید.' },
      ]);
    }
  }, [chatId]);

  const loadExistingChat = async (id) => {
    try {
      setIsLoadingChat(true);
      const data = await apiCall(`${API_ENDPOINTS.CHAT.BASE}/${id}`);

      if (data.success && data.chat) {
        setCurrentChatId(data.chat.id);
        const chatMessages = data.chat.messages || [];
        const formattedMessages = [
          { id: 'm-hello', role: 'assistant', text: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>لطفاً مسئله حقوقی خود را به زبان ساده مطرح کنید.' },
        ];

        chatMessages.forEach((msg, index) => {
          formattedMessages.push({
            id: `u-${index}`,
            role: 'user',
            text: msg.question,
          });
          formattedMessages.push({
            id: `b-${index}`,
            role: 'assistant',
            text: msg.answer,
          });
        });

        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error('Error loading chat:', error);
      // Reset to new chat if loading fails
      setMessages([
        { id: 'm-hello', role: 'assistant', text: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>لطفاً مسئله حقوقی خود را به زبان ساده مطرح کنید.' },
      ]);
    } finally {
      setIsLoadingChat(false);
    }
  };

  // Handle initial prompt from URL or navigation state
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const initialPrompt = urlParams.get('prompt') || location.state?.initialPrompt;
    const trimmedPrompt = initialPrompt?.trim();

    // Only process if we have a new prompt, only the welcome message exists, and no manual user messages
    const hasUserMessages = messages.some(msg => msg.role === 'user' && msg.id !== 'm-hello');

    if (trimmedPrompt && trimmedPrompt !== processedPrompt.current && messages.length === 1 && !hasUserMessages) {
      processedPrompt.current = trimmedPrompt;
      handleInitialPrompt(trimmedPrompt);
    }
  }, [location]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAnchorRef.current) {
      setTimeout(() => {
        scrollAnchorRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [messages]);

  const handleInitialPrompt = async (prompt) => {
    const userMessage = { id: `u-${Date.now()}`, role: 'user', text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setIsSending(true);

    try {
      const reply = await callChatApi(prompt);
      const botMessage = { id: `b-${Date.now()}`, role: 'assistant', text: reply || '...' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        id: `e-${Date.now()}`,
        role: 'assistant',
        text: 'متأسفانه، مشکلی پیش آمد. لطفاً دوباره امتحان کنید.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };
  

  const callChatApi = useMemo(
    () =>
      async (text) => {
        try {
          const data = await apiCall(API_ENDPOINTS.CHAT.ASK, {
            method: 'POST',
            body: JSON.stringify({
              message: text,
              chat_id: currentChatId
            }),
          });

          if (!data.success) {
            throw new Error(data.answer || 'خطا در دریافت پاسخ');
          }

          // Update current chat ID if we receive one back (new chat or existing chat)
          if (data.chat_id) {
            // Update chat ID if it's different from current, or if we don't have one yet
            if (data.chat_id !== currentChatId) {
              setCurrentChatId(data.chat_id);
              // Update URL to include chat ID
              navigate(`/chat/${data.chat_id}`, { replace: true });
            }
          }

          return data.answer;
        } catch (error) {
          console.error('API call failed:', error);
          throw new Error('متأسفانه، مشکلی در ارتباط با سرور پیش آمد. لطفاً دوباره امتحان کنید.');
        }
      },
    [currentChatId, navigate]
  );

  const handleSend = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage = { id: `u-${Date.now()}`, role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const reply = await callChatApi(trimmed);
      const botMessage = { id: `b-${Date.now()}`, role: 'assistant', text: reply || '...' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        id: `e-${Date.now()}`,
        role: 'assistant',
        text: 'متأسفانه، مشکلی پیش آمد. لطفاً دوباره امتحان کنید.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  // Check authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('is_authenticated') === 'true' ||
                        sessionStorage.getItem('is_authenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleMenuToggle = () => setShowMenu((prev) => !prev);

  const handleReset = () => {
    setMessages([{ id: 'm-hello', role: 'assistant', text: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>لطفاً مسئله حقوقی خود را به زبان ساده مطرح کنید.' }]);
    setShowMenu(false);
    processedPrompt.current = ''; // Reset for new conversations
  };

  const handleDelete = () => {
    setMessages([]);
    setShowMenu(false);
    processedPrompt.current = ''; // Reset for new conversations
  };

  const handleMyCase = () => {
    navigate('/account');
    setShowMenu(false);
  };

  const handleSettings = () => {
    navigate('/settings');
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('is_authenticated');
    sessionStorage.removeItem('is_authenticated');
    setIsAuthenticated(false);
    setShowMenu(false);
    // Optionally redirect to home or show a message
  };

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('فقط فایل‌های تصویری (JPG, PNG, GIF, WebP) و PDF مجاز هستند.');
        return;
      }

      // Check file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        alert('حجم فایل نباید بیشتر از ۱۰ مگابایت باشد.');
        return;
      }

      // For now, just show a message that file was selected
      // In a real implementation, you would upload the file and add it to the chat
      const fileMessage = { id: `f-${Date.now()}`, role: 'user', text: `فایل انتخاب شد: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`, file: file };
      setMessages((prev) => [...prev, fileMessage]);

      // Clear the input so user can select the same file again if needed
      event.target.value = '';
    }
  };

  return (
    <PageLayout className="chat-page">
      <div className="chat-page_inner">
        <div className="chat-header-row">
          <button className="chat-back_button" type="button" onClick={() => navigate(-1)} aria-label="بازگشت">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.9167 4.16667 6.25 10l6.6667 5.8333"
                stroke="#0e5fe3"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="chat-menu-wrapper">
            <button className="chat-menu_button" type="button" onClick={handleMenuToggle} aria-label="منوی چت">
              <span className="chat-menu_dots">•••</span>
            </button>
            {showMenu && (
              <div className="chat-menu_dropdown">
                {isAuthenticated ? (
                  <>
                    <button type="button" className="chat-menu_item" onClick={handleMyCase}>
                      <span>چت های من</span>
                      <span className="chat-menu_icon">📋</span>
                    </button>
                    <button type="button" className="chat-menu_item" onClick={handleSettings}>
                      <span>تنظیمات</span>
                      <span className="chat-menu_icon">⚙️</span>
                    </button>
                    <button type="button" className="chat-menu_item" onClick={handleLogout}>
                      <span>خروج</span>
                      <span className="chat-menu_icon">🚪</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" className="chat-menu_item" onClick={handleReset}>
                      <span>Reset</span>
                      <span className="chat-menu_icon">↻</span>
                    </button>
                    <button type="button" className="chat-menu_item" onClick={handleDelete}>
                      <span>Delete</span>
                      <span className="chat-menu_icon">🗑</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="chat-warning-banner">
          ⚠️ پاسخ‌ها جنبه راهنمایی عمومی دارد و جایگزین مشاوره وکالتی نیست
        </div>

        <div className="chat-modal_card">
          <div className="chat-modal_body">
            <div className="chat-modal_messages">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`chat-modal_message ${m.role === 'assistant' ? 'is-assistant' : 'is-user'}`}
                >
                  {m.role === 'assistant' && <div className="chat-modal_avatar">AI</div>}
                  <div className="chat-modal_bubble" dangerouslySetInnerHTML={{ __html: m.text }}></div>
                </div>
              ))}
              {isSending && (
                <div className="chat-modal_message is-assistant">
                  <div className="chat-modal_avatar">AI</div>
                  <div className="chat-modal_bubble">Typing…</div>
                </div>
              )}
            </div>

            <form className="chat-modal_inputBar" onSubmit={handleSend}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="سؤال حقوقی خود را اینجا بنویسید"
                rows={1}
                className="chat-modal_textarea"
              />

              <div className="chat-modal_icons">
                <button className="chat-modal_iconBtn" type="button" aria-label="پیوست فایل" onClick={handleAttachClick}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*,.pdf"
                    onChange={handleFileSelect}
                  />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 5.25581V16.5C17.5 19.5376 15.0376 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5V5.66667C6.5 3.64162 8.14162 2 10.1667 2C12.1917 2 13.8333 3.64162 13.8333 5.66667V16.4457C13.8333 17.4583 13.0125 18.2791 12 18.2791C10.9875 18.2791 10.1667 17.4583 10.1667 16.4457V6.65116"
                      stroke="#b8bec8"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button className="chat-modal_iconBtn is-send" type="submit" disabled={isSending || !input.trim()} aria-label="ارسال پیام">
                  <div className="style-module__sendArrowImageWrapper">
                    <div className="style-module__sendArrowWrapperHover">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                        <path
                          d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z"
                          stroke="#7daaf5"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="style-module__sendArrowWrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                        <path
                          d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z"
                          stroke="#7daaf5"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </form>

            {/* Empty div for auto-scroll anchor */}
            <div ref={scrollAnchorRef} style={{ height: '20px' }}></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChatPage;

