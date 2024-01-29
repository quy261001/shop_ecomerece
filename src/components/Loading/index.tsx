
import { Flex, FlexProps, Spin, SpinProps } from 'antd';

interface LoadingProps extends Partial<FlexProps> {
  iconProps?: Partial<SpinProps>;
}

export function Loading({
  justify = 'center',
  align = 'center',
  className = 'h-screen pb-[200px]',
  children,
  iconProps,
  ...props
}: LoadingProps) {
  return (
    <Flex
      justify='justify'
      align='align'
      className={className}
      {...props} 
    >
      {children || <Spin size='large' {...iconProps} />}
    </Flex>
  )
}