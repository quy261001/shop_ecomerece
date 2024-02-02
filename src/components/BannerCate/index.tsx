'use client'
import { Col, Row, Image, Typography, Button } from "antd";
import { CountDownB } from "..";

const { Text } = Typography;

export function BannerCate() {
  return (
    <Row gutter={[32, 0]} className="flex items-center h-full">
      <Col span={11} className="flex flex-col gap-8 pl-[56px]">
        <Text className="text-[#0F6] text-base font-semibold">Categories</Text>
        <Text className="text-[#FAFAFA] text-[44px] font-semibold tracking-[1.92px]">Enhance Your Music Experience</Text>
        <CountDownB countdownTimestampMs={1710000954000}/>
        <Button className="bg-[#0f6] w-[171px] h-[56px] text-[#FAFAFA]">Buy Now!</Button>
      </Col>
      <Col span={13} className="pr-[60px] ">
        <Image preview={false} src="/images/JBL.png" alt="Banner JBL" />
      </Col>
    </Row>
  );
}
