"use client"

import { redirect } from "next/navigation";

export const handleSignIn = async (state: any, formData: FormData) => {
  const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!EMAIL_PATTERN.test(email))
    return {
      name: "email",
      error: "Invalid email. Please check the format",
      status: false,
    };

  if (password.length == 0)
    return {
      name: "password",
      error: "Please enter your password",
      status: false,
    };

  const data = { email, password };

  const responce = await fetch("/api/auth/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include"
  })  

  if (responce.status === 500) console.log("Internal server error");
  else if (responce.status !== 200)
    return {
      name: "password",
      error: "Invalid Email or Password",
      status: false,
    };
  else redirect("/");
};
