"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Step3() {
  const router = useRouter();
  const [fileName, setFileName] = useState(localStorage.getItem("file") || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      localStorage.setItem("file", file.name);
     setFileName("");
    }
  };

  const handleNext = () => {
    router.push("/summary");
  };

  const handleBack = () => {
    router.push("/step2");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Step 3: Document Upload</h1>
      <form className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border p-2"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
