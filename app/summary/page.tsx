"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Summary() {
  const [data, setData] = useState({
    name: "",
    address: "",
    country: "",
    dob: "",
    file: "",
  });

  const router = useRouter();

  useEffect(() => {
    setData({
      name: localStorage.getItem("name") || "",
      address: localStorage.getItem("address") || "",
      country: localStorage.getItem("country") || "",
      dob: localStorage.getItem("dob") || "",
      file: localStorage.getItem("file") || "No file uploaded",
    });
  }, []);

  const handleEdit = (step: string) => {
    router.push(step); // Navigate to the desired step
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    // Add submission logic here

    router.push('/done');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Summary</h1>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {data.name}{" "}
          <button
            className="text-blue-500 underline ml-2"
            onClick={() => handleEdit("/step1")}
          >
            Edit
          </button>
        </p>
        <p>
          <strong>Address:</strong> {data.address}{" "}
          <button
            className="text-blue-500 underline ml-2"
            onClick={() => handleEdit("/step1")}
          >
            Edit
          </button>
        </p>
        <p>
          <strong>Country:</strong> {data.country}{" "}
          <button
            className="text-blue-500 underline ml-2"
            onClick={() => handleEdit("/step2")}
          >
            Edit
          </button>
        </p>
        <p>
          <strong>Date of Birth:</strong> {data.dob}{" "}
          <button
            className="text-blue-500 underline ml-2"
            onClick={() => handleEdit("/step2")}
          >
            Edit
          </button>
        </p>
        <p>
          <strong>Uploaded Document:</strong> {data.file}{" "}
          <button
            className="text-blue-500 underline ml-2"
            onClick={() => handleEdit("/step3")}
          >
            Edit
          </button>
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 mt-4"
      >
        Submit
      </button>
    </div>
  );
}
