import { useState } from "react";
import { Badge } from "./badge";
import { categories } from "./categories";
const Shelf = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div className={`relative transition-max-h duration-300 ease-in-out ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <div className={`h-64 m-1 overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {categories.map(category => (<Badge text={category.text} emoji={category.emoji}/>))}
          
        </div>
        <div className="pt-6"></div>
        <button
          className="absolute bottom-0 left-[45%] bg-slate-300 text-white rounded-full text-lg z-10 transform transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
          style={{ bottom: isOpen ? '0' : '-1rem', transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Shelf;
