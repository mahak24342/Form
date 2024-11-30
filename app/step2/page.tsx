"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Step2() {
  const router = useRouter();
  const [country, setCountry] = useState(localStorage.getItem("country") || "");
  const [dob, setDob] = useState(localStorage.getItem("dob") || "");

  const handleNext = () => {
    localStorage.setItem("country", country);
    localStorage.setItem("dob", dob);
    setDob("");
    setCountry("");
    router.push("/step3");
  };

  const handleBack = () => {
    router.push("/step1");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Step 2: Additional Information</h1>
      <form className="space-y-4">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border p-2"
        >
          <option value="" disabled>Select your country</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
        </select>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
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
