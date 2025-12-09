import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/accountModal.css';

const AccountModal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="account-modal_backdrop" role="dialog" aria-modal="true" aria-label="Account actions">
      <div className="account-modal_card">
        <button className="account-modal_close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="account-modal_logo">
          <img src="/assets/sign-in/logo" alt="LawConnect" />
        </div>

        <p className="account-modal_lead">Please sign in or create a free account.</p>
        <p className="account-modal_body">
          With a free account you can create and edit unlimited cases and connect with lawyers.
        </p>

        <div className="account-modal_actions">
          <a className="account-modal_button account-modal_buttonPrimary" href="/en-us/for-lawyers/sign-up">
            Create your account
          </a>
          <a className="account-modal_button account-modal_buttonSecondary" href="/auth/sign-in">
            Sign in
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AccountModal;

