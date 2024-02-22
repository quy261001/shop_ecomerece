"use client";

import { ProductCardDetail, AddCartProduct } from "@/app/types";
import { Flex, Image, Rate, Typography, Divider, Button, message } from "antd";
import { useState } from "react";
import clsx from "clsx";
import { Icon } from "@/components";
import Link from "next/link";
import { useAppDispatch } from "@/app/redux/hooks";
import { useApp } from "@/common";
import { productActions } from "@/app/services";
import { useIsAuthenticated } from "@/common";
import { ModalIsAuth } from "../auth";
import { MESSAGE } from '@/common'

const { Title, Text } = Typography;

interface productDetailProps {
  productDataDetail: ProductCardDetail | undefined;
}

export function ProductDetail({ productDataDetail }: productDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    productDataDetail?.images[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [size, setSize] = useState(productDataDetail?.sizes[0]);
  const [color, setColor] = useState(productDataDetail?.colors[0]);
  const { isAuthenticated } = useIsAuthenticated();
  const { notification } = useApp()
  const dispatch = useAppDispatch()

  const handleColorChange = (color: string) => {
    setColor(color);
  };
  const handleSizeChange = (size: string) => {
    setSize(size);
  };
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const addCartProduct = () => {
    const product: AddCartProduct = {
      ...productDataDetail,
      sizes: [size || ''],
      colors: [color || ''],
      quantity: quantity
    };
    if(isAuthenticated && product) {
      dispatch(productActions.addCart(product));
      notification.success({ message: MESSAGE.ADDPRODUCT_SUCCESS });
    } else {
      setIsShowModal(true);
    }
  }
  return (
    <Flex>
      <Flex vertical gap={15}>
        {productDataDetail?.images.map((item, index) => (
          <Flex align="center" justify="center"
            onClick={() => setSelectedImage(item)}
            key={index}
            className={clsx(
              "border-[#ccc] border-solid border cursor-pointer hover:border-black",
              item === selectedImage && "border-black"
            )}
          >
            <Image
              preview={false}
              width={121}
              height={114}
              src={item}
              alt="123"
              className="object-contain"
            />
          </Flex>
        ))}
      </Flex>
      <Flex align="center" justify="center" className="px-[27px] border-[#ccc] border-solid border ml-8 rounded-md">
        <Image
          src={selectedImage}
          alt={productDataDetail?.name}
          className="max-h-[450px]"
        />
      </Flex>
      <Flex vertical gap={6} className="ml-[70px] max-w-[400px] min-h-[510px]">
        <Title
          level={3}
          className="mb-0 font-semibold tracking-[0.72px] line-clamp-1"
        >
          {productDataDetail?.name}
        </Title>
        <Flex gap={8} align="center">
          <Rate
            className="text-[20px]"
            disabled
            allowHalf
            defaultValue={productDataDetail?.rating}
          />
          <span className="text-gray-180 opacity-50">
            ({productDataDetail?.reviews} Reviews)
          </span>
          {productDataDetail && productDataDetail?.stock >= 1 && (
            <>
              <Text className="mx-2">|</Text>
              <Text className="text-[#0F6] opacity-60">In Stock</Text>
            </>
          )}
        </Flex>
        <Flex gap={8} align="center" className="mb-2">
          <Text className="text-xl text-custom">
            ${productDataDetail?.discount}
          </Text>
          <Text className="line-through text-xl opacity-80">
            ${productDataDetail?.price}
          </Text>
        </Flex>
        <Text className="text-sm line-clamp-3 h-[60px]">
          {productDataDetail?.description}
        </Text>
        <Divider className="bg-[#ccc] my-0" />
        {productDataDetail?.colors && (
          <Flex gap={8} align="center">
            <Text className="text-base">Colours:</Text>
            {productDataDetail?.colors.map((curColor, index) => (
              <Flex
                onClick={() => handleColorChange(curColor)}
                align="center"
                justify="center"
                key={index}
                className={clsx(
                  color === curColor ? "border-black" : "border-transparent",
                  "p-1 w-5 h-5  rounded-full border-solid border-[2px] hover:border-black cursor-pointer transition-all"
                )}
              >
                <button
                  style={{ backgroundColor: curColor }}
                  className={clsx(
                    " w-3 h-3 border-none rounded-full cursor-pointer"
                  )}
                ></button>
              </Flex>
            ))}
          </Flex>
        )}
        {productDataDetail?.sizes && (
          <Flex align="center" gap={16} className="my-2">
            <Text className="text-base">Size:</Text>
            {productDataDetail?.sizes.map((curSize, index) => (
              <button
                onClick={() => handleSizeChange(curSize)}
                className={clsx(
                  size === curSize
                    ? "bg-custom text-white"
                    : "bg-transparent text-black",
                  "w-8 h-8 rounded cursor-pointer hover:bg-custom transition-all"
                )}
                key={index}
              >
                <span className="text-xs">{curSize}</span>
              </button>
            ))}
          </Flex>
        )}
        <Flex gap={16} align="center">
          <Flex>
            <button
              className="w-10 h-10 bg-transparent border border-solid text-2xl cursor-pointer hover:bg-custom transition-all"
              onClick={handleDecrease}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-20 text-lg text-center"
            />
            <button
              className="w-10 h-10 bg-transparent border border-solid text-2xl cursor-pointer hover:bg-custom transition-all"
              onClick={handleIncrease}
            >
              +
            </button>
          </Flex>
          <Button onClick={() => addCartProduct()} type="primary" danger className="h-full w-[165px]">
            Buy Now
          </Button>
          <Flex
            justify="center"
            align="center"
            className="h-10 w-10 hover:bg-custom transition-all rounded cursor-pointer border border-solid"
          >
            <Icon
              name="wishlist"
              type="svg"
              width={24}
              height={24}
              className="hover:scale-150 transition-all"
            />
          </Flex>
        </Flex>
        <div className="mt-2">
          <div className="py-6 pl-4 border border-solid border-[#ccc]">
            <Flex align="center" gap={16}>
              <Icon type="svg" name="deliveryBlack" />
              <div>
                <Text className="block text-base font-medium">Free Delivery</Text>
                <Link href="#" className="text-xs font-medium hover:underline text-black">
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </Flex>
          </div>
          <div className="py-6 pl-4 border border-solid border-[#ccc] border-t-transparent">
            <Flex align="center" gap={16}>
              <Icon type="svg" name="return" />
              <div>
                <Text className="block text-base font-medium">Return Delivery</Text>
                <Text  className="text-xs font-medium ">
                  Free 30 Days Delivery Returns. <Link href="#" className="text-black hover:underline">Details</Link>
                </Text>
              </div>
            </Flex>
          </div>
        </div>
      </Flex>
      {isShowModal && (
          <ModalIsAuth open={isShowModal} onCancel={() => setIsShowModal(false)} />
        )}
    </Flex>
    
  );
}
