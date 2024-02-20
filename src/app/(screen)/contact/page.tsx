'use client'

import { Information, FormContact } from "@/app/components/contact" 
import { Flex } from "antd"

export default function ContactPage() {
  return (
    <section className="max-w-[1240px] px-8 mt-20 mb-[140px]">
      <Flex gap={30}>
        <Information />
        <FormContact />
      </Flex>
    </section>
  )
}