'use client';

import { Popover as AntPopover, PopoverProps as AntPopoverProps } from 'antd';

interface PopoverProps extends AntPopoverProps {}

export function Popover({
  placement = 'bottomRight',
  trigger = 'click',
  children,
  ...props
}: PopoverProps) {

  return (
    <AntPopover
      placement={placement}
      trigger={trigger}
      overlayClassName='[&_.ant-popover-inner]:bg-custom shadow-[0_14px_48px_0_rgba(31, 47, 70, 40%)] [&_.ant-popover-arrow]:hidden'
      overlayInnerStyle={{
        width: 224,
        padding: '18px 12px 10px 20px',
      }}
      {...props}
    >
      {children}
    </AntPopover>
  );
}
