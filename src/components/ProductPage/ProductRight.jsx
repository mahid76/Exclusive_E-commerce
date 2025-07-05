import { useEffect, useState } from "react";
import CardIcons from "../CardIcons/CardIcons";
import ProductRating from "./ProductRating";

const ProductRight = () => {
	const [productData, setProductData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProductData(data.products));
	}, []);

	const totalProducts = productData.length;
	const productPerPage = 6;
	const totalPages = Math.ceil(totalProducts / productPerPage);
	const indexOfLastProducts = currentPage * productPerPage;
	const indexOfFirstProducts = indexOfLastProducts - productPerPage;
	const currentProduct = productData.slice(
		indexOfFirstProducts,
		indexOfLastProducts
	);

	const data = [...Array(totalPages).keys()].map((index) => index + 1);

	return (
		<div>
			<div className="flex flex-wrap   gap-y-15 gap-x-[30px]">
				{currentProduct.map((items) => (
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
							<div className="flex items-center gap-x-2">
								<div className="flex icons ">
									<ProductRating rating={items.rating} />
								</div>
								<p className="text-sm font-primary leading-[21px] font-semibold text-black/50">
									({items.reviews.length})
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex mt-10 gap-x-[10px] ">
				{data.map((items) => (
					<div
						onClick={() => setCurrentPage(items)}
						className={`cursor-pointer py-[2px] px-[25px] font-primary leading-6    rounded ${
							currentPage === items
								? "bg-gray-300 text-black"
								: "bg-black text-white"
						} `}
					>
						{items}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductRight;
