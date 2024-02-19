"use client";

import { CarouselRef, ProductCardDTO } from "@/app/types";
import {TagLeft,ProductCard, ButtonAll } from "@/components";
import { Flex, Typography, Carousel as AntCarousel, CarouselProps } from "antd";
import { isEmpty } from "lodash";
import Link from "next/link";
import { ForwardRefExoticComponent, Ref, RefAttributes, useRef } from "react";

const { Text } = Typography;

export function ProductMonth({dataProduct}: any) {
  const Carousel: ForwardRefExoticComponent<
    CarouselProps & RefAttributes<CarouselRef>
  > = AntCarousel as any;
  const ref: Ref<CarouselRef> = useRef<CarouselRef | null>(null);
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
          <Link href='/products'>View All</Link>
        </ButtonAll>
      </Flex>
      <Carousel ref={ref} {...props}>
        {!isEmpty(dataProduct) && dataProduct.map((item: ProductCardDTO) => (
          <ProductCard key={item.id} dataProduct={item} />
        ))}
      </Carousel>
    </div>
  );
}
