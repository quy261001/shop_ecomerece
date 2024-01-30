import {Input as AntInput, InputProps as AntInputProps, InputRef} from 'antd'

import { Icon } from '../Icon';
import React from 'react';
import clsx from 'clsx';

export interface InputProps extends AntInputProps {
  isEnableSuffix?: boolean;
  isSuccessRequired?: boolean;
  isSuccess?: boolean;
}

export const Input = React.forwardRef(
  (
    {
      size = 'large',
      type = 'text',
      isEnableSuffix,
      isSuccessRequired,
      isSuccess,
      className,
      name,
      ...props
    }: InputProps, 
    ref: React.ForwardedRef<InputRef>,
  ) => {
    const suffix = isEnableSuffix ? (
      // <Icon name='check' className='Text-success' />
      <h1>okkkk</h1>
    ) : (<span />)
    return (
      <AntInput 
        ref={ref}
        key={name}
        size={size}
        type={type}
        suffix={suffix}
        className={clsx(isSuccessRequired && (isSuccess ? 'border-success' : 'border-error'), className)}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'