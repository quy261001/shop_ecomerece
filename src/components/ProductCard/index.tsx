"use client";

import { ProductCardDTO } from "@/app/types";
import { Image, Rate, Flex, Button } from "antd";
import { Icon } from "..";
import { useState } from "react";

interface ProductCardProps {
  dataProduct: ProductCardDTO;
}

export function ProductCard({ dataProduct }: ProductCardProps) {
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const handlePreviewClick = () => {
    setPreviewVisible(true);
  };

  const handleCancelPreview = () => {
    setPreviewVisible(false);
  };
  return (
    <div className="max-w-[246px] relative p-[10px] hover:translate-y-[-10px] transition-all cursor-pointer hover:scale-100 hover:shadow-gray">
      <span className="absolute w-[55px] h-[26px] z-30 top-[10%] left-[1.75rem] bg-custom flex justify-center items-center text-white rounded text-xs">
        -40%
      </span>
      <div
        onClick={handlePreviewClick}
        className=" absolute z-30 top-[10%] right-[1.75rem] flex justify-center items-center "
      >
        <Icon
          name="group"
          type="svg"
          width={24}
          height={24}
          className="hover:scale-150 transition-all"
        />
      </div>
      <Image
        preview={{
          visible: isPreviewVisible,
          onVisibleChange: handleCancelPreview,
        }}
        className="w-full h-[246px] transition-all object-cover rounded-md flex justify-center [&_.ant-image-mask]:hover:opacity-0 test"
        src={dataProduct.image}
        alt={dataProduct.name}
      />
      <Flex className="mt-1" gap={8} vertical>
        <Flex align="center" justify="space-between">
          <p className="text-base font-medium">{dataProduct.name}</p>
          <Icon
            name="wishlist"
            type="svg"
            width={24}
            height={24}
            className="hover:scale-150 transition-all"
          />
        </Flex>
        <p className="text-base font-medium mb-2 text-custom">
          ${dataProduct.price}
          <span className="text-gray-800  line-through pl-3">
            ${dataProduct.discount}
          </span>
        </p>

        <Flex align="center" gap={8}>
          <Rate
            className="text-[16px]"
            disabled
            allowHalf
            defaultValue={dataProduct.rating}
          />
          <span>({dataProduct.countInStock})</span>
        </Flex>
      </Flex>
      <Button className="w-full bg-[#DB4444] h-10 mt-4 hover:text-white hover:border-[#DB4444]">
        Add To Cart
      </Button>
    </div>
  );
}
