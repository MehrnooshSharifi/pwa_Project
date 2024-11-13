import Link from "next/link";
import { useRouter } from "next/router";
const Photos = ({ imageData, sendPhotoToServer }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <img
        src={imageData}
        alt="Captured or Selected"
        className="w-full h-full object-cover"
      />
      <div className="flex items-center gap-x-[10px]  justify-center mb-4 p-4 text-[14px]">
        <button
          onClick={sendPhotoToServer}
          className="px-[1px] py-[5px] rounded bg-errorColor-3 text-naturalColor-2 w-[100px] h-[40px] flex justify-center items-center"
        >
          ارسال
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior
            router.push("/"); // Navigate back to the home page
            window.location.reload(); // Refresh the page to show the home page
          }}
          className="border border-1 border-errorColor-3 bg-naturalColor-2  p-4 rounded w-[100px] h-[40px] flex justify-center items-center text-errorColor-3"
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default Photos;
