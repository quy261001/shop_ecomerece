"use client";

import {
  HeaderTop,
  FlashSales,
  ButtonAll,
  Category,
  ProductMonth,
} from "@/components";
import { Flex } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white ">
      <HeaderTop />
      <Flex vertical className="max-w-[1240px] pb-16 mx-auto px-8 mt-12">
        <section className="pb-[60px] border-b-[#6c6a6a] border-solid border-b">
          <FlashSales />
          <Flex justify="center">
            <ButtonAll>
              <Link href='#'>View All Products</Link>
            </ButtonAll>
          </Flex>
        </section>
        <section className="mt-20 pb-[60px] border-b border-[#000] border-solid">
          <Category />
        </section>
        <section className="mt-[70px]">
          <ProductMonth />
        </section>
      </Flex>
    </main>
  );
}
