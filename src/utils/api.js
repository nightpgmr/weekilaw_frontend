// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://weekilaw.com';
const API_URL = `${API_BASE_URL}/api`;

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication (New API endpoints)
  AUTH: {
    // New unified endpoints
    SEND_OTP: `${API_URL}/auth/send-otp`,
    VERIFY_OTP: `${API_URL}/auth/verify-otp`,
    LOGIN: `${API_URL}/auth/login`,
    REFRESH: `${API_URL}/auth/refresh`,
    PROFILE: `${API_URL}/auth/profile`,
    
    // Legacy phone auth endpoints (kept for backward compatibility)
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

  // User Profile (Legacy - kept for backward compatibility)
  USER: {
    PROFILE: `${API_URL}/user/profile`,
    ACCOUNT: `${API_URL}/user/account`,
  },

  // Wallet
  WALLET: {
    BALANCE: `${API_URL}/wallet/balance`,
    ADD_MONEY: `${API_URL}/wallet/add-money`,
    TRANSACTIONS: `${API_URL}/wallet/transactions`,
  },

  // Payment
  PAYMENT: {
    GATEWAYS: `${API_URL}/payment/gateways`,
    COIN_PACKAGES: `${API_URL}/payment/coin-packages`,
    INITIATE: `${API_URL}/payment/initiate`,
    VERIFY: `${API_URL}/payment/verify`,
  },

  // Chat
  CHAT: {
    ASK: `${API_URL}/chat/ask`,
    ASK_STREAM: `${API_URL}/chat/ask-stream`,
    HEALTH: `${API_URL}/chat/health`,
    BASE: `${API_URL}/chats`,
    RECENT: `${API_URL}/chats/recent`,
    // New endpoints from Postman collection
    SESSIONS: {
      CREATE: `${API_URL}/chat/sessions`,
      BY_PHONE: (phone) => `${API_URL}/chat/sessions/${phone}`,
      MESSAGES: (sessionId) => `${API_URL}/chat/sessions/${sessionId}/messages`,
    },
    AI_MESSAGE: `${API_URL}/chat/ai-message`,
    AI_CHAT: `${API_URL}/chat/ai-chat`,
    MODELS: `${API_URL}/chat/models`,
  },

  // Lawyer Search
  LAWYERS: {
    SEARCH: `${API_URL}/lawyers/search`,
    VERIFY: `${API_URL}/lawyers/verify`,
  },
};

