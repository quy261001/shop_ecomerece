'use client'

import { Typography } from "antd"
import { TextProps } from 'antd/es/typography/Text';
import clsx from 'clsx'

const { Text } = Typography;

interface LabelProps extends TextProps {}

export function Label({ children, className }: LabelProps) {
  return (
    <Text className={clsx('text-xs font-bold uppercase text-gray-180', className)}>
      {children}
    </Text>
  )
}