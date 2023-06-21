import React from "react";

export default function PFrame({ children }: {children:React.ReactNode}) {
  return (
    <div>
      <div className="max-h-fit max-w-fit bg-slate-300 bg-opacity-40 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
