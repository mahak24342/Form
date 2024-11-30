"use client";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  const goHome = () => {
    router.push("/"); // Redirect to the homepage
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-green-600">
        Thank You for Completing the KYC Form!
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-6">
        Your information has been successfully submitted. We will process it shortly.
      </p>
      <button
        onClick={goHome}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
}
