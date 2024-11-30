"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Step1() {
  const router = useRouter();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [address, setAddress] = useState(localStorage.getItem("address") || "");

  const handleNext = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    setName("");
    setAddress("");
    router.push("/step2");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Step 1: Personal Details</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
