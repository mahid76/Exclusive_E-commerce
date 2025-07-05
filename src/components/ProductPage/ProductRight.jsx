import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import CardIcons from "../CardIcons/CardIcons";
import ProductRating from "./ProductRating";

const ProductRight = () => {
	const [productData, setProductData] = useState([]);
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProductData(data.products));
	}, []);

	return (
		<div>
			<div className="flex flex-wrap justify-between  gap-y-15 gap-x-[30px]">
				{productData.map((items) => (
					<div>
						<div className=" group  relative w-[270px] h-[250px]  bg-tertiary flex justify-center items-center py-[52px] px-[65px] rounded ">
							<img src={items.thumbnail} alt="" />
							<CardIcons className="absolute top-3 right-3" />
							<div className="opacity-0 group-hover:opacity-100 duration-200  w-full bg-black text-center py-2 text-white font-primary font-medium absolute bottom-0 left-0 rounded-b">
								Add To Cart
							</div>
						</div>
						<div className="mt-4">
							<h3 className="font-primary font-medium leading-6 ">
								{items.title}
							</h3>
							<p className="font-primary py-2 font-medium leading-6 text-primary ">
								${items.price}
								<del className="text-black/50 ml-3">
									{items.discountPercentage}
								</del>
							</p>
							<div className="flex gap-x-2">
								<div className="flex icons ">
									<ProductRating rating={items.rating} />
								</div>
								<p className="text-sm font-primary leading-[21px] font-semibold text-black/50">
									({items.review})
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductRight;
