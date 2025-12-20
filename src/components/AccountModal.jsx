import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/accountModal.css';

const AccountModal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="account-modal_backdrop" role="dialog" aria-modal="true" aria-label="اقدامات حساب کاربری">
      <div className="account-modal_card">
        <button className="account-modal_close" type="button" onClick={onClose} aria-label="بستن">
          ×
        </button>

        <div className="account-modal_logo">
          <img src="/assets/logo.png" alt="Weekilaw" width="200" height="200"/>
        </div>

        <p className="account-modal_lead">لطفاً وارد شوید یا یک حساب کاربری رایگان ایجاد کنید.</p>
        <p className="account-modal_body">
          با یک حساب کاربری رایگان می‌توانید موارد نامحدودی ایجاد و ویرایش کنید و با وکلا ارتباط برقرار کنید.
        </p>

        <div className="account-modal_actions">
          <a className="account-modal_button account-modal_buttonPrimary" href="/en-us/for-lawyers/sign-up">
            حساب کاربری خود را ایجاد کنید
          </a>
          <a className="account-modal_button account-modal_buttonSecondary" href="/auth/sign-in">
            وارد شوید
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AccountModal;

