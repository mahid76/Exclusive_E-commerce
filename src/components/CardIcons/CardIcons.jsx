import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const CardIcons = ({ className }) => {
	return (
		<div className={className}>
			<div className="py-[10px] px-[8px] bg-white rounded-full ">
				<FaRegHeart size={20} color="#000000" />
			</div>
			<div className="mt-2 py-[10px] px-[8px] bg-white rounded-full ">
			
				<FiEye size={20} color="#000000" />
			</div>
		</div>
	);
};

export default CardIcons;
