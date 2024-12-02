import Services from "@/components/Services/Services";
import { Html5Qrcode } from "html5-qrcode";
import { useState } from "react";
import servicesType from "../../Data/servicesType";
import Layout from "@/container/Layout";
import { FaArrowRight } from "react-icons/fa";
const HomePage = () => {
  const [showQRCodeSection, setShowQRCodeSection] = useState(false);
  const [cameras, setCameras] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState(null);
  const [scanner, setScanner] = useState(null);
  const [sayadiId, setSayadiId] = useState();

  const sayadiHandler = (e) => {
    console.log(e.target.value);
    setSayadiId(e.target.value);
  };

  const sendSayadiIdHandler = () => {
    console.log(sayadiId);
  };

  const startCameraAndScanner = async () => {
    try {
      const availableCameras = await Html5Qrcode.getCameras();

      if (!availableCameras || availableCameras.length === 0) {
        alert("No cameras found on this device!");
        return;
      }

      // Step 1: Filter back cameras and prioritize "2 0 facing back" (or similar)
      const prioritizedCameras = availableCameras
        .filter((camera) => camera.label.toLowerCase().includes("back"))
        .sort((a, b) => {
          if (a.label.toLowerCase().includes("2 0")) return -1;
          if (b.label.toLowerCase().includes("2 0")) return 1;
          return 0;
        });

      if (prioritizedCameras.length === 0) {
        alert("No back-facing cameras found!");
        return;
      }

      setCameras(prioritizedCameras); // Save cameras for debugging/visualization

      // Step 2: Start scanning with the best back camera
      tryBackCameras(prioritizedCameras);
    } catch (error) {
      console.error("Error getting cameras: ", error);
      alert("Failed to access cameras. Please check permissions.");
    }
  };

  const tryBackCameras = async (cameraList) => {
    if (cameraList.length === 0) {
      alert("No back camera could successfully scan a QR code!");
      return;
    }

    const [currentCamera, ...remainingCameras] = cameraList;

    const html5QrCode = new Html5Qrcode("reader");

    try {
      await html5QrCode.start(
        currentCamera.id,
        {
          fps: 15,
          qrbox: { width: 800, height: 800 },
        },
        (decodedText) => {
          // Success: QR code scanned
          console.log(`Decoded text: ${decodedText}`);
          alert(`QR Code: ${decodedText}`);
          html5QrCode.stop(); // Stop the scanner
          setShowQRCodeSection(false); // Close scanner view
        },
        (error) => {
          console.warn(
            `Scanning error on camera ${currentCamera.label}: ${error}`
          );
        }
      );

      setSelectedCameraId(currentCamera.id); // Save the working camera ID
      setScanner(html5QrCode); // Save scanner instance for future use
    } catch (error) {
      console.warn(
        `Failed to start scanner with camera ${currentCamera.label}: ${error}`
      );
      // Try the next camera
      tryBackCameras(remainingCameras);
    }
  };

  const handleServiceClick = (serviceId) => {
    if (serviceId === 1) {
      setShowQRCodeSection(true); // Show the QR code section
      startCameraAndScanner(); // Automatically start scanning
    }
  };

  return (
    <Layout>
      <div className="flex flex-col container mx-auto bg-neutralColor-5 max-w-[600px] overflow-y-auto h-screen">
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-[10px] md:grid-cols-3 md:gap-x-[10px] w-full bg-neutralColor-5 p-6">
          {servicesType.map((service) => (
            <Services
              key={service.id}
              service={service}
              handleServiceClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>
        {showQRCodeSection && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="flex justify-center items-center gap-y-[10px] rounded-md absolute  bottom-[20px] px-[3px] py-[8px] w-1/2 z-50">
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
            <div className="flex flex-col justify-center items-center">
              <div id="reader" className="w-[700px] h-[700px] mb-[20px]"></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
