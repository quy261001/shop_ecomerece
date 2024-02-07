'use client'
import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";
import { Loading, HeaderTop, Footer } from "@/components";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Layout className="bg-[#fff]">
        <Content className="lg:h-screen mt-[60px] mb-[140px]">
          <Row className="items-center flex-col lg:flex-row">
          <Col lg={11} className="">
              <picture>
                <img
                  src="/images/loginImage.png"
                  alt="loginImage"
                  className="w-full lg:h-screen h-[400px] mx-auto"
                />
              </picture>
            </Col>
            <Col lg={13} className="h-full w-full my-10 lg:my-0">
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Suspense>
  );
}
