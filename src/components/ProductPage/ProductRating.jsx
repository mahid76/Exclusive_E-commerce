import { FaRegStar } from "react-icons/fa";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const ProductRating = ({ rating }) => {
	const fullRating = Math.floor(rating);
	const halfRating = rating % 1 >= 0.5;
	const emptyRating = 5 - fullRating - (halfRating ? 1 : 0);

	return (
		<div className="flex items-center ">
			{[...Array(fullRating)].map(() => (
				<FaStar size={20} color="#FFAD33" />
			))}
			{halfRating && <FaStarHalfStroke size={20} color="#FFAD33" />}
			{[...Array(emptyRating)].map(() => (
				<FaRegStar size={20} color="#FFAD33" />
			))}
		</div>
	);
};

export default ProductRating;
