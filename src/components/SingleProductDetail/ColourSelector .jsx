import React, { useState } from 'react'

const ColourSelector  = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
	const handleClick1 = () => {
    setClicked1(true);
    setClicked2(false);
  };
  const handleClick2 = () => {
    setClicked1(false);
    setClicked2(true);
  };
  
  return (
    <div className="flex items-center gap-x-2 ml-6">
              <div
                className="w-[20px] h-[20px] rounded-full bg-[#A0BCE0]"
                onClick={handleClick1}
                style={{ border: clicked1 ? "3px solid #000000" : "none" }}
              ></div>
              <div
                className="w-[20px] h-[20px] rounded-full bg-[#E07575]"
                onClick={handleClick2}
                style={{ border: clicked2 ? "3px solid #000000" : "none" }}
              ></div>
            </div>
  )
}

export default ColourSelector 

