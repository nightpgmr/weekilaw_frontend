// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://panel.weekilaw.com';
const API_URL = `${API_BASE_URL}/api`;

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    PHONE: {
      SEND_LOGIN_OTP: `${API_URL}/auth/phone/send-login-otp`,
      SEND_REGISTER_OTP: `${API_URL}/auth/phone/send-register-otp`,
      VERIFY_LOGIN_OTP: `${API_URL}/auth/phone/verify-login-otp`,
      COMPLETE_REGISTRATION: `${API_URL}/auth/phone/complete-registration`,
      RESEND_OTP: `${API_URL}/auth/phone/resend-otp`,
    },
    GOOGLE: {
      URL: `${API_URL}/auth/google/url`,
      CALLBACK: `${API_URL}/auth/google/callback`,
    },
  },

  // User Profile
  USER: {
    PROFILE: `${API_URL}/user/profile`,
    ACCOUNT: `${API_URL}/user/account`,
  },

  // Chat
  CHAT: {
    ASK: `${API_URL}/chat/ask`,
    HEALTH: `${API_URL}/chat/health`,
    BASE: `${API_URL}/chats`,
    RECENT: `${API_URL}/chats/recent`,
  },

  // Lawyer Search
  LAWYERS: {
    SEARCH: `${API_URL}/lawyers/search`,
    VERIFY: `${API_URL}/lawyers/verify`,
  },
};

// Helper function for API calls
export const apiCall = async (url, options = {}) => {
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default API_ENDPOINTS;
