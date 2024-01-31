"use client";

import { Flex, Typography, Input } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Icon } from "../Icon";

const { Text } = Typography;
const { Search } = Input;

type NavItem = {
  id: number;
  name: string;
  link: string;
};

export function HeaderTop() {
  const signUpItem = {
    id: 4,
    name: "SignUp",
    link: "/login",
  };

  const [isSignUp, setIsSignUp] = useState(true);
  const pathname = usePathname();
  const { status, data } = useSession();
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
      name: "Contact",
      link: "contact",
    },
    {
      id: 3,
      name: "About",
      link: "about",
    },
    isSignUp && signUpItem,
  ].filter(Boolean) as Array<NavItem | typeof signUpItem>;
  return (
    <>
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
          <ul className="flex gap-12 text-base cursor-pointer ml-[190px] mr-[148px]">
            {NavItems &&
              NavItems.map((item) => {
                const isActive = item.link === pathname;
                return (
                  <li key={item.id}>
                    <Link href={item.link} className={clsx(isActive ? " underline text-black" : "text-black")}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <Search placeholder="What are you looking for?" className=" mr-6" />
          {!isSignUp && (
            <>
              <Icon
                type="svg"
                name="wishlist"
                width={28}
                height={28}
                className="mr-4"
              />
              <Icon type="svg" name="cart" width={28} height={28} />
            </>
          )}
        </Flex>
      </div>
    </>
  );
}
