"use client";
import { StatisticsAbout, CareerCard } from "@/app/components/about";
import { Superiority } from "@/components";
import { Flex, Typography, Image } from "antd";
const { Text, Title } = Typography;

export default function AboutPage() {
  return (
    <section className="mt-20 mb-[140px] px-8">
      <Flex justify="space-between" align="center" gap={75} className="mb-[140px]">
        <Flex vertical gap={24} className="max-w-[525px]">
          <Title className="mb-4 text-[54px] font-semibold tracking-[3.24px]">
            Our Story
          </Title>
          <Text className="text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </Text>
          <Text className="text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Text>
        </Flex>
        <Image preview={false} src='/images/shopping.png' alt="shopping" className="max-w-[837px] max-h-[609px]"/>
      </Flex>
      <Flex>
        <StatisticsAbout />
      </Flex>
      <div className="mt-[174px] mb-48">
        <CareerCard />
      </div>
      <Superiority />
    </section>
  );
}
