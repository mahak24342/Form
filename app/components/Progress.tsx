"use client"

export const Progress = ({ step }: { step: number }) => (
    <div className="flex justify-between w-full mb-4">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`h-2 w-1/3 ${step >= s ? "bg-blue-500" : "bg-gray-300"}`}
        ></div>
      ))}
    </div>
  );
  