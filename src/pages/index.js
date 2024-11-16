import { useState, useRef, useCallback, useEffect } from "react";
import Layout from "@/container/Layout";
import servicesType from "../../Data/servicesType";
import Services from "@/components/Services/Services";
import jsQR from "jsqr";
import { useWindowSize } from "@react-hook/window-size";

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false); // For debugging detection
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [width, height] = useWindowSize();

  // Initialize camera
  const startCamera = useCallback(async () => {
    try {
      // iOS-friendly facing mode
      const constraints = {
        video: {
          facingMode: { ideal: "environment" }, // Ideal mode for iOS
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      // Check for capability
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Camera not supported on this device.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  }, []);

  // Stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // Handle click for service with ID 1
  const handleServiceClick = (serviceId) => {
    if (serviceId === 1) {
      setShowCamera(true);
      startCamera();
    }
  };

  // Scan QR code function
  const scanQRCode = useCallback(() => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Set canvas dimensions to match video feed
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        // Draw video frame to canvas
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );

        // Get image data from canvas
        const imageData = context.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        // Check if QR code is detected
        if (code) {
          setQrData(code.data);
          setShowCamera(false); // Disable camera when QR code is detected
          setIsDetecting(false);
          stopCamera();
        } else {
          setIsDetecting(true); // No QR code detected in this frame
        }
      }
    }
  }, []);

  // Scanning interval when camera is active
  useEffect(() => {
    if (showCamera) {
      const interval = setInterval(scanQRCode, 100); // Scan every 100ms for faster detection
      return () => clearInterval(interval);
    }
  }, [showCamera, scanQRCode]);

  // Send QR data to server when detected
  useEffect(() => {
    if (qrData) {
      fetch("/api/save-qr-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qrData }),
      })
        .then((response) => response.json())
        .then((data) => console.log("QR data saved:", data))
        .catch((error) => console.error("Error saving QR data:", error));
    }
  }, [qrData]);

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

        {/* Show camera and focus box only when `showCamera` is true */}
        {showCamera && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              muted // Muted is required for iOS autoplay
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <canvas ref={canvasRef} className="hidden" />

            {/* Focus Box */}
            <div
              className="absolute border-4 border-green-500"
              style={{
                width: "200px",
                height: "200px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            {/* Detection Feedback */}
            {isDetecting && (
              <div className="absolute bottom-4 text-white bg-red-600 p-2 rounded">
                No QR code detected
              </div>
            )}

            <button
              onClick={() => {
                setShowCamera(false);
                stopCamera();
              }}
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
            >
              Close
            </button>
          </div>
        )}

        {/* Display QR code data */}
        {qrData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 text-white p-6">
            <div className="text-center">
              <h2 className="text-2xl mb-4">Scanned QR Code Data:</h2>
              <p>{qrData}</p>
              <button
                onClick={() => setQrData(null)}
                className="mt-4 bg-green-500 p-2 rounded-lg"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
