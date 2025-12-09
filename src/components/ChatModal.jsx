import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/chatModal.css';

/**
 * Local chat UI (no iframe) with a pluggable API hook.
 * Replace `callChatApi` with your own backend call.
 */
const ChatModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState(() => [
    { id: 'm-hello', role: 'assistant', text: 'Hi 👋 I’m your AI legal assistant. How can I help?' },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

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

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="chat-modal_backdrop" role="dialog" aria-modal="true" aria-label="Chat now">
      <div className="chat-modal_card">
        <button className="chat-modal_close" type="button" onClick={onClose} aria-label="Close chat">
          ×
        </button>

        <div className="chat-modal_header">
          <div className="chat-modal_brand">
            <div className="chat-modal_logoCircle">LC</div>
            <div>
              <div className="chat-modal_title">LawConnect</div>
              <div className="chat-modal_subtitle">Free AI legal assistant</div>
            </div>
          </div>
          <div className="chat-modal_status">Online</div>
        </div>

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
            <button className="chat-modal_send" type="submit" disabled={isSending || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ChatModal;

