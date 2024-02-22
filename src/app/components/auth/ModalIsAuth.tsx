'use client'

import { ButtonBase, Modal, ModalProps } from '@/components';
import { Flex, Typography, Image } from 'antd';
import Link from 'next/link';


const { Title, Text } = Typography;


interface UserDeleteModalProps extends ModalProps {}
export function ModalIsAuth({ open, onCancel, ...props }: UserDeleteModalProps) {

  return (
    <Modal
      width={424}
      open={open}
      onCancel={onCancel}
      title={null}
      contentClassName='[&_.ant-modal-header]:mb-0'
      bodyClassName='min-h-[110px]'
      styles={{
        footer: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: 24,
        },
      }}
      footer={[
        <ButtonBase
          key='cancel'
          size='large'
          className='flex-auto bg-custom text-white'
          onClick={onCancel}
        >
          Cancel
        </ButtonBase>,
      ]}
      {...props}
    >
      <Flex vertical gap={8} align='center'>
        <Image preview={false} alt='auth' src='/images/authshopping.jpg'/>
        <Text type='secondary' className='text-center mt-2'>
          To add products to cart please log in, <Link href='/login'>Go to login</Link>
        </Text>
      </Flex>
    </Modal>
  );
}
