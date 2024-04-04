import { InputOTPForm } from "@/components/otp-login-form"

export default async function LoginPage() {
  return (
    <div className="mt-36 flex w-full flex-col items-center justify-center">
      <h2 className="mb-6 text-xl font-bold md:text-2xl lg:mb-10 lg:text-3xl 2xl:mb-12 2xl:text-5xl">
        Login Using ID
      </h2>
      <InputOTPForm />
    </div>
  )
}
