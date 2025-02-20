import React from 'react';

// Define the props type
interface ContentProps {
  className?: string; // Optional prop
}

// Component definition
export default function Content({ className }: ContentProps) {
  return (
    <div
      className={`${className} h-[80%] text-5xl text-red-700 flex items-center justify-center`}
    >
      Hello, World! {/* Replace with dynamic content if needed */}
    </div>
  );
}
