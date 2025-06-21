const RenderTime = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="flex gap-x-6 ">
			<div className="flex flex-col bg-white py-[14px] px-[17px] rounded-full  text-center">
        <p className="text-black font-primary font-semibold leading-5  ">
				{days} 
        <p className="text-black font-primary text-[11px] leading-[18px]">Days</p>
			</p>
      </div>
			<div className="flex flex-col bg-white  text-center py-[14px] px-[15px] rounded-full ">
        <p className="text-black font-primary font-semibold leading-5  ">
				{hours}
        <p className="text-black font-primary text-[11px] leading-[18px]">Hours</p>
			</p>
      </div>
			<div className="flex flex-col bg-white  text-center py-[14px] px-[10px] rounded-full ">
        <p className="text-black font-primary font-semibold leading-5  ">
				{minutes}
        <p className="text-black font-primary text-[11px] leading-[18px]">Minutes</p>
			</p>
      </div>
			<div className="flex flex-col bg-white  text-center py-[14px] px-[7px] rounded-full ">
        <p className="text-black font-primary font-semibold leading-5  ">
				{seconds}
        <p className="text-black font-primary text-[11px] leading-[18px]">Seconds</p>
			</p>
      </div>
		</div>
	);
};

export default RenderTime;
