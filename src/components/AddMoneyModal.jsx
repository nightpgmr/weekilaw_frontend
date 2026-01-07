import React, { useState } from 'react';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';
import '../styles/AddMoneyModal.css';

const AddMoneyModal = ({ isOpen, onClose, onSuccess }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const presetAmounts = [10000, 50000, 100000, 200000, 500000];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!amount || parseFloat(amount) < 1000) {
      setError('حداقل مبلغ ۱۰۰۰ تومان است');
      return;
    }

    setLoading(true);
    try {
      const data = await apiCall(API_ENDPOINTS.WALLET.ADD_MONEY, {
        method: 'POST',
        body: JSON.stringify({ amount: parseInt(amount) }),
      });

      if (data.success && data.payment_url) {
        // Redirect to Zarinpal payment page
        window.location.href = data.payment_url;
      } else {
        setError(data.message || 'خطا در ایجاد درخواست پرداخت');
      }
    } catch (err) {
      setError(err.message || 'خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="add-money-modal-overlay" onClick={onClose}>
      <div className="add-money-modal" onClick={(e) => e.stopPropagation()} dir="rtl">
        <div className="add-money-modal-header">
          <h2>افزایش موجودی کیف پول</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="add-money-form">
          <div className="form-group">
            <label>مبلغ (تومان)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="مبلغ را وارد کنید"
              min="1000"
              required
              disabled={loading}
            />
          </div>

          <div className="preset-amounts">
            <span>مبالغ پیشنهادی:</span>
            <div className="preset-buttons">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className="preset-button"
                  onClick={() => setAmount(preset.toString())}
                  disabled={loading}
                >
                  {preset.toLocaleString('fa-IR')} تومان
                </button>
              ))}
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button type="button" onClick={onClose} disabled={loading}>
              انصراف
            </button>
            <button type="submit" disabled={loading || !amount}>
              {loading ? 'در حال پردازش...' : 'پرداخت'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoneyModal;
