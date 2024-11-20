import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import * as Yup from "yup";
export default function OTPPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const initialValues = {
    otp: "",
  };
  const validationSchema = Yup.object({
    otp: Yup.string().required("کد تایید را وارد کنید"),
  });
  const onSubmit = async (user, { resetForm }) => {
    console.log(user);
    setIsLoading(true);
    // const res = await CreateUser(user);
    // if (res.isSuccess) {
    //   toast.success(res.message, {
    //     duration: 4000,
    //     style: {
    //       backgroundColor: "#4CAF50",
    //       color: "#fff",
    //     },
    //     className: "",
    //     icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
    //   });
    //   toast.success("رمز عبور از طریق پیامک ارسال گردید", {
    //     duration: 2000,
    //     style: {
    //       backgroundColor: "#4CAF50",
    //       color: "#fff",
    //     },
    //     icon: <BiCheckCircle className="w-[28px] h-[28px]" />,
    //   });
    //   setIsLoading(false);
    //   router.push("/user/signIn");
    //   resetForm({ user: "" });
    // } else toast.error(res.data.message, { duration: 2000 });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="flex flex-col container mx-auto bg-neutralColor-5 max-w-[600px] overflow-y-auto h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex-col items-center  mt-[100px]"
        autoComplete="off"
      >
        <div className=" flex flex-col items-center gap-y-[30px] ">
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
            کد تایید برای شماره 09102456878 پیامک شد
          </p>
          <div className="flex flex-col w-full max-w-[340px]">
            <input
              {...formik.getFieldProps("otp")}
              className="focus-within:border-2 w-full focus-within:border-primaryColor-1 pr-[6px]  h-[48px]  lg:text-[16px] border border-neutralColor-3 rounded-[5px] bg-naturalColor-2 px-7 outline-none focus:bg-naturalColor-2"
              name="otp"
              type="text"
            />
            <div className={`absolute top-[360px] lg:text-[12px] text-[10px]`}>
              {formik.touched.otp && formik.errors.otp && (
                <div className="flex gap-x-2 items-center ">
                  <span className="text-red-400">{formik.errors.otp}</span>
                </div>
              )}
            </div>
          </div>
          <button
            disabled={!formik.isValid}
            type="submit"
            className={` rounded-[5px]  bg-errorColor-2  text-center  px-[16px] text-naturalColor-2 text-[14px] font-medium  w-full max-w-[340px] h-[48px]  lg:text-[16px]  bottom-[30px] lg:mb-2  mt-[17.51px] ${
              !formik.isValid
                ? "cursor-not-allowed opacity-30"
                : "cursor-pointeropacity-100"
            }`}
          >
            <div className="flex  justify-center items-center">
              <div className="w-[40px] ">
                {isLoading ? (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#FAFAFA"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  <span className="whitespace-nowrap flex items-center justify-center">
                    تایید
                  </span>
                )}
              </div>
            </div>
          </button>
          <Link href="/user/login" className="text-[12px] font-bold text-primaryColor-1">برگشت به مرحله قبل</Link>
        </div>
      </form>
    </div>
  );
}
