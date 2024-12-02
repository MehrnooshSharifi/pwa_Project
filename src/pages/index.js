import Services from "@/components/Services/Services";
import { Html5Qrcode } from "html5-qrcode";
import { useState } from "react";
import servicesType from "../../Data/servicesType";
import Layout from "@/container/Layout";
import { FaArrowRight } from "react-icons/fa";
const HomePage = () => {
  const [showQRCodeSection, setQRCodeSection] = useState(false);
  const [cameras, setCameras] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState(null);
  const [sayadiId, setSayadiId] = useState();
  const sayadiHandler = (e) => {
    console.log(e.target.value);
    setSayadiId(e.target.value);
  };
  const sendSayadiIdHandler = () => {
    console.log(sayadiId);
  };
  const startCameraListing = () => {
    try {
      Html5Qrcode.getCameras()
        .then((availableCameras) => {
          if (availableCameras && availableCameras.length > 0) {
            setCameras(availableCameras);
            setSelectedCameraId(availableCameras[0].id); // Default to the first camera
          } else {
            alert("No cameras found on this device!");
          }
        })
        .catch((err) => {
          console.error("Error getting cameras: ", err);
          alert("Failed to access cameras. Please check permissions.");
        });
    } catch (error) {
      console.error("Unexpected error in startCameraListing: ", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const startScanner = () => {
    if (!selectedCameraId) {
      alert("Please select a camera first!");
      return;
    }

    const readerElement = document.getElementById("reader");
    if (!readerElement) {
      alert("QR code reader element not found!");
      return;
    }

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode
      .start(
        selectedCameraId,
        {
          fps: 15,
          qrbox: { width: 800, height: 800 },
        },
        (decodedText, decodedResult) => {
          console.log(`Decoded text: ${decodedText}`);
          alert(`QR Code: ${decodedText}`);
          html5QrCode.stop();
        },
        (error) => {
          console.warn(`QR Code scanning error: ${error}`);
        }
      )
      .catch((err) => {
        console.error("Error starting scanner: ", err);
        alert("Failed to start QR scanner. Please try again.");
      });
  };

  const handleServiceClick = () => {
    setQRCodeSection(true);
  };
  return (
    <Layout>
      <div className="flex flex-col container mx-auto bg-neutralColor-5 max-w-[600px] overflow-y-auto h-screen">
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-[10px] md:grid-cols-3 md:gap-x-[10px] w-full bg-neutralColor-5 p-6">
          {servicesType.map((service) => (
            <Services
              key={service.id}
              service={service}
              handleServiceClick={handleServiceClick}
            />
          ))}
        </div>
        {showQRCodeSection && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="flex justify-center items-center gap-y-[10px] rounded-md absolute  bottom-[20px] px-[3px] py-[8px] w-1/2">
              {cameras.length > 0 && (
                <button
                  onClick={startScanner}
                  className="py-[10px] bg-errorColor-2 text-naturalColor-2 border-none rounded-md cursor-pointer absolute bottom-[70px] w-[220px]"
                >
                  اسکن کنید
                </button>
              )}
              <button
                className=" bg-white rounded-r-md  py-[12.5px] text-white px-[10px]"
                onClick={sendSayadiIdHandler}
              >
                <FaArrowRight className="fill-neutralColor-3" />
              </button>
              <input
                type="text"
                placeholder="ورود دستی شناسه صیادی"
                onChange={sayadiHandler}
                className="rounded-l-md px-[10px] py-[10px] text-[14px] outline-none border-r-2 border-r-neutralColor-3"
              />
            </div>
            <div className="flex flex-col justify-center  items-center ">
              <div className="w-[200px] flex flex-col items-center justify-center gap-y-[5px] mt-[200px] ">
                <p className="text-white text-[12px]">
                  لطفاً برای فعال شدن امکان اسکن، از لیست دوربین ها ، دوربین
                  Back سازگار با موبایل خود را انتخاب کنید
                </p>
                <button
                  onClick={startCameraListing}
                  className=" bg-primaryColor-1 text-naturalColor-2 border-none rounded-lg cursor-pointer mb-[10px] whitespace-nowrap py-[8px] w-[150px] flex justify-center"
                >
                  لیست دوربین ها
                </button>
              </div>
              {cameras.length > 0 && (
                <div className="absolute top-[200px]">
                  <label
                    htmlFor="camera-select"
                    className="mr-[10px] text-naturalColor-2"
                  >
                    انتخاب دوربین :
                  </label>
                  <select
                    id="camera-select"
                    onChange={(e) => setSelectedCameraId(e.target.value)}
                    value={selectedCameraId}
                    className="p-[10px] rounded-md mb-[10px]"
                  >
                    {cameras.map((camera) => (
                      <option key={camera.id} value={camera.id}>
                        {camera.label || `Camera ${camera.id}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div id="reader" className="w-[700px] h-[700px] mb-[20px]"></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
