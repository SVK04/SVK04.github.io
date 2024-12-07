import React, { createContext, useContext, useState, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { TbInfoSquare } from 'react-icons/tb';

const NotificationContext = createContext();

const typeColorMap = {
  info: {
    icon: <HiOutlineInformationCircle size={24} className="text-sky-500 font-bold" />,
    bg: 'from-sky-100',
  },
  success: {
    icon: <FaRegCircleCheck size={24} className="text-emerald-500 font-bold" />,
    bg: 'from-emerald-100',
  },
  warning: {
    icon: <TbInfoSquare size={24} className="text-yellow-500 font-bold" />,
    bg: 'from-yellow-100',
  },
  error: {
    icon: <MdOutlineErrorOutline size={24} className="text-red-500 font-bold" />,
    bg: 'from-red-100',
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

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const notifyMethods = {
    success: (message, options = { autoClose: 2500, buttons: [] }) =>
      showNotification(message, 'success', options.autoClose, options.buttons),
    error: (message, options = { autoClose: 3600, buttons: [] }) =>
      showNotification(message, 'error', options.autoClose, options.buttons),
    info: (message, options = { autoClose: 2700, buttons: [] }) =>
      showNotification(message, 'info', options.autoClose, options.buttons),
    warning: (message, options = { autoClose: 3000, buttons: [] }) =>
      showNotification(message, 'warning', options.autoClose, options.buttons),
  };

  return (
    <NotificationContext.Provider value={{ ...notifyMethods, closeNotification }}>
      {children}
      <NotificationContainer {...notification} onClose={closeNotification} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

const NotificationContainer = ({ open, message, type, autoClose, buttons = [], onClose }) => {
  const handleCloseToast = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleCloseToast}
      autoHideDuration={autoClose || null}
      key={message}
    >
      <div
        className={`w-auto min-w-[250px] max-w-[540px] relative p-3 mt-2 transform overflow-hidden rounded-xl border border-gray-200 shadow-lg transition-all cursor-default bg-gradient-to-r ${typeColorMap[type]?.bg} to-white to-20% `}
      >
        <div className="flex justify-between gap-2">
          <div className="flex items-center ml-2">
            <div className="flex justify-center">
              <div className="p-2 mr-4 flex items-center justify-center bg-white rounded-rounded10 border border-gray-200 shadow-sm">
                {typeColorMap[type]?.icon}
              </div>
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold capitalize">{type}</div>
              <div className="text-base font-medium text-gray-600 break-words whitespace-pre-wrap">{message}</div>
            </div>
          </div>
          <div className="" onClick={handleCloseToast} role="presentation">
            <IoClose size={24} className="text-gray-500 m-0.5 cursor-pointer" />
          </div>
        </div>
        {buttons?.length > 0 && (
          <div className="flex items-center gap-3 justify-end mt-3">
            {buttons?.map((button, index) => (
              <div role="presentation" onClick={handleCloseToast} key={index}>
                {button}
              </div>
            ))}
          </div>
        )}
      </div>
    </Snackbar>
  );
};
