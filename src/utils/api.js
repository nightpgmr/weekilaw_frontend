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

    // Handle authentication redirects
    if (response.status === 401 || response.status === 302) {
      // Clear invalid tokens
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');

      // Check if response is HTML (login redirect)
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        throw new Error('Authentication required. Please log in first.');
      }
    }

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;

      try {
        // Read response as text first to avoid "body stream already read" error
        const responseText = await response.text();

        // Try to parse as JSON
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // If not JSON, check if it's HTML (authentication redirect)
          if (responseText.includes('<!DOCTYPE html>')) {
            errorMessage = 'Authentication required. Please log in first.';
          } else {
            // Use the text content as error message
            errorMessage = responseText || errorMessage;
          }
        }
      } catch (e) {
        // Fallback error message
        errorMessage = `HTTP error! status: ${response.status}`;
      }

      throw new Error(errorMessage);
    }

    // For successful responses, try to parse as JSON
    try {
      const responseText = await response.text();
      return JSON.parse(responseText);
    } catch (e) {
      throw new Error('Invalid JSON response from server');
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default API_ENDPOINTS;
