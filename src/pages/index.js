import { useState, useRef, useCallback } from "react";
import Layout from "@/container/Layout";
import servicesType from "../../Data/servicesType";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCameraRetro } from "react-icons/fa";
import Services from "@/components/Services/Services";
import Camera from "@/components/Camera/Camera";
import Photos from "@/components/Camera/Photos";
export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [imageData, setImageData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null); // Reference for file input

  // Function to initialize the back camera
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }, // Request the back camera
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  }, []);

  // Function to capture a photo at full screen resolution
  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

      const capturedImageData = canvasRef.current.toDataURL("image/png");
      setImageData(capturedImageData);

      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());

      setShowCamera(false);
    }
  };

  // Function to send the captured image to the server and refresh the page
  const sendPhotoToServer = async () => {
    if (imageData) {
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageData }),
        });

        if (response.ok) {
          console.log("Image successfully sent to the server!");
          window.location.reload();
        } else {
          console.error("Failed to send image to the server.");
        }
      } catch (error) {
        console.error("Error sending photo to server:", error);
      }
    }
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result); // Set image data to display chosen image
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle service clicks
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
        {/* Fullscreen Camera Interface */}
        {showCamera && (
          <Camera
            videoRef={videoRef}
            capturePhoto={capturePhoto}
            canvasRef={canvasRef}
            fileInputRef={fileInputRef}
            handleFileChange={handleFileChange}
          />
        )}

        {/* Display and Send Captured or Selected Image */}
        {imageData && (
          <Photos imageData={imageData} sendPhotoToServer={sendPhotoToServer} />
        )}
      </div>
    </Layout>
  );
}
