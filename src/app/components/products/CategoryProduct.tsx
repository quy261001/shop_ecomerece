"use client";

import { useSelectorProductType } from "@/app/services";
import { Flex } from "antd";
import clsx from "clsx";

interface CategoryProductProps {
  onCategoryChange: (type: string) => void;
  activeCategory: string | null | undefined;
}
export function CategoryProduct({
  onCategoryChange,
  activeCategory,
}: CategoryProductProps) {
  const dataType = useSelectorProductType();
  const handleCategory = (type: string) => {
    onCategoryChange(type);
    localStorage.setItem("activeCategory", type || "");
  };

  return (
    <Flex vertical gap={20} className="px-5">
      <div className="font-semibold text-custom text-3xl">Category</div>
      <ul>
        {dataType.map((item, index) => {
          const isActive = item === activeCategory;
          return (
            <li
              key={index}
              onClick={() => handleCategory(item)}
              className={clsx(
                "cursor-pointer pb-5 hover:text-custom transition-all",
                isActive && "text-custom"
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </Flex>
  );
}
