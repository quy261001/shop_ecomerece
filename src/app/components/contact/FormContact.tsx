"use client";

import { ContactItem } from "@/app/types";
import { Col, Flex, Row, Form, Input, Button } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MESSAGE } from "@/common";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";

const schema = z.object({
  name: z.string().min(1, { message: MESSAGE.NAME_REQUIRED }),
  email: z
    .string()
    .min(1, { message: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.EMAIL_INVALID }),
  phone: z.string().refine((data) => /^\d+$/.test(data), {
    message: MESSAGE.PHONE_REQUIRED,
  }),
  message: z.string(),
});

export function FormContact() {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const contactItems: ContactItem[] = [
    {
      id: 1,
      label: "Your Name",
      title: "name",
    },
    {
      id: 2,
      label: "Your Email",
      title: "email",
    },
    {
      id: 3,
      label: "Your Phone",
      title: "phone",
    },
  ];

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    console.log("formData", formData);
  };

  return (
    <Flex className="px-8 py-10 shadow-account">
      <Form onFinish={handleSubmit(onSubmit)}>
        <Row gutter={[16, 0]}>
          {contactItems.map((item) => (
            <Col key={item.id} span={8}>
              <FormItem name={item.title} control={control}>
                <Input
                  placeholder={item.label}
                  className="border-transparent bg-[#f5f5f5] rounded h-[50px]"
                />
              </FormItem>
            </Col>
          ))}
        </Row>
        <FormItem name="message" control={control}>
          <Input.TextArea
            placeholder="Your Message"
            className="border-transparent bg-[#f5f5f5] rounded h-[207px] pt-3"
          />
        </FormItem>

        <Button
          htmlType="submit"
          className="px-12 py-4 w-[214px] h-[56px] bg-custom hover:text-white mt-8 float-right"
        >
          Send Massage
        </Button>
      </Form>
    </Flex>
  );
}
