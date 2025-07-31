import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

const QuantityIncrease = () => {
	const [quantityIncrease, setquantityIncrease] = useState(0);

	return (
		<div className="w-[160px] h-[44px] bg-white rounded border border-gray-300 flex justify-between overflow-hidden ">
			<div
				onClick={() => {
					if (quantityIncrease > 0) {
						setquantityIncrease(quantityIncrease - 1);
					}
				}}
				className={` text-center border-r px-3 flex justify-center group hover:bg-primary hover:border-primary items-center py-[22px] border-gray-300 ${
					quantityIncrease === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
				}`}
			>
				<GoDash className="group-hover:text-white" />
			</div>
			<div className="flex justify-center items-center">{quantityIncrease}</div>
			<div
				onClick={() => {
					setquantityIncrease(quantityIncrease + 1);
				}}
				className="text-center border-l px-3 cursor-pointer flex justify-center items-center py-[22px] group hover:bg-primary hover:border-primary border-gray-300"
			>
				<GoPlus className="group-hover:text-white" />
			</div>
		</div>
	);
};

export default QuantityIncrease;
