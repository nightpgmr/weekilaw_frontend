import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import AddMoneyModal from './AddMoneyModal.jsx';
import '../styles/AccountPage.css';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';

const AccountPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [recentChats, setRecentChats] = useState([]);
  const [isLoadingChats, setIsLoadingChats] = useState(true);
  const [allChats, setAllChats] = useState([]);
  const [isLoadingAllChats, setIsLoadingAllChats] = useState(true);
  const [editingChatId, setEditingChatId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);

  // Check authentication and fetch user profile and recent chats on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('is_authenticated') === 'true' ||
                           sessionStorage.getItem('is_authenticated') === 'true';

    if (!isAuthenticated) {
      navigate('/auth/sign-in');
      return;
    }

    fetchUserProfile();
    // Try to refresh wallet balance from dedicated endpoint (optional)
    // This will fail silently if endpoint doesn't exist yet
    setTimeout(() => {
      loadWalletBalance().catch(() => {
        // Silently fail - balance from user profile is already set
      });
    }, 500);
    loadRecentChats();
    loadAllChats();

    // Check for payment callback
    const paymentStatus = searchParams.get('payment');
    if (paymentStatus === 'success') {
      const amount = searchParams.get('amount');
      alert(`پرداخت با موفقیت انجام شد! مبلغ ${parseInt(amount || 0).toLocaleString('fa-IR')} تومان به کیف پول شما اضافه شد.`);
      loadWalletBalance();
      // Clean URL
      navigate('/account', { replace: true });
    } else if (paymentStatus === 'failed' || paymentStatus === 'cancelled') {
      const message = searchParams.get('message') || 'پرداخت ناموفق بود';
      alert(message);
      navigate('/account', { replace: true });
    }
  }, [navigate, searchParams]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
    };

    if (openMenuId) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openMenuId]);

  const fetchUserProfile = async () => {
    try {
      const data = await apiCall(API_ENDPOINTS.USER.PROFILE);

      if (data.success) {
        setUser(data.user);
        // Set wallet balance from user profile (this is the primary source)
        if (data.user.wallet_balance !== undefined) {
          setWalletBalance(data.user.wallet_balance);
        }
        // Store user data in localStorage for future use
        localStorage.setItem('user_data', JSON.stringify(data.user));
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      // Try to get user data from localStorage as fallback
      const storedUser = localStorage.getItem('user_data');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        if (parsed.wallet_balance !== undefined) {
          setWalletBalance(parsed.wallet_balance);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const loadWalletBalance = async () => {
    // Only try to load from wallet endpoint if it's available
    // Otherwise, we'll use the balance from user profile
    try {
      setIsLoadingBalance(true);
      const data = await apiCall(API_ENDPOINTS.WALLET.BALANCE);
      if (data.success && data.balance !== undefined) {
        setWalletBalance(data.balance);
      }
    } catch (error) {
      // Silently fail - wallet endpoint might not be available on production yet
      // The balance from user profile will be used instead
      // Don't log error to avoid console spam
    } finally {
      setIsLoadingBalance(false);
    }
  };

  const loadRecentChats = async () => {
    try {
      setIsLoadingChats(true);
      const data = await apiCall(API_ENDPOINTS.CHAT.RECENT + '?limit=3');

      if (data.success && data.chats) {
        setRecentChats(data.chats.slice(0, 3)); // Limit to 3 chats
      }
    } catch (error) {
      console.error('Error loading recent chats:', error);
      // Keep empty array on error
    } finally {
      setIsLoadingChats(false);
    }
  };

  const loadAllChats = async () => {
    try {
      setIsLoadingAllChats(true);
      const data = await apiCall(API_ENDPOINTS.CHAT.RECENT + '?limit=100'); // Get all chats

      if (data.success && data.chats) {
        setAllChats(data.chats);
      }
    } catch (error) {
      console.error('Error loading all chats:', error);
      // Keep empty array on error
    } finally {
      setIsLoadingAllChats(false);
    }
  };

  const handleEditChat = (chat) => {
    setEditingChatId(chat.id);
    setEditingTitle(chat.title);
    setOpenMenuId(null);
  };

  const handleSaveEdit = async (chatId) => {
    try {
      const data = await apiCall(`${API_ENDPOINTS.CHAT.BASE}/${chatId}`, {
        method: 'PUT',
        body: JSON.stringify({ title: editingTitle.trim() }),
      });

      if (data.success) {
        // Update the chat in the local state
        setAllChats(prev => prev.map(chat =>
          chat.id === chatId ? { ...chat, title: editingTitle.trim() } : chat
        ));
        setEditingChatId(null);
        setEditingTitle('');
        setOpenMenuId(null);
        alert('عنوان چت بروزرسانی شد');
      } else {
        alert('خطا در بروزرسانی عنوان: ' + (data.message || 'خطای ناشناخته'));
      }
    } catch (error) {
      console.error('Error updating chat:', error);
      alert('خطا در بروزرسانی عنوان چت');
    }
  };

  const handleCancelEdit = () => {
    setEditingChatId(null);
    setEditingTitle('');
    setOpenMenuId(null);
  };

  const handleDeleteChat = async (chatId) => {
    const confirmDelete = window.confirm('آیا مطمئن هستید که می‌خواهید این چت را حذف کنید؟ این عمل قابل برگرداندن نیست.');

    if (!confirmDelete) return;

    try {
      const data = await apiCall(`${API_ENDPOINTS.CHAT.BASE}/${chatId}`, {
        method: 'DELETE',
      });

      if (data.success) {
        // Remove the chat from local state
        setAllChats(prev => prev.filter(chat => chat.id !== chatId));
        // Also remove from recent chats if it exists there
        setRecentChats(prev => prev.filter(chat => chat.id !== chatId));
        alert('چت با موفقیت حذف شد');
      } else {
        alert('خطا در حذف چت: ' + (data.message || 'خطای ناشناخته'));
      }
    } catch (error) {
      console.error('Error deleting chat:', error);
      alert('خطا در حذف چت');
    }
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('is_authenticated');
    sessionStorage.clear();

    // Redirect to home page first
    navigate('/');
  };

  return (
    <PageLayout>
      <div className="account-page" dir="rtl">
      {/* Header Section */}
      <div className="_accountHeader_19xmy_73">
        <div className="_background_19xmy_87">
          <div className="_backgroundWidthWrapper_19xmy_102">
            <div className="_backgroundImage_19xmy_111">
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1">
                  <path d="M120 240C186.274 240 240 186.274 240 120H180C180 153.137 153.137 180 120 180C86.8629 180 60 153.137 60 120C60 86.863 86.8629 60 120 60V0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z" fill="url(#paint0_linear_88_1910)"></path>
                  <path d="M200 80C222.091 80 240 62.0914 240 40C240 17.9087 222.091 0 200 0C177.909 0 160 17.9087 160 40C160 62.0914 177.909 80 200 80Z" fill="url(#paint1_linear_88_1910)"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_88_1910" x1="-2.32039e-06" y1="240" x2="311.437" y2="-71.4375" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ADB5B9"></stop>
                    <stop offset="1" stopColor="#F5F5F3"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_88_1910" x1="-2.32039e-06" y1="240" x2="311.437" y2="-71.4375" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ADB5B9"></stop>
                    <stop offset="1" stopColor="#F5F5F3"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="_content_19xmy_172">
          <div className="_profilePicture_19xmy_187">
            <div className="_profileAvatar_19xmy_187">
              {loading ? '...' : (user?.name ? user.name.charAt(0).toUpperCase() : '?')}
            </div>
          </div>
          <div className="_name_19xmy_213">
            {loading ? 'در حال بارگذاری...' : `سلام، ${user?.name || [user?.first_name, user?.last_name].filter(Boolean).join(' ') || 'کاربر'}`}
          </div>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="_accountSection_llh05_73 _walletSection">
        <div className="_title_llh05_109">کیف پول</div>
        <div className="_walletContent">
          <div className="_walletBalance">
            <div className="_walletIcon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="_walletInfo">
              <div className="_walletLabel">موجودی کیف پول</div>
              <div className="_walletAmount">
                {isLoadingBalance ? 'در حال بارگذاری...' : `${(walletBalance / 10).toLocaleString('fa-IR')} تومان`}
              </div>
            </div>
          </div>
          <button 
            className="_addMoneyButton"
            onClick={() => setShowAddMoneyModal(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            افزایش موجودی
          </button>
        </div>
      </div>

      {/* Recent Cases Section */}
      <div className="_accountSection_llh05_73 _noGap_llh05_106 _recentCases_1b17f_494">
        <div className="_title_llh05_109">چت های اخیر</div>
        <div>
          <div className="_carouselContainer_1b17f_430">
            <div className="styles-module__container___UTp91">
              <div className="styles-module__cardsContainer___5LjEc _cardsPosition_1b17f_459">
                <div className="styles-module__cards___cdHPc _cardsContainer_1b17f_468 _noCases_1b17f_305" style={{gap: '0px 40px', gridAutoColumns: 'minmax(373px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(373px, 1fr))'}}>
                  {/* New Chat Card */}
                  <div className="_card_10t7u_73 _placeholder_10t7u_104 _placeholderCard_1b17f_405" onClick={() => navigate('/chat/new')} style={{cursor: 'pointer'}}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="_addIcon_1b17f_408">
                      <path d="M29 20C29 19.4477 28.5523 19 28 19C27.4477 19 27 19.4477 27 20V27H20C19.4477 27 19 27.4477 19 28C19 28.5523 19.4477 29 20 29H27V36C27 36.5523 27.4477 37 28 37C28.5523 37 29 36.5523 29 36V29H36C36.5523 29 37 28.5523 37 28C37 27.4477 36.5523 27 36 27H29V20Z"></path>
                    </svg>
                    چت جدید ایجاد کنید
                  </div>

                  {/* Recent Chats */}
                  {isLoadingChats ? (
                    // Loading placeholders
                    <>
                      <div className="_card_10t7u_73 _placeholder_10t7u_104 _noBody_10t7u_81 _placeholderCard_1b17f_405"></div>
                      <div className="_card_10t7u_73 _placeholder_10t7u_104 _noBody_10t7u_81 _placeholderCard_1b17f_405"></div>
                    </>
                  ) : recentChats.length > 0 ? (
                    recentChats.map((chat) => (
                      <div
                        key={chat.id}
                        className="_card_10t7u_73"
                        onClick={() => navigate(`/chat/${chat.id}`)}
                        style={{cursor: 'pointer'}}
                      >
                        <div className="_cardHeader_10t7u_87">
                          <div className="_cardIcon_10t7u_92">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#0E5FE3"/>
                            </svg>
                          </div>
                          <div className="_cardTitle_10t7u_97">{chat.title}</div>
                        </div>
                        <div className="_cardBody_10t7u_102">
                          <div className="_cardDescription_10t7u_107">
                            {chat.preview}
                          </div>
                          <div className="_cardMeta_10t7u_112">
                            <span>{chat.message_count} پیام</span>
                            <span>•</span>
                            <span>{new Date(chat.last_message_at).toLocaleDateString('fa-IR')}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // No chats placeholder
                    <>
                      <div className="_card_10t7u_73 _placeholder_10t7u_104 _noBody_10t7u_81 _placeholderCard_1b17f_405"></div>
                      <div className="_card_10t7u_73 _placeholder_10t7u_104 _noBody_10t7u_81 _placeholderCard_1b17f_405"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Cases Section */}
      <div className="_accountSection_llh05_73 _allCases_1b17f_509">
        <div className="_title_llh05_109">همه چت ها</div>
        <div>
          {isLoadingAllChats ? (
            <div className="_noCasesContainer_1b17f_305">
              <div className="_title_1b17f_313">در حال بارگذاری...</div>
            </div>
          ) : allChats.length > 0 ? (
            <div className="_chatsListContainer" style={{maxWidth: '800px', margin: '0 auto'}}>
              {allChats.map((chat) => (
                <div
                  key={chat.id}
                  className="_chatListItem"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    marginBottom: '12px',
                    backgroundColor: 'white',
                    transition: 'all 0.2s ease',
                    cursor: editingChatId === chat.id ? 'default' : 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (editingChatId !== chat.id) {
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                  onClick={editingChatId === chat.id ? undefined : () => navigate(`/chat/${chat.id}`)}
                >
                  <div
                    className="_chatIcon"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#f3f4f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '12px',
                      flexShrink: 0
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#6b7280"/>
                    </svg>
                  </div>

                  <div
                    className="_chatContent"
                    style={{flex: 1, marginRight: '16px'}}
                    onClick={editingChatId === chat.id ? (e) => e.stopPropagation() : () => navigate(`/chat/${chat.id}`)}
                  >
                    {editingChatId === chat.id ? (
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} onClick={(e) => e.stopPropagation()}>
                        <input
                          type="text"
                          value={editingTitle}
                          onChange={(e) => setEditingTitle(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px'
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit(chat.id);
                            if (e.key === 'Escape') handleCancelEdit();
                          }}
                          autoFocus
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSaveEdit(chat.id);
                          }}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          ذخیره
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCancelEdit();
                          }}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#6b7280',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          لغو
                        </button>
                      </div>
                    ) : (
                      <div className="_chatTitle" style={{fontWeight: '600', color: '#111827', marginBottom: '4px'}}>
                        {chat.title}
                      </div>
                    )}

                    <div className="_chatPreview" style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px'}}>
                      {chat.preview}
                    </div>

                    <div className="_chatMeta" style={{fontSize: '12px', color: '#9ca3af'}}>
                      <span>{chat.message_count} پیام</span>
                      <span style={{margin: '0 8px'}}>•</span>
                      <span>{new Date(chat.last_message_at).toLocaleDateString('fa-IR')}</span>
                    </div>
                  </div>

                  <div className="_chatMenu" style={{position: 'relative'}}>
                    <button
                      className="_menuButton"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        color: '#6b7280'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (editingChatId !== chat.id) {
                          setOpenMenuId(openMenuId === chat.id ? null : chat.id);
                        }
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="2.5" r="1.5"/>
                        <circle cx="8" cy="8" r="1.5"/>
                        <circle cx="8" cy="13.5" r="1.5"/>
                      </svg>
                    </button>

                    {openMenuId === chat.id && (
                      <div
                        className="_dropdownMenu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: '0',
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          zIndex: 1000,
                          minWidth: '140px',
                          padding: '4px 0'
                        }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleEditChat(chat);
                            setOpenMenuId(null);
                          }}
                          style={{
                            width: '100%',
                            padding: '8px 16px',
                            background: 'none',
                            border: 'none',
                            textAlign: 'right',
                            cursor: 'pointer',
                            color: '#374151',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          ویرایش
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleDeleteChat(chat.id);
                            setOpenMenuId(null);
                          }}
                          style={{
                            width: '100%',
                            padding: '8px 16px',
                            background: 'none',
                            border: 'none',
                            textAlign: 'right',
                            cursor: 'pointer',
                            color: '#dc2626',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          حذف
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="_noCasesContainer_1b17f_305">
              <div className="_title_1b17f_313">چتی وجود ندارد</div>
              <div className="_description_1b17f_322">اینجا جایی است که چت های شما زندگی خواهند کرد.</div>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 5.67383V16.0002C35 17.4003 35 18.1004 35.2725 18.6352C35.5122 19.1056 35.8946 19.488 36.365 19.7277C36.8998 20.0002 37.5999 20.0002 39 20.0002H49.3263M35 42.5H20M40 32.5H20M50 24.9706V43C50 47.2004 50 49.3006 49.1825 50.9049C48.4635 52.3161 47.3161 53.4635 45.9049 54.1825C44.3006 55 42.2004 55 38 55H22C17.7996 55 15.6994 55 14.0951 54.1825C12.6839 53.4635 11.5365 52.3161 10.8175 50.9049C10 49.3006 10 47.2004 10 43V17C10 12.7996 10 10.6994 10.8175 9.09507C11.5365 7.68386 12.6839 6.5365 14.0951 5.81745C15.6994 5 17.7996 5 22 5H30.0294C31.8639 5 32.7811 5 33.6442 5.20723C34.4095 5.39095 35.1411 5.69398 35.8121 6.1052C36.569 6.56901 37.2176 7.21758 38.5147 8.51472L46.4853 16.4853C47.7824 17.7824 48.431 18.431 48.8948 19.1879C49.306 19.8589 49.609 20.5905 49.7928 21.3558C50 22.2189 50 23.1361 50 24.9706Z" stroke="url(#paint0_radial_6906_51451)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <defs>
                  <radialGradient id="paint0_radial_6906_51451" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.2308 7.72728) rotate(77.8834) scale(60.8341 57.0518)">
                    <stop stopColor="#B78FE2"></stop>
                    <stop offset="1" stopColor="#0C4EB0"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="_actions_1b17f_137">
        <div className="_horizontalRule_h2a32_73"></div>
        <div className="_actionButtons_1b17f_152">
                    <div className="_button_16eqb_73 _button_1b17f_165 _settingsButton_1b17f_168" style={{gap: '20px'}} onClick={() => navigate('/settings')}>
                      <div className="_label_16eqb_93">تنظیمات</div>
                      <div className="_icon_16eqb_114">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="_settingsIcon_1b17f_177">
                <path id="Subtract (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M8.43438 4.51673L7.68918 4.85752C7.29771 5.03655 6.92599 5.25211 6.57842 5.50001L5.91028 5.97656L3.54852 5.02858L1.84946 7.97144L3.84969 9.54151L3.77283 10.3567C3.7529 10.568 3.74268 10.7826 3.74268 11C3.74268 11.2172 3.75289 11.4317 3.77279 11.6429L3.84959 12.458L1.84873 14.0286L3.54779 16.9714L5.91007 16.0232L6.57822 16.4998C6.92585 16.7478 7.29764 16.9634 7.68918 17.1425L8.43438 17.4833L8.79391 20L12.192 20L12.5516 17.4831L13.2967 17.1422C13.688 16.9632 14.0596 16.7477 14.4071 16.4999L15.0753 16.0233L17.4374 16.9714L19.1365 14.0286L17.1357 12.4581L17.2126 11.643C17.2325 11.4317 17.2427 11.2173 17.2427 11C17.2427 10.7827 17.2325 10.5683 17.2126 10.357L17.1357 9.54189L19.1365 7.97141L17.4374 5.02856L15.0752 5.97671L14.4071 5.50012C14.0596 5.25228 13.688 5.03676 13.2967 4.85776L12.5516 4.51694L12.192 2L8.79391 2L8.43438 4.51673ZM13.9206 3.49369L13.677 1.78787C13.5714 1.04889 12.9385 0.5 12.192 0.5H8.79391C8.04744 0.5 7.41456 1.04889 7.30899 1.78787L7.06534 3.4934C6.58632 3.71246 6.13192 3.97603 5.70741 4.27881L4.10727 3.63654C3.41452 3.35847 2.62272 3.63212 2.24948 4.27858L0.550426 7.22144C0.177188 7.8679 0.336103 8.69044 0.923289 9.15135L2.27945 10.2159C2.25512 10.474 2.24268 10.7355 2.24268 11C2.24268 11.2643 2.2551 11.5257 2.27941 11.7836L0.922559 12.8487C0.335373 13.3096 0.176456 14.1321 0.549694 14.7786L2.24875 17.7214C2.62199 18.3679 3.41379 18.6415 4.10654 18.3635L5.70716 17.721C6.13174 18.0239 6.58623 18.2875 7.06534 18.5066L7.30899 20.2121C7.41456 20.9511 8.04744 21.5 8.79391 21.5H12.192C12.9385 21.5 13.5714 20.9511 13.677 20.2121L13.9206 18.5063C14.3995 18.2873 14.8538 18.0237 15.2782 17.721L16.8787 18.3635C17.5714 18.6415 18.3632 18.3679 18.7365 17.7214L20.4355 14.7786C20.8088 14.1321 20.6498 13.3096 20.0627 12.8486L18.7059 11.7837C18.7302 11.5257 18.7427 11.2643 18.7427 11C18.7427 10.7357 18.7302 10.4743 18.7059 10.2163L20.0627 9.15133C20.6498 8.69042 20.8088 7.86788 20.4355 7.22142L18.7365 4.27856C18.3632 3.6321 17.5714 3.35845 16.8787 3.63651L15.2781 4.27895C14.8538 3.97624 14.3995 3.71273 13.9206 3.49369ZM14.9927 11C14.9927 13.4853 12.978 15.5 10.4927 15.5C8.00739 15.5 5.99268 13.4853 5.99268 11C5.99268 8.51472 8.00739 6.5 10.4927 6.5C12.978 6.5 14.9927 8.51472 14.9927 11ZM13.4927 11C13.4927 12.6569 12.1495 14 10.4927 14C8.83582 14 7.49268 12.6569 7.49268 11C7.49268 9.34315 8.83582 8 10.4927 8C12.1495 8 13.4927 9.34315 13.4927 11Z" fill="#666666"></path>
              </svg>
            </div>
          </div>
          <div className="_button_16eqb_73 _button_1b17f_165 _exitButton_1b17f_168" style={{gap: '20px'}} onClick={handleLogout}>
            <div className="_label_16eqb_93">خروج</div>
            <div className="_icon_16eqb_114">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3.75024C2 3.33603 2.33579 3.00024 2.75 3.00024H13.25C13.6642 3.00024 14 3.33603 14 3.75024V9.00024C14 9.41446 13.6642 9.75024 13.25 9.75024C12.8358 9.75024 12.5 9.41446 12.5 9.00024V4.50024H3.5V19.5002H12.5V15.0002C12.5 14.586 12.8358 14.2502 13.25 14.2502C13.6642 14.2502 14 14.586 14 15.0002V20.2502C14 20.6645 13.6642 21.0002 13.25 21.0002H2.75C2.33579 21.0002 2 20.6645 2 20.2502V3.75024Z" fill="#0E5FE3"></path>
                <path d="M17.75 6.75024C17.3358 6.75024 17 7.08603 17 7.50024C17 7.70735 17.0839 7.89484 17.2197 8.03056L20.4392 11.2502H7.25C6.83579 11.2502 6.5 11.586 6.5 12.0002C6.5 12.4145 6.83579 12.7502 7.25 12.7502H20.4392L17.2196 15.9699C17.0839 16.1056 17 16.2931 17 16.5002C17 16.9145 17.3358 17.2502 17.75 17.2502C17.9607 17.2502 18.151 17.1634 18.2873 17.0235L22.7733 12.5375C22.9131 12.4013 23 12.2109 23 12.0002C23 11.7896 22.9131 11.5992 22.7733 11.463L18.2873 6.97695C18.151 6.8371 17.9607 6.75024 17.75 6.75024Z" fill="#0E5FE3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Add Money Modal */}
      <AddMoneyModal
        isOpen={showAddMoneyModal}
        onClose={() => setShowAddMoneyModal(false)}
        onSuccess={() => {
          setShowAddMoneyModal(false);
          loadWalletBalance();
        }}
      />
      </div>
    </PageLayout>
  );
};

export default AccountPage;

