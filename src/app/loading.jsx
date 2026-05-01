import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      {/* Cow Emoji / Logo */}
      <div className="text-6xl animate-bounce">🐄</div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-green-700 mt-4">QurbaniHat</h1>

      {/* Loading text */}
      <p className="text-gray-600 mt-2">Preparing your Qurbani animals...</p>

      {/* Spinner */}
      <div className="mt-6">
        <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
