import React, { useState, useEffect } from "react";
import { useAuth } from "../contextApi/contextApi";
import axios from "axios";

const OTPverify = () => {
  const { setVerified, email } = useAuth();
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Timer in seconds (10 minutes)
  const [timer, setTimer] = useState(20);

  // Format timer into MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Countdown effect
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const sendCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (timer === 0) {
      setError("OTP has expired. Please resend the code.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/verify-email", {
        email: email,
        code: code,
      });

      setSuccess("Email verified successfully!");
      setVerified(true);
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    setError(null);
    setSuccess(null);
    setTimer(600);
    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/resend-code", {
        email: email,
      });
      setSuccess("New verification code sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend code.");
    }
  };

  return (
    <div className="p-10 text-white min-h-screen inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center font-bold mb-6">OTP Verification</h1>

      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg text-black">
        <p className="text-center font-medium mb-2">Email:</p>
        <h2 className="text-center font-bold text-lg text-indigo-600">{email}</h2>

        <form onSubmit={sendCode} className="mt-6 space-y-4">
          <div>
            <label htmlFor="code" className="block text-lg font-semibold mb-2">
              Enter OTP Code
            </label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="------"
              minLength="6"
              maxLength="6"
              className="w-full px-4 py-2 border-2 border-orange-400 rounded-md focus:outline-none text-lg"
              required
            />
          </div>

          {timer > 0 ? (
            <p className="text-sm text-gray-600">
              Code expires in:{" "}
              <span className="font-semibold text-black">{formatTime(timer)}</span>
            </p>
          ) : (
            <p className="text-red-500 text-sm font-medium">OTP expired. Please resend code.</p>
          )}

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            disabled={loading || timer === 0}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-lg font-semibold transition-all disabled:bg-gray-300"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        {timer === 0 && (
          <button
            onClick={resendCode}
            className="mt-4 text-blue-600 hover:underline text-sm"
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
};

export default OTPverify;