// Helper function for API calls
export const apiCall = async (url, options = {}) => {
  // Try to get access_token first (new API), fallback to auth_token (legacy)
  const accessToken = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  const authToken = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  const token = accessToken || authToken;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    // Handle authentication redirects
    if (response.status === 401 || response.status === 302) {
      // Clear invalid tokens (both new and legacy)
      localStorage.removeItem('access_token');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('refresh_token');

      // Read response to get error message
      const contentType = response.headers.get('content-type') || '';
      let errorMessage = 'Authentication required. Please log in first.';
      
      try {
        const responseText = await response.text();
        if (contentType.includes('text/html') || responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<!doctype')) {
          errorMessage = 'Authentication required. Please log in first.';
        } else if (responseText) {
          try {
            const errorData = JSON.parse(responseText);
            errorMessage = errorData.message || errorData.error || errorMessage;
          } catch {
            // If not JSON, use the text or default message
            errorMessage = responseText.substring(0, 200) || errorMessage;
          }
        }
      } catch (e) {
        // If we can't read the response, use default message
        console.error('Failed to read 401 response:', e);
      }
      
      throw new Error(errorMessage);
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
    const contentType = response.headers.get('content-type') || '';
    const responseText = await response.text();
    
    // Check if response is empty
    if (!responseText || responseText.trim() === '') {
      console.error('Empty response from server:', {
        url,
        status: response.status,
        contentType
      });
      throw new Error('Empty response from server');
    }
    
    // Check if response is HTML (likely an error page or redirect)
    if (contentType.includes('text/html') || responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<!doctype')) {
      console.error('Received HTML instead of JSON:', {
        url,
        status: response.status,
        contentType,
        preview: responseText.substring(0, 200)
      });
      throw new Error('Server returned HTML instead of JSON. This may indicate an authentication issue or server error.');
    }
    
    // Try to parse as JSON
    try {
      return JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse JSON response:', {
        url,
        status: response.status,
        contentType,
        responsePreview: responseText.substring(0, 500),
        parseError: e.message
      });
      throw new Error(`Invalid JSON response from server: ${e.message}. Response preview: ${responseText.substring(0, 200)}`);
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

/**
 * Stream chat API call using Server-Sent Events
 * @param {string} url - The streaming endpoint URL
 * @param {Object} options - Request options
 * @param {Function} onChunk - Callback for each chunk received
 * @param {Function} onMetadata - Callback for metadata updates
 * @param {Function} onDone - Callback when stream completes
 * @param {Function} onError - Callback for errors
 * @param {number} timeout - Timeout in milliseconds (default: 300000 = 5 minutes)
 * @returns {Promise<void>}
 */
export const streamChatApi = async (
  url,
  options = {},
  { onChunk, onMetadata, onDone, onError },
  timeout = 300000 // 5 minutes default timeout
) => {
  // Try to get access_token first (new API), fallback to auth_token (legacy)
  const accessToken = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  const authToken = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  const token = accessToken || authToken;

  // Create AbortController for timeout
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, timeout);

  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    body: options.body,
    signal: abortController.signal,
  };

  try {
    console.log('Starting stream request to:', url, `(timeout: ${timeout}ms)`);
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      // Try to read error response for better debugging
      let errorMessage = `HTTP error! status: ${response.status}`;
      const contentType = response.headers.get('content-type');
      
      try {
        const errorText = await response.text();
        console.error('Stream endpoint error response:', {
          status: response.status,
          contentType: contentType,
          body: errorText.substring(0, 500)
        });
        
        // If it's HTML (likely a Laravel error page), provide helpful message
        if (contentType && contentType.includes('text/html')) {
          errorMessage = `Server error (${response.status}). Check server logs.`;
        } else if (errorText) {
          try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorData.error || errorMessage;
          } catch {
            errorMessage = errorText.substring(0, 200) || errorMessage;
          }
        }
      } catch (e) {
        console.error('Failed to read error response:', e);
      }
      
      throw new Error(errorMessage);
    }
    
    // Check if Content-Type is correct
    const contentType = response.headers.get('content-type');
    console.log('Response Content-Type:', contentType);
    if (contentType && !contentType.includes('text/event-stream')) {
      console.warn('Warning: Expected text/event-stream, got:', contentType);
    }

    console.log('Starting to read stream...');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let currentEvent = 'message'; // Default event type
    let eventCount = 0;

    // Clear timeout once we start receiving data
    clearTimeout(timeoutId);

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        console.log('Stream reader done. Total events processed:', eventCount);
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // Keep incomplete line in buffer

      for (const line of lines) {
        const trimmedLine = line.trim();
        
        // Skip empty lines
        if (!trimmedLine) continue;

        if (trimmedLine.startsWith('event: ')) {
          currentEvent = trimmedLine.substring(7).trim();
          continue;
        }

        if (trimmedLine.startsWith('data: ')) {
          const dataStr = trimmedLine.substring(6).trim();
          if (!dataStr) continue;

          try {
            const data = JSON.parse(dataStr);

            eventCount++;
            switch (currentEvent) {
              case 'chunk':
                if (onChunk && data.text) {
                  onChunk(data.text);
                }
                break;
              case 'metadata':
                if (onMetadata) {
                  onMetadata(data);
                }
                break;
              case 'done':
                console.log('Stream completed. Total events:', eventCount);
                if (onDone) {
                  onDone(data);
                }
                break;
              case 'error':
                console.error('SSE error event received:', data);
                if (onError) {
                  onError(new Error(data.message || 'Unknown error'));
                }
                break;
              default:
                console.log('Unknown SSE event type:', currentEvent, data);
                // Fallback: treat as chunk if it has text
                if (data.text && onChunk) {
                  onChunk(data.text);
                }
            }
          } catch (e) {
            console.error('Failed to parse SSE data:', e, dataStr);
          }
        }
      }
    }

    // Process any remaining buffer
    if (buffer.trim()) {
      const lines = buffer.split('\n');
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('event: ')) {
          currentEvent = trimmedLine.substring(7).trim();
        } else if (trimmedLine.startsWith('data: ')) {
          const dataStr = trimmedLine.substring(6).trim();
          if (dataStr) {
            try {
              const data = JSON.parse(dataStr);
              if (currentEvent === 'chunk' && data.text && onChunk) {
                onChunk(data.text);
              } else if (currentEvent === 'done' && onDone) {
                onDone(data);
              }
            } catch (e) {
              console.error('Failed to parse remaining SSE data:', e);
            }
          }
        }
      }
    }
  } catch (error) {
    // Clear timeout on error
    clearTimeout(timeoutId);
    
    console.error('Stream API call failed:', error);
    
    // Check if it's a timeout/abort error
    if (error.name === 'AbortError' || abortController.signal.aborted) {
      const timeoutError = new Error('درخواست به دلیل طولانی شدن زمان پاسخ لغو شد. لطفاً دوباره تلاش کنید.');
      if (onError) {
        onError(timeoutError);
      } else {
        throw timeoutError;
      }
      return;
    }
    
    if (onError) {
      onError(error);
    } else {
      throw error;
    }
  }
};

export default API_ENDPOINTS;
