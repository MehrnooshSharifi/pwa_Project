import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const QRCodeScanner = ({ videoRef, stopCamera, setShowCamera }) => {
  const [acceptorCode, setAcceptorCode] = useState();
  const acceptorHandler = (e) => {
    console.log(e.target.value);
    setAcceptorCode(e.target.value);
  };
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted // Required for iOS autoplay
      />
      <button
        onClick={() => {
          stopCamera(); // Stop camera
          setShowCamera(false); // Hide scanner
        }}
        className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
      >
        انصراف
      </button>
      <div className="flex justify-center items-center gap-y-[10px] rounded-md absolute  bottom-[20px] px-[3px] py-[8px] w-1/2">
        <button className=" bg-white rounded-r-md  py-[12.5px] text-white px-[10px]">
          <FaArrowRight className="fill-neutralColor-3" />
        </button>
        <input
          type="text"
          placeholder="ورود دستی شناسه صیادی"
          onChange={acceptorHandler}
          className="rounded-l-md px-[10px] py-[10px] text-[14px] outline-none border-r-2 border-r-neutralColor-3"
        />
      </div>
    </div>
  );
};

export default QRCodeScanner;
