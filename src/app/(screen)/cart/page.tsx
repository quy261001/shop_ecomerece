"use client";

import { useSelectorCartProduct } from "@/app/services";
import { Input, TableBase } from "@/components";
import { Button, Flex, Typography, Divider } from "antd";
import Link from "next/link";
import { useCartTotals } from '@/common/hooks/useTotal'
const { Title, Text } = Typography;

export default function CartPage() {
  const productCart = useSelectorCartProduct();
  const totals = useCartTotals(productCart);
  const handleDiscount = (discount: number) => {
    return discount > 0 ? `-$${discount.toFixed(2)}` : `$${discount.toFixed(2)}`
  }
  return (
    <section className="max-w-[1240px] px-8 mt-20 mb-[140px]">
      <TableBase productCart={productCart} />
      <Flex justify="space-between" className="mt-6 mb-20">
        <Button className="h-[56px] w-[218px] hover:bg-custom hover:text-white">
          <Link href="/">Return To Home</Link>
        </Button>
        <Button className="h-[56px] w-[218px] hover:bg-custom hover:text-white">
          <Link href="/products">Go To Product</Link>
        </Button>
      </Flex>
      <Flex justify="space-between">
        <Flex gap={16}>
          <Input placeholder="Coupon Code" className="w-[300px] h-[56px] rounded" />
          <Button className="h-[56px] w-[211px] bg-custom text-white">
            Apply Coupon
          </Button>
        </Flex>
        <Flex
          vertical
          gap={16}
          className="px-6 py-8 w-[470px] border border-solid border-[#ccc]"
        >
          <Title level={4} className="mb-2">Cart Total</Title>
          <Flex justify="space-between" align="center">
            <Text className="text-base">Subtotal:</Text>
            <Text className="text-base">${totals.totalPrice.toFixed(2)}</Text>
          </Flex>
          <Divider className="my-0"></Divider>
          <Flex justify="space-between" align="center">
            <Text className="text-base">Discount:</Text>
            <Text className="text-base">{handleDiscount(totals.totalDiscount)}</Text>
          </Flex>
          <Divider className="my-0"></Divider>
          <Flex justify="space-between" align="center">
            <Text className="text-base">Shipping:</Text>
            <Text className="text-base">100000</Text>
          </Flex>
          <Divider className="my-0"></Divider>
          <Flex justify="space-between" align="center">
            <Text className="text-base">Total:</Text>
            <Text className="text-base">${totals.totalAmount.toFixed(2)}</Text>
          </Flex>
          <div className="text-center">
            <Button className="h-[56px] w-[211px] bg-custom text-white">
              Procees to checkout
            </Button>
          </div>
        </Flex>
      </Flex>
    </section>
  );
}
