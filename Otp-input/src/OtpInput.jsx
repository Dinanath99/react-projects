import { useState } from "react";

const OtpInput = () => {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < OTP_LENGTH - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">OTP Input</h1>
        <div className="flex justify-center gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button
          className={`w-full py-2 rounded font-bold ${
            otp.some((digit) => digit === "")
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white cursor-pointer"
          }`}
          disabled={otp.some((digit) => digit === "")}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
