import { useState, useRef, useCallback, useEffect } from "react";
import Layout from "@/container/Layout";
import servicesType from "../../Data/servicesType";
import Services from "@/components/Services/Services";
import QRCodeScanner from "@/components/QRCode/QRCodeScanner";
import QrScanner from "qr-scanner"; // Import the updated qr-scanner library
import QRCodeData from "@/components/QRCode/QRCodeData";

export default function Home() {
  const [showCamera, setShowCamera] = useState(false); // Show/hide camera
  const [qrData, setQrData] = useState(null); // Store QR code data
  const videoRef = useRef(null); // Reference to video element
  const canvasRef = useRef(null); // Reference for capturing the frame
  const scannerRef = useRef(null); // QR scanner instance

  // Start camera and scanner
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }, // Use back camera
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      if (!stream) throw new Error("Unable to access camera");

      // Attach stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      const normalizeData = (data1) => {
        return data1.normalize("NFC"); // Normalize Unicode text
      };

      // Create QR scanner instance
      scannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          setQrData(normalizeData(result.data)); // Store detected QR data
          stopCamera(); // Stop camera after detecting QR code
          setShowCamera(false); // Hide scanner UI
        },
        {
          highlightScanRegion: true, // Highlight detected QR code
        }
      );

      // Start scanning
      scannerRef.current.start();
    } catch (error) {
      console.error("Error starting camera:", error);
      alert("Camera access failed. Please check your browser permissions.");
    }
  }, []);

  // Stop camera and scanner
  const stopCamera = () => {
    if (scannerRef.current) {
      scannerRef.current.stop();
      scannerRef.current.destroy();
      scannerRef.current = null;
    }

    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // Handle service click
  const handleServiceClick = (serviceId) => {
    if (serviceId === 1) {
      setShowCamera(true);
      startCamera();
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
              handleServiceClick={handleServiceClick}
            />
          ))}
        </div>
        {/* Camera scanner */}
        {showCamera && (
          <QRCodeScanner
            videoRef={videoRef}
            stopCamera={stopCamera}
            setShowCamera={setShowCamera}
          />
        )}

        {/* QR Code Data Display */}
        {qrData && <QRCodeData qrData={qrData} setQrData={setQrData} />}
      </div>
    </Layout>
  );
}
