"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Flex, Form, Typography } from "antd";
import * as z from "zod";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next13-progressbar";
import { FormItem } from "react-hook-form-antd";
import { Label, Input, Icon } from "@/components";
import { MESSAGE, useApp } from "@/common";
import { authService } from "@/app/services";
import { RegisterUserDTO } from "@/app/types/user";

const { Text, Title } = Typography;

const schema = z.object({
  name: z.string().min(1, { message: MESSAGE.NAME_REQUIRED }),
  email: z
    .string()
    .min(1, { message: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.EMAIL_INVALID }),
  password: z.string().min(1, { message: MESSAGE.PASSWORD_REQUIRED }),
  confirmPassword: z.string().min(1, { message: MESSAGE.CONFIRM_PASSWORD }),
  phone: z.string().refine((data) => /^\d+$/.test(data), {
    message: MESSAGE.PHONE_REQUIRED,
  }),
});
const defaultValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm({ isPageLogin, onTogglePage }: any) {
  const { message } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { control, handleSubmit } = methods;
  const handleSignIn = () => {
    onTogglePage((isPageLogin = true));
  };
  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
      if (formData) {
        const response = await authService.registerUser(
          formData as RegisterUserDTO
        );

        if (response?.status !== "OK") {
          message.error(MESSAGE.REGISTER_FAILED);
        }

        if (response?.status == "OK") {
          message.success(MESSAGE.REGISTER_SUCCESS);
          setTimeout(() => {
            onTogglePage((isPageLogin = true));
          }, 1000);
        }
      }
    } catch (err: any) {
      message.error(err.message || MESSAGE.AN_ERROR_OCCURRED);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      className="max-w-[400px] mx-auto"
    >
      <Title level={2} className="text-[#030303] tracking-[1.02px] uppercase">
        Create an account
      </Title>
      <Text className="text-[#636364]">Enter your details below</Text>
      <FormProvider {...methods}>
        <Form
          className="mt-9 min-w-[300px]"
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
        >
          <FormItem name="name" control={control}>
            <Input
              type="name"
              placeholder="Enter name"
              className="border-transparent border-b border-b-[#000] rounded-none shadow-none px-0 text-base"
            />
          </FormItem>
          <FormItem
            name="phone"
            control={control}
          >
            <Input
              type="tel"
              placeholder="Enter Phone Number"
              className="border-transparent border-b border-b-[#000] rounded-none shadow-none px-0 text-base"
            />
          </FormItem>
          <FormItem name="email" control={control}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-transparent border-b border-b-[#000] rounded-none shadow-none px-0 text-base"
            />
          </FormItem>
          <FormItem name="password" control={control}>
            <Input
              type="password"
              placeholder="**********"
              className="border-transparent border-b border-b-[#000] rounded-none shadow-none px-0 text-base"
            />
          </FormItem>
          <FormItem name="confirmPassword" control={control}>
            <Input
              type="password"
              placeholder="**********"
              className="border-transparent border-b border-b-[#000] rounded-none shadow-none px-0 text-base"
            />
          </FormItem>
          <Flex vertical gap={12}>
            <Button
              block
              size="large"
              type="primary"
              danger
              htmlType="submit"
              disabled={isLoading}
            >
              Sign Up
            </Button>
            <Text className="text-xs text-center">
              Do you already have an account?{" "}
              <span
                onClick={handleSignIn}
                className="text-[#ff4d4f] cursor-pointer"
              >
                Go to login
              </span>
            </Text>
          </Flex>
        </Form>
      </FormProvider>
    </Flex>
  );
}
