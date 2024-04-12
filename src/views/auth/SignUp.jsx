import InputField from "../../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "../../components/checkbox";

export default function SignUp() {
  return (
    <div className="mt-0 mb-16 flex h-full w-full items-center justify-center md:mx-0 md:mt-0 md:h-fit md:px-0 lg:mb-10 lg:h-full lg:items-center lg:justify-start">
      {/* Sign up section */}
      <div className=" mt-[8vh] w-full  max-w-full flex-col items-center md:mt-[4vh] md:pl-4 lg:pl-0 xl:mt-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-center text-3xl font-bold text-navy-700 dark:text-white md:text-4xl">
          Sign Up
        </h4>
        <p className="mb-8 ml-1 text-center text-base text-gray-600">
          Enter your email and password to sign up!
        </p>
        <div className="mb-4 lg:mb-3 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Continue with Google
          </h5>
        </div>
        <div className="mb-4 lg:mb-3 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <div className=" mb-4 lg:mb-3 flex w-full gap-[14px]">
          <InputField
            variant="auth"
            label="First Name"
            placeholder="John"
            id="fname"
            type="text"
            extra="w-[50vw] lg:w-[20vw]"
            
          />
          <InputField
            variant="auth"
            label="Last Name"
            placeholder="Doe"
            id="lname"
            type="text"
            extra="w-[50vw] lg:w-[20vw]"
          />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        {/* Checkbox */}
        <div className="mb-4 lg:mb-3 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox className=" -ml-2" />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
        </div>
        <p className="mb-4 lg:mb-3 block text-sm text-gray-700">
          By signing in or continuing to clips.id, you agree to our
          <a
            href="#"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
          Terms of Use.
          </a>
        </p>
        <button className="linear  w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign Up
        </button>
        <div className="mt-2 flex w-full justify-center ">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <a
            href="/u/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white "
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
