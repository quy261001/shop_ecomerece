'use client'
import { Flex } from "antd";

export function TagLeft({ children }: { children: React.ReactNode }) {
  return (
    <Flex align="center" gap={16}>
      <div className="w-5 h-10 bg-custom inline-block rounded-[4px]"></div>
      <div className="text-custom font-semibold text-base">{children}</div>
    </Flex>
  );
}
