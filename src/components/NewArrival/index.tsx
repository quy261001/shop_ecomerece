import { Col, Flex, Row, Typography, Image } from "antd";
import { TagLeft } from "..";
import Link from "next/link";

const { Text, Title } = Typography;

export function NewArrival() {
  return (
    <Flex vertical>
      <Flex vertical gap={20}>
        <TagLeft>Featured</TagLeft>
        <Title level={1} className="mb-[60px]">
          New Arrival
        </Title>
      </Flex>
      <Row gutter={[30, 0]}>
        <Col
          span={12}
          className="relative flex justify-center items-end bg-black h-[600px]"
        >
          <Flex>
            <Image
              src="/images/playstation.png"
              preview={false}
              alt="image-ps5"
            />
            <Flex
              vertical
              gap={16}
              className="absolute bottom-8 left-8 max-w-[242px]"
            >
              <Title level={3} className="text-[#FAFAFA] font-semibold mb-0">
                PlayStation 5
              </Title>
              <Text className="text-[#FAFAFA] text-sm">
                Black and White version of the PS5 coming out on sale.
              </Text>
              <Link
                className="text-[#FAFAFA] text-base font-medium underline"
                href="#"
              >
                Shop Now
              </Link>
            </Flex>
          </Flex>
        </Col>
        <Col className="flex flex-col justify-between" span={12}>
          <Flex justify="end" className="relative w-full bg-black h-[284px]">
            <Image src="/images/woman.png" preview={false} alt="image-woman" />
            <Flex
              vertical
              gap={16}
              className="absolute bottom-6 left-6 max-w-[255px]"
            >
              <Title level={3} className="text-[#FAFAFA] font-semibold mb-0">
                Women’s Collections
              </Title>
              <Text className="text-[#FAFAFA] text-sm">
                Featured woman collections that give you another vibe.
              </Text>
              <Link
                className="text-[#FAFAFA] text-base font-medium underline"
                href="#"
              >
                Shop Now
              </Link>
            </Flex>
          </Flex>
          <Flex className="h-[284px] flex justify-between gap-[30px]">
            <div
              className="relative bg-black w-full flex justify-center items-center"
            >
              <Flex>
                <Image
                  src="/images/echo.png"
                  preview={false}
                  alt="image-right"
                />
                <Flex
                  vertical
                  gap={8}
                  className="absolute bottom-6 left-6 max-w-[191px]"
                >
                  <Title
                    level={3}
                    className="text-[#FAFAFA] font-semibold mb-0"
                  >
                    Speakers
                  </Title>
                  <Text className="text-[#FAFAFA] text-sm">
                    Amazon wireless speakers
                  </Text>
                  <Link
                    className="text-[#FAFAFA] text-base font-medium underline"
                    href="#"
                  >
                    Shop Now
                  </Link>
                </Flex>
              </Flex>
            </div>
            <div
              className="relative bg-black w-full flex justify-center items-center"
            >
              <Flex>
                <Image
                  src="/images/gucci.png"
                  preview={false}
                  alt="image-right"
                />
                <Flex
                  vertical
                  gap={8}
                  className="absolute bottom-6 left-6 max-w-[191px]"
                >
                  <Title
                    level={3}
                    className="text-[#FAFAFA] font-semibold mb-0"
                  >
                    Perfume
                  </Title>
                  <Text className="text-[#FAFAFA] text-sm">
                    GUCCI INTENSE OUD EDP
                  </Text>
                  <Link
                    className="text-[#FAFAFA] text-base font-medium underline"
                    href="#"
                  >
                    Shop Now
                  </Link>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}
