import React, { useState } from "react";

const ErrorBoundary = ({ error }) => {
  return (
    <div className="w-fit mx-auto bg-white py-4 px-8">
      <h1 className="text-5xl text-red-600 font-bold mb-6">
        Opps something went wrong{" "}
      </h1>
      <p className="text-3xl">{error}</p>
    </div>
  );
};

export default ErrorBoundary;
