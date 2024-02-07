"use client";
import { Col, Flex, Row, Typography } from "antd";
import { useSelectorCurrent } from "@/app/services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const { Text, Title } = Typography;

export default function LayoutAccount({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = useSelectorCurrent();
  const pathname = usePathname();

  const CategoryAccount = [
    {
      id: 1,
      title: "Manage My Account",
      dataList: [
        {
          name: "My Profile",
          link: "/users/account/profile",
        },
        {
          name: "Address Book",
          link: "#",
        },
        {
          name: "My Payment Options",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "My Orders",
      dataList: [
        {
          name: "My Returns",
          link: "/users/orders/returns",
        },
        {
          name: "My Cancellations",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      title: "My Orders",
      dataList: [],
    },
  ];
  return (
    <>
      <Row className="px-8 w-full pt-20 pb-[140px]">
        <Flex justify="space-between" align="center" className="w-full mb-20">
          <Title className="text-sm">Home / My Account</Title>
          <Title className="text-sm">
            Welcome! <Text className=" text-custom">{userData.name}</Text>
          </Title>
        </Flex>
        <Col span={6}>
          {CategoryAccount.map((item) => (
            <ul key={item.id} className="mb-4">
              <Title level={5} className="font-medium mb-4">
                {item.title}
              </Title>
              <Flex vertical gap={8}>
                {item.dataList.map((i) => {
                  const isActive = i.link === pathname;
                  return (
                    <li key={i.name} className="ml-8 flex flex-col gap-2">
                      <Link
                        href={i.link}
                        className={clsx(
                          "text-black hover:text-custom transition-all",
                          isActive && "text-custom"
                        )}
                      >
                        {i.name}
                      </Link>
                    </li>
                  );
                })}
              </Flex>
            </ul>
          ))}
        </Col>
        <Col span={18}>{children}</Col>
      </Row>
    </>
  );
}
