"use client";
import { Footer, HeaderTop } from "@/components";
import { useGetDetailUserQuery, useGetTypeProductsQuery} from "@/app/services";
import { useSession } from "next-auth/react";
import { useIsAuthenticated } from "@/common/hooks/useIsAuthenticated";

export default function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: dataSession } = useSession();
  const { isAuthenticated } = useIsAuthenticated();
  const { data, isLoading, status } = useGetDetailUserQuery(
    String(dataSession?.user.id),
    { skip: !isAuthenticated }
  );
  const { data: dataType } = useGetTypeProductsQuery();
  return (
    <>
      <HeaderTop />
      <main className="bg-white max-w-[1240px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
