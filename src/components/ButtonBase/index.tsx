'use client';

import { Button, ButtonProps } from 'antd';

import clsx from 'clsx';

interface ButtonBaseProps extends ButtonProps {}

export function ButtonBase({ disabled, children, className, ...props }: ButtonBaseProps) {
  return (
    <Button
      className={clsx(
        !disabled && 'hover:border-gray-700 hover:text-gray-dark hover:dark:text-gray-light',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
}
