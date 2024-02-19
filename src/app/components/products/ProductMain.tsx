"use client";

import { Col, Flex, Pagination, Row } from "antd";
import { ProductCard } from "@/components";
import { useGetProductsQuery } from "@/app/services";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

interface ProductMainProps {
  activeCategory: string | null | undefined;
}
export function ProductMain({ activeCategory }: ProductMainProps) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const { data } = useGetProductsQuery({
    limit: limit,
    page: page,
    filter: activeCategory,
  });
  useEffect(() => {
    setPage(0);
  }, [activeCategory]);
  const onChangePage = (page: number) => {
    if (data) {
      setPage(page - 1);
    }
  };
  return (
    <Flex vertical className="border-l border-l-[#eee] border-solid">
      <Row gutter={[12, 0]} className="pl-3">
        {!isEmpty(data) &&
          data.data.map((item: any) => (
            <Col key={item.id} span={6}>
              <ProductCard dataProduct={item} />
            </Col>
          ))}
      </Row>
      {data && Math.ceil(data.total / limit) > 1 && (
        <Pagination
          className="text-center mt-16"
          onChange={onChangePage}
          defaultCurrent={page}
          pageSize={limit}
          total={data.total}
        />
      )}
    </Flex>
  );
}
