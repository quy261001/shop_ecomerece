'use client'

import { ProductDetail } from "@/app/components/products"
import { useGetProductDetailQuery } from "@/app/services"

export default function ProductDetailPage( { params }: {params: {productId: string}}) {
  const {data} = useGetProductDetailQuery(params.productId)
  return (
    <section className="max-w-[1240px] mx-auto px-8 mt-20 mb-[140px]">
      {
        data && <ProductDetail productDataDetail={data}/>
      }
    </section>
  )
}