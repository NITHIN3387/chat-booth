import { SignUpForm } from "@/components/forms/sign-up-form";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <section className="space-y-6">
        <h1>SIGN UP</h1>
        <SignUpForm />
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
