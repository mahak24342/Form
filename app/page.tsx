"use client"
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const startKYC = () => {
    router.push("/step1");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to KYC Form</h1>
      <p className="text-lg text-gray-600 mb-8">
        Complete your KYC in a few simple steps.
      </p>
      <button
        onClick={startKYC}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Start KYC
      </button>
    </div>
  );
}