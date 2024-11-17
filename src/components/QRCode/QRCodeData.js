const QRCodeData = ({ qrData, setQrData }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 text-white p-6">
      <div className="text-center">
        <h2 className="text-2xl mb-4">جزییات اطلاعات QR Code :</h2>
        <p>{qrData}</p>
        <button
          onClick={() => setQrData(null)}
          className="mt-4 bg-green-500 p-2 rounded-lg"
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default QRCodeData;
