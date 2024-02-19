import { Flex, Input, Typography, Image } from "antd";
import { Icon } from "..";

const { Title, Text } = Typography;

export function Footer() {
  return (
    <section className="bg-black">
      <Flex className="max-w-[1240px] px-8 mx-auto gap-[87px] pt-20 pb-[60px]">
        <Flex vertical gap={16}>
          <Title level={3} className="text-white font-bold mb-2">
            Exclusive
          </Title>
          <Text className="text-xl text-white font-medium mb-2">Subscribe</Text>
          <Text className="text-base text-white">
            Get 10% off your first order
          </Text>
          <Input
            className="bg-black text-white px-4 py-3 w-[217px] footer-custom h-11"
            placeholder="Enter your email"
            suffix={
              <Icon
                className="cursor-pointer"
                name="send"
                type="svg"
                width={24}
                height={24}
              />
            }
          />
        </Flex>
        <Flex vertical gap={16} className="max-w-[175px]">
          <Title level={4} className="text-white mb-2">
            Support
          </Title>
          <Text className="text-white text-base">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </Text>
          <Text className="text-white text-base">exclusive@gmail.com</Text>
          <Text className="text-white text-base">+88015-88888-9999</Text>
        </Flex>
        <Flex vertical gap={16}>
          <Title level={4} className="text-white mb-2">
            Account
          </Title>
          <Text className="text-white text-base">My Account</Text>
          <Text className="text-white text-base">Login / Register</Text>
          <Text className="text-white text-base">Cart</Text>
          <Text className="text-white text-base">Wishlist</Text>
          <Text className="text-white text-base">Shop</Text>
        </Flex>
        <Flex vertical gap={16}>
          <Title level={4} className="text-white mb-2">
            Quick Link
          </Title>
          <Text className="text-white text-base">Privacy Policy</Text>
          <Text className="text-white text-base">Terms Of Use</Text>
          <Text className="text-white text-base">FAQ</Text>
          <Text className="text-white text-base">Contact</Text>
        </Flex>
        <Flex vertical gap={10}>
          <Title level={4} className="text-white mb-2">
            Download App
          </Title>
          <Text className="text-white text-xs font-medium opacity-70">
            Save $3 with App New User Only
          </Text>
          <Flex gap={8} className="mb-[14px]">
            <Image preview={false} src="/images/qrcode.png" alt="QR code" />
            <Flex vertical justify="space-between">
              <Image
                preview={false}
                src="/images/appgoogle.png"
                alt="appGoogle"
              />
              <Image
                preview={false}
                src="/images/appstore.png"
                alt="appstore"
              />
            </Flex>
          </Flex>
          <Flex gap={24}>
            <Icon name="IconFacebook" type="svg" width={24} height={24} />
            <Icon name="twitter" type="svg" width={24} height={24} />
            <Icon name="instagram" type="svg" width={24} height={24} />
            <Icon name="Linkedin" type="svg" width={24} height={24} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        align="center"
        className="pt-4 pb-6 border-t-[#fafafa] border-solid border-t"
      >
        <Text className="flex items-center text-base text-white opacity-40">
          <Icon
            name="groupfooter"
            type="svg"
            width={20}
            height={20}
            className="mr-[6px]"
          />
          Copyright Rimel 2022. All right reserved
        </Text>
      </Flex>
    </section>
  );
}
