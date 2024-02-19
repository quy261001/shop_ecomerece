'use client'

import { CategoryProduct, ProductMain } from "@/app/components/products";
import { Col, Row } from "antd";
import { useState } from "react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(() => {
    if(typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return localStorage.getItem("activeCategory") || null;
    }
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  return (
    <section className="max-w-[1240px] px-8 mx-auto mt-20 mb-36">
      <Row className="gap-8">
        <Col span={4}>
          <CategoryProduct onCategoryChange={handleCategoryChange} activeCategory={activeCategory}/>
        </Col>
        <Col span={19}>
          <ProductMain activeCategory={activeCategory}/>
        </Col>
      </Row>
    </section>
  );
}
