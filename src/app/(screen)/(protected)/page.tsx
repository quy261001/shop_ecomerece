"use client";

import { useGetProductsQuery, useSelectorProduct } from "@/app/services";
import {
  FlashSales,
  ButtonAll,
  Category,
  ProductMonth,
  BannerCate,
  NewArrival,
  Superiority,
  Loading,
} from "@/components";
import { Flex } from "antd";
import Link from "next/link";

export default function Home() {
  const { isLoading } = useGetProductsQuery();
  const dataProduct = useSelectorProduct();
  return (
    <Flex vertical className="pb-[140px] mx-auto px-8 mt-12">
      <section className="pb-[60px] border-b-[#6c6a6a] border-solid border-b">
        {!isLoading && <FlashSales dataProduct={dataProduct} />}
        <Flex justify="center">
          <ButtonAll>
            <Link href="#">View All Products</Link>
          </ButtonAll>
        </Flex>
      </section>
      <section className="mt-20 pb-[60px] border-b border-[#000] border-solid">
        <Category />
      </section>
      <section className="mt-[70px] mb-[140px]">
        {isLoading ? <Loading /> : <ProductMonth dataProduct={dataProduct} />}
      </section>
      <section className="bg-black h-[500px] mb-[140px]">
        <BannerCate />
      </section>
      <section className="mb-[140px]">
        <NewArrival />
      </section>
      <section>
        <Superiority />
      </section>
    </Flex>
  );
}
