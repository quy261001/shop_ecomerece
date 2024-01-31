"use client";

import { Carousel as AntCarousel , CarouselProps, Flex, Typography } from "antd";
import { CategoryCard, Icon, TagLeft } from "..";
import { ForwardRefExoticComponent, Ref, RefAttributes, useRef } from "react";
import { CarouselRef } from "@/app/types";

const { Text } = Typography;

export function Category() {
  const Carousel: ForwardRefExoticComponent<CarouselProps & RefAttributes<CarouselRef>> = AntCarousel as any;
const ref: Ref<CarouselRef> = useRef<CarouselRef | null>(null);
  const MockCate = [
    {
      id: 1,
      icon: "phone",
      name: "Phones",
    },
    {
      id: 2,
      icon: "computer",
      name: "Computers",
    },
    {
      id: 3,
      icon: "headphone",
      name: "HeadPhones",
    },
    {
      id: 4,
      icon: "gamepad",
      name: "Gaming",
    },
    {
      id: 5,
      icon: "smartwatch",
      name: "SmartWatch",
    },
    {
      id: 6,
      icon: "cooler",
      name: "Ventilation",
    },
    {
      id: 7,
      icon: "fan",
      name: "Fan",
    },
    {
      id: 8,
      icon: "heater",
      name: "Heater",
    },
  ];
  const props = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Flex vertical>
      <Flex align="flex-end" justify="space-between" className="mb-[60px]">
        <Flex vertical gap={20}>
          <TagLeft>Categories</TagLeft>
          <Text className="font-semibold text-2xl tracking-[1.44px]">
            Browse By Category
          </Text>
        </Flex>
        <Flex gap={8}>
          <Flex
           onClick={() => {
            if (ref.current) {
             ref.current.prev();
           }
         }}
            className="bg-[#eee] p-2 rounded-full  cursor-pointer hover:opacity-80"
          >
            <Icon type="svg" name="arrowleft" width={24} height={24} />
          </Flex>
          <Flex
              onClick={() => {
                if (ref.current) {
                 ref.current.next();
               }
             }}
            className="bg-[#eee] p-2 rounded-full  cursor-pointer hover:opacity-80"
          >
            <Icon type="svg" name="arrowright" width={24} height={24} />
          </Flex>
        </Flex>
      </Flex>
      <Carousel ref={ref} {...props}>
        {MockCate.map((item) => (
          <CategoryCard key={item.id} MockCate={item} />
        ))}
      </Carousel>
    </Flex>
  );
}
