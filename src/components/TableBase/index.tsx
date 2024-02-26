"use client";

import { ProductCardDetail, DataSourceDTO  } from "@/app/types";
import { Table, Tag, Image, Space, Button } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/redux/hooks"; 
import { productActions } from "@/app/services";

interface ProductCartProps {
  productCart: ProductCardDetail[];
}

export function TableBase({ productCart }: ProductCartProps) {
  const [dataSource, setDataSource] = useState<Array<DataSourceDTO>>([]);
  const dispatch = useAppDispatch();
  const handleDelete = (item: ProductCardDetail) => {
    dispatch(productActions.deleteCart(item))
  }
  useEffect(() => {
    const formattedData = productCart.map((item, index) => {
      const colorCount: { [key: string]: number } = {};
      item.colors.forEach(color => {
        colorCount[color] = (colorCount[color] || 0) + 1;
      });
  
      const colorTags = Object.keys(colorCount).map(color => (
        <Tag key={color} color={color}>
          {colorCount[color]}
        </Tag>
      ));
  
      const sizeCount: { [key: string]: number } = {};
      item.sizes.forEach(size => {
        sizeCount[size] = (sizeCount[size] || 0) + 1;
      });
  
      const sizeTags = Object.keys(sizeCount).map(size => (
        <Tag key={size}>
          ({sizeCount[size]}) {size}
        </Tag>
        
      ));
  
      return {
        key: index,
        image: (
          <Image
            preview={false}
            src={item.images[0]}
            alt={item.name}
            className="w-[54px] h-[54px]"
          />
        ),
        price: item.discount ? `$${item.discount}` : `$${item.price}`,
        colors: item.colors.length > 0 && item.colors[0] !== '' ? (
          <Space>{colorTags}</Space>
        ) : (
          <Tag color="default">No Color</Tag>
        ),
        sizes: item.sizes.length > 0 && item.sizes[0] !== '' ? (
          <Space>{sizeTags}</Space>
        ) : (
          <Tag>No Size</Tag>
        ),
        quantity: item.quantity,
        action: <Button danger onClick={() => handleDelete(item)}>Delete</Button>,
      };
    });
    setDataSource(formattedData);
  }, [productCart]);
  
  

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Colors",
      dataIndex: "colors",
      key: "colors",
    },
    {
      title: "Sizes",
      key: "sizes",
      dataIndex: "sizes",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];

  return (
    <div>
      <Table pagination={{pageSize: 4}} columns={columns} dataSource={dataSource} />
    </div>
  );
}
