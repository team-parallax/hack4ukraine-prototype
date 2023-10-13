import { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border">
      <div className="p-4">
        <h3>Accordion Card 1</h3>
      </div>

      <div
        className={`flex justify-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="p-4">
          <p>Card 1 content</p>
        </div>
      )}

      <div className="p-4">
        <h3>Accordion Card 2</h3>
      </div>
    </div>
  );
}
