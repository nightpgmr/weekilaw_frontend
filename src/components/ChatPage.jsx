import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/chatModal.css';

/**
 * Full-page chat experience (no iframe). Plug your API into `callChatApi`.
 */
const ChatPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState(() => [
    { id: 'm-hello', role: 'assistant', text: 'Hi 👋 I’m your AI legal assistant. How can I help?' },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#f7f9fb';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  const callChatApi = useMemo(
    () =>
      /**
       * Stub: connect this to your API.
       * Example:
       * const res = await fetch('/api/chat', { method:'POST', body: JSON.stringify({ message: text })});
       * const data = await res.json();
       * return data.reply;
       */
      async (text) => {
        // Mock reply for now
        return `You said: "${text}"`;
      },
    []
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
        text: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  const handleMenuToggle = () => setShowMenu((prev) => !prev);

  const handleReset = () => {
    setMessages([{ id: 'm-hello', role: 'assistant', text: 'Hi 👋 I’m your AI legal assistant. How can I help?' }]);
    setShowMenu(false);
  };

  const handleDelete = () => {
    setMessages([]);
    setShowMenu(false);
  };

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <main className="chat-page">
      <div className="chat-page_inner">
        <div className="chat-header-row">
          <button className="chat-back_button" type="button" onClick={() => navigate(-1)} aria-label="Back">
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
            <button className="chat-menu_button" type="button" onClick={handleMenuToggle} aria-label="Chat menu">
              <span className="chat-menu_dots">•••</span>
            </button>
            {showMenu && (
              <div className="chat-menu_dropdown">
                <button type="button" className="chat-menu_item" onClick={handleReset}>
                  <span>Reset</span>
                  <span className="chat-menu_icon">↻</span>
                </button>
                <button type="button" className="chat-menu_item" onClick={handleDelete}>
                  <span>Delete</span>
                  <span className="chat-menu_icon">🗑</span>
                </button>
              </div>
            )}
          </div>
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
                  <div className="chat-modal_bubble">{m.text}</div>
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
                placeholder="Type message here"
                rows={1}
                className="chat-modal_textarea"
              />

              <div className="chat-modal_icons">
                <button className="chat-modal_iconBtn" type="button" aria-label="Attach file" onClick={handleAttachClick}>
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

                <button className="chat-modal_iconBtn is-send" type="submit" disabled={isSending || !input.trim()} aria-label="Send message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z"
                      stroke="#7daaf5"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatPage;

