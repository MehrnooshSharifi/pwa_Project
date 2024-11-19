import Image from "next/image";
import Link from "next/link";

const HomePageHeader = () => {
  return (
    <div className="bg-neutralColor-5 max-w-[600px] top-0 sticky transition-all duration-700 container mx-auto p-6 ">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/Images/logo/newLogo.webp"
          width={65}
          height={50}
          alt="LOGO"
        />
        <div className="w-[100px] h-[40px] bg-errorColor-2 text-naturalColor-2 text-[14px] flex items-center justify-center rounded-md whitespace-nowrap">
          {/* //TODO : if there is coockie text have to change to  */}
          <Link href="/login">ورود | ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
