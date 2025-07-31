import React, { useState } from 'react'

const SizeSelector = () => {
 const [selectedSize, setSelectedSize] = useState('M');
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="flex items-center gap-4">
      <span className="text-black font-secondary leading-5 tracking-[3%] text-[20px] ">Size:</span>
      <div className="flex items-center gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`
              w-8 h-8 rounded border font-medium text-sm text-black font-primary transition-all
              ${selectedSize === size 
                ? 'bg-primary text-secondary border-0' 
                : 'bg-white text-black border-gray-300 hover:border-gray-400'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
  
}

export default SizeSelector
