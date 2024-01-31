import { Button } from "antd";
import Link from "next/link";

export function ButtonAll({children}: {children: React.ReactNode}) {
  return (
    <Button danger type='primary' className="px-12 py-4 h-12 flex items-center justify-center">
      {children}
    </Button>
  )
}