const QRCodeScanner = ({ videoRef, canvasRef, setShowCamera, stopCamera }) => {
  return (
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
      <button
        onClick={() => {
          setShowCamera(false);
          stopCamera();
        }}
        className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
      >
        انصراف
      </button>
    </div>
  );
};

export default QRCodeScanner;
