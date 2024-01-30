"use client";

import { useState } from "react";
import { LoginForm, RegisterForm } from "../../../components/auth";

export default function LoginPage() {
  const [isPageLogin, setIsPageLogin] = useState(true);
  const handleTogglePage = (newIsPageLogin: boolean) => {
    setIsPageLogin(newIsPageLogin);
  }
  return (
    <>
      {isPageLogin ? <LoginForm isPageLogin={isPageLogin} onTogglePage={handleTogglePage}/> : <RegisterForm isPageLogin={isPageLogin} onTogglePage={handleTogglePage}/>}
    </>
  )
}
