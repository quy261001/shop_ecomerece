'use client';

import { Modal as AntModal, ModalProps as AntModalProps, Button, Typography } from 'antd';
import { isString, isUndefined } from 'lodash';

import { Icon } from '../Icon';
import React from 'react';
import clsx from 'clsx';

const { Title } = Typography;

export interface ModalProps extends AntModalProps {
  isLoading?: boolean;
  headerClassName?: string;
  bodyClassName?: string;
  contentClassName?: string;
  onSubmit?: (e: any) => void;
}

export function Modal({
  title,
  children,
  open,
  rootClassName,
  headerClassName,
  contentClassName,
  bodyClassName,
  footer,
  okText,
  okButtonProps,
  ...props
}: ModalProps) {

  return (
    <AntModal
      centered
      closable
      open={open}
      classNames={{
        content: clsx(
          'p-0 [&_.ant-modal-close]:h-10 [&_.ant-modal-close]:w-10 [&_.ant-modal-close]:bg-gray-400 [&_.ant-modal-close]:dark:bg-gray-800 [&_.ant-modal-close]:rounded-full',
          contentClassName,
        ),
        header: clsx('px-8 pt-8 mb-8', headerClassName),
        body: clsx('px-8 overflow-auto', bodyClassName || 'min-h-[230px]'),
        footer: 'px-8 pb-8 mt-6 empty:hidden',
      }}
      title={
        isString(title) ? (
          <Title
            className='mb-0 h-10 truncate pr-[56px] leading-[40px] sm:h-auto'
          >
            {title}
          </Title>
        ) : isUndefined(title) ? null : (
          title || <div className='h-[40px]' />
        )
      }
      footer={
        footer
          ? footer
          : isUndefined(footer)
            ? [
                <Button
                  key='submit'
                  size='large'
                  type='primary'
                  className='min-w-[126px] border-none dark:text-gray-dark'
                  {...okButtonProps}
                >
                  {okText || 'Done'}
                </Button>,
              ]
            : null
      }
      {...props}
    >
      {children}
    </AntModal>
  );
}
