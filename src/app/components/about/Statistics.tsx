import { Icon } from "@/components";
import { Flex, Typography } from "antd";

const {Text, Title} = Typography;

export function StatisticsAbout () {
  const StatisticsData = [
    {
      id: 1,
      icon: "store",
      title: "10.5k ",
      desc: "Sallers active our site",
    },
    {
      id: 2,
      icon: "coin",
      title: "33k",
      desc: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      icon: "shoppingbag",
      title: "45.5k",
      desc: "Customer active in our site",
    },
    {
      id: 4,
      icon: "coinlg",
      title: "25k",
      desc: "Anual gross sale in our site",
    },
  ];
  return (
    <Flex justify="center" gap={30}>
      {StatisticsData.map((item) => (
        <Flex
          vertical
          className="justify-center items-center py-[30px] px-[24px] border border-solid border-[#ccc] w-[270px]"
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
          <Title level={4} className="font-bold">{item.title}</Title>
          <Text>{item.desc}</Text>
        </Flex>
      ))}
    </Flex>
  );
}