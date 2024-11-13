// context/authContext.tsx
'use client'
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useCallback, useRef } from 'react';

interface AuthContextProps {
  fetchLoginStatus: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {;

  const router = useRouter();

  
  const fetchLoginStatus = useCallback(async () => {
    try {
      const response = await fetch('https://testimonial-server-production.up.railway.app/api/auth/status', {
        credentials: 'include', // Include credentials to send the session cookie
      });
      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', 'true');
      } else if(response.status === 401) {
        localStorage.removeItem('isLoggedIn');
        router.push('/login'); // Redirect to login page
      }
      
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }, [router]);

  useEffect(() => {
  
    fetchLoginStatus();

  }, [fetchLoginStatus]);
  return (
    <AuthContext.Provider value={{ fetchLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
