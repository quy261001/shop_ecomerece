"use client";

import { CategoryCardDTO } from "@/app/types";
import { Card, Flex, Typography } from "antd";
import { Icon } from "..";

const { Text } = Typography;

interface MockCateProps {
  MockCate: CategoryCardDTO;
}

export function CategoryCard({ MockCate }: MockCateProps) {
  return (
    <Card className="w-[170px] h-[145px] flex items-center justify-center hover:text-white hover:bg-custom cursor-pointer transition-all">
      <Flex gap={16} vertical justify="center" align="center">
        <Icon name={MockCate.icon} type="svg" width={56} height={56}/>
        <Text className="text-base">{MockCate.name}</Text>
      </Flex>
    </Card>
  );
}
