"use client";

import { CarouselRef } from "@/app/types";
import { Icon, TagLeft, CountDown, ProductCard, ButtonAll } from "@/components";
import { Flex, Typography, Carousel as AntCarousel, CarouselProps } from "antd";
import Link from "next/link";
import { ForwardRefExoticComponent, Ref, RefAttributes, useRef } from "react";

const { Text } = Typography;

export function ProductMonth() {
  const Carousel: ForwardRefExoticComponent<
    CarouselProps & RefAttributes<CarouselRef>
  > = AntCarousel as any;
  const ref: Ref<CarouselRef> = useRef<CarouselRef | null>(null);
  const MockData = [
    {
      id: 1,
      name: "san pham 1",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/6-1-430x430.png",
      type: "bau troi1",
      price: 199,
      countInStock: 10,
      rating: 3.5,
      description: "bầu trời xanh",
      discount: 35,
    },
    {
      id: 2,
      name: "san pham 2",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/5-430x430.jpg",
      type: "bau troi2",
      price: 199,
      countInStock: 10,
      rating: 3.5,
      description: "bầu trời xanh",
      discount: 35,
    },
    {
      id: 3,
      name: "san pham 3",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/1-3-430x430.png",
      type: "bau troi3",
      price: 199,
      countInStock: 10,
      rating: 3.5,
      description: "bầu trời xanh",
      discount: 35,
    },
    {
      id: 4,
      name: "san pham 4",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/2-430x430.png",
      type: "bau troi4",
      price: 199,
      countInStock: 10,
      rating: 3.5,
      description: "bầu trời xanh",
      discount: 35,
    },
    {
      id: 5,
      name: "san pham 5",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/3-1-430x430.png",
      type: "bau troi5",
      price: 199,
      countInStock: 10,
      rating: 3.7,
      description: "bầu trời xanh",
      discount: 35,
    },
    {
      id: 6,
      name: "san pham 6",
      image:
        "https://doubledeellc.com/wp-content/uploads/2023/10/4-1-430x430.png",
      type: "bau troi6",
      price: 199,
      countInStock: 10,
      rating: 3.5,
      description: "bầu trời xanh",
      discount: 35,
    },
  ];
  const props = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Flex className="mb-10" justify="space-between" align="flex-end">
        <Flex gap={20} vertical>
          <TagLeft>This Month</TagLeft>
          <Text className="font-semibold text-2xl tracking-[1.44px]">
            Best Selling Products
          </Text>
        </Flex>
        <ButtonAll>
          <Link href='#'>View All</Link>
        </ButtonAll>
      </Flex>
      <Carousel ref={ref} {...props}>
        {MockData.map((item) => (
          <ProductCard key={item.id} MockData={item} />
        ))}
      </Carousel>
    </div>
  );
}
