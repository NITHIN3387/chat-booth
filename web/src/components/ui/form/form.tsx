"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleFormDataChange } from "@/utils/auth/web";
import { useActionState, useState } from "react";
import { Loader } from "@/components/loader";
import type { FormProps } from "./form.types";

export const Form = (props: FormProps): JSX.Element => {
  const { handler, formFields, initValues, submitButtonLabel } = props

  const [values, setValues] = useState(initValues);
  const [state, formAction, isPending] = useActionState(handler, null);

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
            defaultValue={(values as any)[id]}
            onChange={(event) => handleFormDataChange(event, state, setValues)}
          />
          {state?.name === id && state.error ? (
            <p className="text-red-500 text-sm">{state.error}</p>
          ) : null}
        </div>
      ))}

      <Button disabled={isPending} type="submit">{isPending ? <Loader /> : submitButtonLabel}</Button>
    </form>
  );
};
