import { Icon } from "@/components";
import { Flex, Divider } from "antd";


export function Information() {
  return (
    <Flex vertical className="pt-10 px-[35px] shadow-account max-w-[340px]">
      <Flex vertical gap={16}>
        <Flex align="center" gap={16} className="mb-2">
          <Icon name="phoneinfor" type="svg" />
          <p className="text-base font-medium">Call To Us</p>
        </Flex>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
      </Flex>
      <Divider className="my-8"/>
      <Flex vertical gap={16} className="pb-[50px]">
        <Flex align="center" gap={16} className="mb-2">
          <Icon name="mailinfor" type="svg" />
          <p className="text-base font-medium">Write To US</p>
        </Flex>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </Flex>
    </Flex>
  );
}
