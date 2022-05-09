import { toast } from 'react-toastify';
import { ToastHandlerType } from '../types';

export const toastHandler: ToastHandlerType = (type, message) => {
  if (type === 'error') {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'info') {
    toast.info(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const ToastType = {
  Warn: 'warn',
  Success: 'success',
  Info: 'info',
  Error: 'error',
};

export const validateMobileNo = (input: string) => {
  return /^[0-9]+$/.test(input);
};
export const validatePinCode = (input: string) => {
  return /^[0-9]+$/.test(input) && input.length === 6;
};
export const validateOnlyString = (input: string) => {
  return /^[a-z A-Z]+$/.test(input) || input === '';
};
export const validateEmail = (input: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};
export const validatePassword = (input: string) => {
  return /^(?=.{8,20}$)\D*\d/.test(input);
};
