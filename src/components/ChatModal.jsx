import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../styles/chatModal.css';

/**
 * Local chat UI (no iframe) with a pluggable API hook.
 * Replace `callChatApi` with your own backend call.
 */
const ChatModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [open]);


  const handleSend = (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Close modal and navigate to chat page with the prompt
    onClose();
    navigate('/chat', { state: { initialPrompt: trimmed } });
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="chat-modal_backdrop" role="dialog" aria-modal="true" aria-label="همین حالا چت کنید">
      <div className="chat-modal_card">
        <button className="chat-modal_close" type="button" onClick={onClose} aria-label="بستن چت">
          ×
        </button>

        <div className="chat-modal_header">
          <div className="chat-modal_brand">
            <div className="chat-modal_logoCircle">LC</div>
            <div>
              <div className="chat-modal_title">Weekilaw</div>
              <div className="chat-modal_subtitle">Free AI legal assistant</div>
            </div>
          </div>
          <div className="chat-modal_status">Online</div>
        </div>

        <div className="chat-modal_body">
          <div className="chat-modal_messages">
            <div className="chat-modal_message is-assistant">
              <div className="chat-modal_avatar">AI</div>
              <div className="chat-modal_bubble" dangerouslySetInnerHTML={{ __html: 'سلام 👋<br><br>من راهنمای حقوقی هوشمند هستم.<br><br>مسئله حقوقی خود را مطرح کنید تا به صفحه چت کامل بروید.' }}></div>
            </div>
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
            <button className="chat-modal_send" type="submit" disabled={!input.trim()}>
              شروع چت
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ChatModal;

