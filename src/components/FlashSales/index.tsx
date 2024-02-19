"use client";

import { useSelectorProduct } from "@/app/services";
import { CarouselRef, ProductCardDTO } from "@/app/types";
import { Icon, TagLeft, CountDown, ProductCard } from "@/components";
import { Flex, Typography, Carousel as AntCarousel, Button, CarouselProps } from "antd";
import { isEmpty } from "lodash";
import { ForwardRefExoticComponent, Ref, RefAttributes, RefObject, useRef } from "react";

const { Text } = Typography;

export function FlashSales({dataProduct}: any) {
const Carousel: ForwardRefExoticComponent<CarouselProps & RefAttributes<CarouselRef>> = AntCarousel as any;
const ref: Ref<CarouselRef> = useRef<CarouselRef | null>(null);
  const props = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="mb-[60px]">
      <Flex className="mb-10" justify="space-between" align="flex-end">
        <Flex align="flex-end" gap={87}>
          <Flex gap={24} vertical>
            <TagLeft>Today’s</TagLeft>
            <Text className="font-semibold text-2xl tracking-[1.44px]">Flash Sales</Text>
          </Flex>
          <CountDown countdownTimestampMs={1710000954000} />
        </Flex>
        <Flex gap={8}>
          <Flex onClick={() => {
             if (ref.current) {
              ref.current.prev();
            }
          }} className="bg-[#eee] p-2 rounded-full  cursor-pointer hover:opacity-80">
            <Icon type="svg" name="arrowleft" width={24} height={24} />
          </Flex>
          <Flex onClick={() => {
              if (ref.current) {
              ref.current.next();
            }
          }} className="bg-[#eee] p-2 rounded-full  cursor-pointer hover:opacity-80">
            <Icon type="svg" name="arrowright" width={24} height={24} />
          </Flex>
        </Flex>
      </Flex>
     <Carousel ref={ref} {...props}>
        {!isEmpty(dataProduct) && dataProduct.map((item: ProductCardDTO) => (
          <ProductCard key={item.id} dataProduct={item} />
        ))}
      </Carousel>
    </div>
  );
}
