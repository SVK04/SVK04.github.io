import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconAlertTriangle, IconCircleCheck, IconCircleX, IconInfoCircle, IconX } from '@tabler/icons-react';

const NotificationContext = createContext();

const typeColorMap = {
  info: {
    icon: <IconInfoCircle size={22} className="text-sky-500 font-bold" />,
    bg: 'from-sky-100 to-white',
  },
  success: {
    icon: <IconCircleCheck size={22} className="text-emerald-500 font-bold" />,
    bg: 'from-emerald-100 to-white',
  },
  warning: {
    icon: <IconAlertTriangle size={22} className="text-yellow-500 font-bold" />,
    bg: 'from-yellow-100 to-white',
  },
  error: {
    icon: <IconCircleX size={22} className="text-red-500 font-bold" />,
    bg: 'from-red-100 to-white',
  },
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: '',
    autoClose: 3000,
    buttons: [],
  });

  const showNotification = (message, type, autoClose = 3000, buttons = []) => {
    setNotification({
      open: true,
      message,
      type,
      autoClose,
      buttons: buttons.slice(0, 2),
    });
  };

  const closeNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, open: false }));
  }, []);

  const notifyMethods = {
    success: (message, options = {}) =>
      showNotification(message, 'success', options.autoClose || 2500, options.buttons || []),
    error: (message, options = {}) =>
      showNotification(message, 'error', options.autoClose || 3600, options.buttons || []),
    info: (message, options = {}) =>
      showNotification(message, 'info', options.autoClose || 2700, options.buttons || []),
    warning: (message, options = {}) =>
      showNotification(message, 'warning', options.autoClose || 3000, options.buttons || []),
  };

  return (
    <NotificationContext.Provider value={{ ...notifyMethods, closeNotification }}>
      {children}
      {notification.open && <NotificationContainer {...notification} onClose={closeNotification} />}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

const NotificationContainer = ({ open, message, type, autoClose, buttons = [], onClose }) => {
  useEffect(() => {
    if (open && autoClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [open, autoClose, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] animate-slideDown">
      <div
        className={`relative p-3 w-auto min-w-[250px] max-w-[540px] rounded-xl border border-gray-200 shadow-lg bg-gradient-to-r ${typeColorMap[type]?.bg} transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between gap-3 items-start">
          <div className="flex items-center">
            <div className="p-2 mr-3 flex items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm">
              {typeColorMap[type]?.icon}
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold capitalize">{type}</div>
              <div className="text-base font-medium text-gray-600 break-words whitespace-pre-wrap">{message}</div>
            </div>
          </div>
          <IconX size={22} className="text-gray-500 cursor-pointer hover:text-gray-700 transition" onClick={onClose} />
        </div>

        {buttons.length > 0 && (
          <div className="flex items-center gap-3 justify-end mt-3">
            {buttons.map((button, index) => (
              <div role="presentation" onClick={onClose} key={index}>
                {button}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
