// components/ToastContext.js
'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import ToastNotification from './ToastNotification';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(({ message, type = 'success', duration = 4000 }) => {
    console.log(message, type, duration);

    setToast({ message, type, duration });
  }, []);

  const handleClose = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <ToastNotification
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={handleClose}
        />
      )}
    </ToastContext.Provider>
  );
}
