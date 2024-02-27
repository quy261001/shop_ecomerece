'use client'

import { Flex } from "antd"
import { Icon } from "../Icon"
import Link from "next/link";
import { signOut } from "next-auth/react";


export function MenuHead() {
  const menuItems = [
    {
      id: 1,
      name: 'Manage My Account',
      icon: 'usercus',
      link: '/users/account/profile',
    },
    {
      id: 2,
      name: 'My Order',
      icon: 'order',
      link: '#',
    },
    {
      id: 3,
      name: 'My Cancellations',
      icon: 'cancel',
      link: '#',
    },
    {
      id: 4,
      name: 'My Reviews',
      icon: 'reviews',
      link: '#',
    },
    {
      id: 5,
      name: 'Logout',
      icon: 'logout',
      onClick: () => signOut({ callbackUrl: '/login' }),
    }
  ]
  return (
    <Flex vertical gap={13}>
      {
        menuItems.map((item) => (
          <Flex onClick={item?.onClick} align="center" gap={16} key={item.id} className="cursor-pointer">
            <Icon name={item.icon} type="svg" width={28} height={28}/>
            <Link href={item.link || ''} className="text-sm text-[#fafafa]">{item.name}</Link>
          </Flex>
        ))
      }
    </Flex>
  )
}