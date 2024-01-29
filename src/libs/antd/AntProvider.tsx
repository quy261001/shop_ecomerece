'use client';

import { App, ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

import { NextNProgressClient } from '@/components';
import StyledComponentsRegistry from './StyledComponentsRegistry';

export function AntProvider({ children }: PropsWithChildren) {

  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        <NextNProgressClient />
        <App className='h-full'>{children}</App>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
}
