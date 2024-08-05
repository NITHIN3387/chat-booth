import Link from "next/link";
import { formFields, initValues } from "./sign-in.string";
import { handleSignIn } from "@/utils/auth/web";
import { Form } from "@/components/ui/form";

export default function Page(): JSX.Element {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <section className="space-y-6">
        <h1>SIGN IN</h1>
        <Form
          handler={handleSignIn}
          formFields={formFields}
          initValues={initValues}
          submitButtonLabel="Sign In"
        />
        <p className="brightness-75">
          Don&apos;t have an account ?
          <Link
            className="text-primary-theme-color font-semibold"
            href="/sign-up"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
}
