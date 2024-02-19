"use client";

import { Flex, Typography, Input, Divider } from "antd";
import { useSession } from "next-auth/react";
import { MenuHead, Popover } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import { useSelectorCurrent } from "@/app/services";

const { Text, Title } = Typography;
const { Search } = Input;

type NavItem = {
  id: number;
  name: string;
  link: string;
};

export function HeaderTop() {
  const signUpItem = {
    id: 5,
    name: "SignUp",
    link: "/login",
  };

  const [isSignUp, setIsSignUp] = useState(true);
  const pathname = usePathname();
  const { status } = useSession();
  const dataUser = useSelectorCurrent();
  useEffect(() => {
    if (status === "authenticated") {
      setIsSignUp(false);
    }
  }, [status, isSignUp]);
  const NavItems: Array<NavItem | typeof signUpItem> = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Product",
      link: "/products",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      name: "About",
      link: "/about",
    },
    isSignUp && signUpItem,
  ].filter(Boolean) as Array<NavItem | typeof signUpItem>;
  return (
    <div className="pb-6 border-solid border-b-[#eee] border-b">
      <Flex
        justify="center"
        className="w-full bg-black h-12 py-3 text-sm mb-10"
      >
        <Text className="text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="/" className="text-white underline ml-2">
            ShopNow
          </Link>
        </Text>
      </Flex>
      <Flex
        className="max-w-[1240px] mx-auto px-8"
        align="center"
        justify="space-between"
      >
        <div className="font-bold  text-2xl">Exclusive</div>
        <ul className="flex gap-12 text-base">
          {NavItems &&
            NavItems.map((item) => {
              const isActive = item.link === pathname;
              return (
                <li key={item.id} className="cursor-pointer">
                  <Link
                    href={item.link}
                    className={clsx(
                      isActive ? " underline text-black" : "text-black"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
        <Search
          placeholder="What are you looking for?"
          className=" mr-6 max-w-[243px]"
        />
        {!isSignUp && (
          <Flex gap={16}>
            <Icon
              type="svg"
              name="wishlist"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            <Icon
              type="svg"
              name="cart"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            <Popover
              content={
                <Fragment>
                  <Title level={4} className="text-white text-center">{dataUser ? dataUser.name: ''}</Title>
                  <Divider className="my-2 bg-white"></Divider>
                  <MenuHead />
                </Fragment>
              }
            >
              <div>
                <Icon
                  type="svg"
                  name="user"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </div>
            </Popover>
          </Flex>
        )}
      </Flex>
    </div>
  );
}