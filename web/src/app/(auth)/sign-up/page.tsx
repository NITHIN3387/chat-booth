import { handleSignUp } from "@/utils/auth/web";
import Link from "next/link";
import { formFields, initValues } from "./sign-up.string";
import { Form } from "@/components/ui/form";

export default function Page(): JSX.Element {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <section className="space-y-6">
        <h1>SIGN UP</h1>
        <Form
          handler={handleSignUp}
          formFields={formFields}
          initValues={initValues}
          submitButtonLabel="Sign Up"
        />
        <p className="brightness-75">
          Already have an account ?
          <Link
            className="text-primary-theme-color font-semibold"
            href="/sign-in"
          >
            {" "}
            Sign In
          </Link>
        </p>
      </section>
    </div>
  );
}
