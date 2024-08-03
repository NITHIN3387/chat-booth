"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleFormDataChange, handleSignUp } from "@/utils/auth/web";
import { useActionState, useState } from "react";
import { formFields } from "./sign-up.string";
import type { ValuesType } from "./sign-up.types";

export const SignUpForm = (): JSX.Element => {
  const [values, setValues] = useState<ValuesType>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [state, formAction, isPending] = useActionState(handleSignUp, null);

  return (
    <form action={formAction} className="space-y-6">
      {formFields.map(({ id, label, placeholder, type }) => (
        <div className="flex flex-col gap-2" key={id}>
          <label htmlFor={id}>{label}:</label>
          <Input
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={values[id]}
            onChange={(event) => handleFormDataChange(event, state, setValues)}
          />
          {state?.name === id && state.error ? (
            <p className="text-red-500 text-sm">{state.error}</p>
          ) : null}
        </div>
      ))}
      <Button type="submit">{isPending ? ". . ." : "Sign Up"}</Button>
    </form>
  );
};
