import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import { useCookies } from "react-cookie";
export default function OTPPage({ setShowOtpPage, formik, otp, setOtp, user }) {
  const [isLoading, setIsLoading] = useState(false);
  const otpInputRef = useRef(null); // Ref for the OTP input
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(user);
    otpInputRef.current?.focus(); // Focus input on mount
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col items-center mt-[100px]"
      autoComplete="off"
    >
      <div className="flex flex-col items-center gap-y-[30px]">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            alt="logo"
            src="/assets/Images/logo/newLogo.webp"
            width={80}
            height={80}
          />
        </div>
        <h2 className="text-[16px] font-bold">کد تایید را وارد کنید</h2>
        <p className="text-[14px] text-neutralColor-2">
          کد تایید برای شماره{user.phoneNumber} پیامک شد
        </p>
        <div className="flex flex-col w-full max-w-[340px]">
          <input
            ref={otpInputRef}
            className="focus-within:border-2 text-neutralColor-2 w-full focus-within:border-primaryColor-1 pr-[6px] h-[48px] lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
            name="otp"
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            placeholder="Enter OTP"
            autoFocus // Ensures field is focused
          />
        </div>
        <button
          type="submit"
          className={`rounded-[5px] bg-errorColor-2 text-center px-[16px] text-naturalColor-2 text-[14px] font-medium w-full max-w-[340px] h-[48px]`}
        >
          {isLoading ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#FAFAFA"
              ariaLabel="three-dots-loading"
            />
          ) : (
            "تایید"
          )}
        </button>
        <Link
          href=""
          onClick={() => setShowOtpPage(false)}
          className="text-[12px] font-bold text-primaryColor-1"
        >
          برگشت به مرحله قبل
        </Link>
      </div>
    </form>
  );
}
