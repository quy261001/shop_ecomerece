'use client'

import { App } from 'antd';

export const useApp = () => {
  const { message, modal, notification } = App.useApp();
  return {
    message: { ...message },
    modal,
    notification: { ...notification, placement: 'topRight' },
  };
};
