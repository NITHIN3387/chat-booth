"use client"

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { AuthUserContextType, AuthUserType } from "./auth-user.types";
import { redirect } from "next/navigation";

const AuthUserContext = createContext<AuthUserContextType | null>(null);

export const useAuthUser = () => useContext(AuthUserContext)

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null);

  const getAuthUser = async () => {
    const responce = await fetch("/api/auth/user", {
      method: "GET",
      credentials: "include"
    })    

    const res = await responce.json()

    if(responce.status === 401) redirect("/sign-in")
    else if (responce.status === 200) setAuthUser(res.user)
    else console.log("Internal server error");    
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  return (
    <AuthUserContext.Provider value={{ authUser }}>{children}</AuthUserContext.Provider>
  );
};
