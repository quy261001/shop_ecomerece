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


const { Text, Title } = Typography;

const schema = z.object({
  email: z
    .string()
    .min(1, { message: MESSAGE.EMAIL_REQUIRED })
    .email({ message: MESSAGE.EMAIL_INVALID }),
  password: z.string().min(1, { message: MESSAGE.PASSWORD_REQUIRED }),
});
const defaultValues = { email: "", password: "" };

export default function LoginPage() {
  const { message } = useApp()
  const [isLoading, setIsLoading] = useState(false);
  const { status, data } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      message.success(MESSAGE.LOGIN_SUCCESS);
      router.push("/");
    }
  }, [status]);
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { control, handleSubmit } = methods;
  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    try {
      if(formData) {
        const callback = await signIn("credentials", {
          ...formData,
          redirect: false,
        });
        
        if (callback?.error) {
          message.error(MESSAGE.LOGIN_FAILED);
        }
    
        if (callback?.ok) {
          message.success(MESSAGE.LOGIN_SUCCESS);
          router.push('/');
        }
      }
    } catch(err: any) {
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
        Welcome back
      </Title>
      <Text className="text-[#636364]">
        Welcome back! Please enter your details.
      </Text>
      <FormProvider {...methods}>
        <Form
          className="mt-9 min-w-[300px]"
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
        >
          <FormItem name="email" control={control} label={<Label>Email</Label>}>
            <Input type="email" placeholder="Enter your email" />
          </FormItem>
          <FormItem
            name="password"
            control={control}
            label={<Label>password</Label>}
          >
            <Input type="password" placeholder="**********" />
          </FormItem>
          <Flex justify="space-between" align="center" className="mb-3">
            <div>
              <Checkbox />
              <Text className="ml-2 text-xs text-gray-180 font-medium">
                Remember me
              </Text>
            </div>
            <div>
              <Text className="text-xs text-gray-180 font-medium">
                Forgot password
              </Text>
            </div>
          </Flex>
          <Flex vertical gap={12}>
            <Button block size="large" type="primary" htmlType="submit" disabled={isLoading}>
              Sign in
            </Button>
            <Button
              icon={<Icon type="svg" name="google" width={28} height={28} />}
              block
              size="large"
              className='flex items-center justify-center mb-4 border-[2px] font-medium hover:border-gray-700 hover:text-gray-dark'
            >
              Continue with Google
            </Button>
          </Flex>
          <Text className="text-xs text-[#595959] text-center block">Don’t have an account? <span className="text-[#EA454C]">Sign up fo free!</span></Text>
        </Form>
      </FormProvider>
    </Flex>
  );
}
