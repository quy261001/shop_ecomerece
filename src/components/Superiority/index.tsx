import { Flex, Typography } from "antd";
import { Icon } from "../Icon";

const { Text, Title } = Typography;
export function Superiority() {
  const superiorityData = [
    {
      id: 1,
      icon: "delivery",
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: "service",
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: "shield",
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <Flex justify="center" gap={88}>
      {superiorityData.map((item) => (
        <Flex
          vertical
          className="justify-center items-center p-[10px]"
          key={item.id}
        >
          <div className="flex justify-center w-20 h-20 relative mb-6">
            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
            <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
            <Icon
              name={item.icon}
              type="svg"
              width={30}
              height={30}
              className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
            />
          </div>
          <Title level={4}>{item.title}</Title>
          <Text>{item.desc}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
