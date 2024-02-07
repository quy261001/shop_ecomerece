"use client";

import { Button, Col, Flex, Form, Row, Typography } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { Input, Label } from "@/components";
import { ProfileItem } from "@/app/types";
import * as z from "zod";
import { MESSAGE } from "@/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelectorCurrent } from "@/app/services";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;

const schema = z.object({
  name: z.string().min(1, { message: MESSAGE.NAME_REQUIRED }),
  email: z
    .string()
    .min(1, { message: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.EMAIL_INVALID }),
  phone: z.string().refine((data) => /^\d+$/.test(data), {
    message: MESSAGE.PHONE_REQUIRED,
  }),
  city: z.string().min(1, { message: MESSAGE.CITY_REQUIRED }),
  address: z.string().min(1, { message: MESSAGE.ADDRESS_REQUIRED }),
});

export default function AccountPage() {
  const dataUser = useSelectorCurrent();
  const [isLoading, setIsLoading] = useState(false)

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  };
  const profileItems: ProfileItem[] = [
    {
      id: 1,
      label: "Name",
      title: "name",
    },
    {
      id: 2,
      label: "Email",
      title: "email",
    },
    {
      id: 3,
      label: "Phone",
      title: "phone",
    },
    {
      id: 4,
      label: "Address",
      title: "address",
    },
    {
      id: 5,
      label: "City",
      title: "city",
    },
  ];
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if(!dataUser) return;
    
    setValue('name', dataUser?.name || '')
    setValue('email', dataUser?.email || '')
    setValue('phone', String(dataUser?.phone || ''))
    setValue('address', dataUser?.address || '')
    setValue('city', dataUser?.city || '')
  }, [dataUser])

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true)
    console.log("formData", formData);
  };

  return (
    <Flex vertical className="px-20 py-10 rounded shadow-account h-full">
      <Title level={4} className="text-custom font-medium pb-4">
        Edit Your Profile
      </Title>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Row gutter={[50, 0]}>
          {profileItems.map((item) => (
            <Col key={item.id} span={12}>
              <FormItem name={item.title} control={control}>
                <Label className="inline-block mb-2 font-medium text-base text-black">
                  {item.label}
                </Label>
                <Input className="border-transparent bg-[#f5f5f5] rounded" />
              </FormItem>
            </Col>
          ))}
        </Row>
        <Flex justify="end" gap={32}>
          <Button onClick={() => reset()} className="px-8 py-4 w-[180px] h-[56px] bg-transparent ">cancel</Button>
          <Button
            htmlType="submit"
            className="px-12 py-4 w-[214px] h-[56px] bg-custom hover:text-white"
          >
            Save Changes
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
}
