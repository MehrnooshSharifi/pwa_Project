import Image from "next/image";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { IoWalletSharp, IoLogIn } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { RiUserFill } from "react-icons/ri";
const HomePageFooter = () => {
  return (
    <footer className="row-start-3 flex justify-between p-6 items-center  container mx-auto bottom-0 sticky max-w-[600px]  left-0 right-0 bg-naturalColor-2 w-full h-[72px]  border-t-[1px]">
      <Link
        className="flex flex-col items-center w-[70px] gap-2"
        href="/testi"
        target="_blank"
      >
        <GoHomeFill className="fill-neutralColor-3 text-[20px] hover:fill-errorColor-3 " />
        <span className="text-[12px]  text-neutralColor-2">خانه</span>
      </Link>
      <Link
        className="flex flex-col items-center w-[70px] gap-2"
        href="/testi"
        target="_blank"
      >
        <IoWalletSharp className="fill-neutralColor-3 text-[20px] hover:fill-errorColor-3 " />
        <span className="text-[12px]  text-neutralColor-2">کیف پول</span>
      </Link>
      <Link
        className="flex flex-col items-center w-[70px] gap-2 "
        href="/testi"
        target="_blank"
      >
        <GrTransaction className="stroke-neutralColor-3 text-[20px] hover:stroke-errorColor-3 " />
        <span className="text-[12px]  text-neutralColor-2">تراکنش ها</span>
      </Link>
      <Link
        className="flex flex-col items-center w-[70px] gap-2"
        href="/testi"
        target="_blank"
      >
        {/* <IoLogIn className="fill-neutralColor-3 text-[20px] hover:fill-errorColor-3 w-6 h-6" /> */}
        <RiUserFill className="fill-neutralColor-3 text-[20px] hover:fill-errorColor-3 w-6 h-6" />
        {/* //TODO : if there is cookies the span have to don't show and profile icon show*/}
        {/* <span className="text-[12px]  text-neutralColor-2">ورود</span> */}
        <span className="text-[12px]  text-neutralColor-2">پروفایل</span>
      </Link>
    </footer>
  );
};

export default HomePageFooter;
