'use client';
import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react'; // icons for different types

export default function ToastNotification({
  message = "Success",
  type = "success", // 'success' | 'error' | 'info'
  duration = 4000,
  onClose
}) {
  const [progress, setProgress] = useState(100);

  // Color and Icon mapping based on type
  const colors = {
    success: {
      border: 'border-green-500',
      bg: 'bg-green-100',
      fill: 'bg-green-600',
      icon: <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
    },
    error: {
      border: 'border-red-500',
      bg: 'bg-red-100',
      fill: 'bg-red-600',
      icon: <XCircle className="text-red-600 mt-1 w-5 h-5" />
    },
    info: {
      border: 'border-blue-500',
      bg: 'bg-blue-100',
      fill: 'bg-blue-600',
      icon: <Info className="text-blue-600 mt-1 w-5 h-5" />
    }
  };

  const { border, bg, fill, icon } = colors[type] || colors.info;

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(percentage);
      if (percentage === 0) {
        clearInterval(interval);
        onClose?.();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <div className={`fixed top-6 right-6 w-[320px] bg-white ${border} shadow-md z-[9999] animate-slide-in rounded-xl px-1`}>
      <div className="flex items-start gap-3 px-4 py-3">
        {icon}
        <div className="flex-1 text-sm text-gray-800">{message}</div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className={`h-1 ${bg} rounded-b-2xl overflow-hidden   `}>
        <div
          className={`h-full ${fill} transition-all duration-75`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
