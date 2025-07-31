import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router";
import singlePage from "../../assets/singlePage.png";
import PrimaryButton from "../Button/PrimaryButton";
import Container from "../Layout/Container";

import ProductRating from "../ProductPage/ProductRating";
import ColourSelector from "./ColourSelector ";
import QuantityIncrease from "./QuantityIncrease";
import SizeSelector from "./SizeSelector";

const SingleProductDetail = () => {
	const [isLiked, setIsLiked] = useState(true);
	const { id } = useParams();
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProductData(data.products));
	}, []);

	const singleProduct = productData.find((product) => product.id == id);

	return (
		<div className="py-30">
			<Container>
				<div className="grid grid-cols-12 ">
					<div className=" col-span-2  flex flex-col  ">
						{singleProduct?.images.map((img) => (
							<div className="px-6 py-3 rounded bg-[#F5F5F5] flex justify-center items-center ">
								<img src={img} className="w-[122px]" alt="" />
							</div>
						))}
					</div>
					<div className="bg-[#F5F5F5] col-span-5 px-[27px] py-[130px] ml-[30px] flex justify-center items-center rounded ">
						<img src={singlePage} className="w-[446px]" alt="" />
					</div>
					<div className="ml-[70px] col-span-5 ">
						<div className="text">
							<h3 className="text-black font-secondary font-semibold text-2xl leading-6 tracking-[3%]">
								{singleProduct?.title}
							</h3>
							<div className="my-4 flex gap-2">
								<div>
									{singleProduct && (
										<ProductRating rating={singleProduct.rating} />
									)}
								</div>
								<p className="font-primary text-[14px] leading-[21px] text-[#808080] ">
									({singleProduct?.reviews.length} Reviews){" "}
									<span className="text-[#808080] mx-4 ">|</span>{" "}
									<span className="text-[#00FF66]">In Stock</span>
								</p>
							</div>
							<h2 className="font-secondary text-2xl tracking-[3%] leading-6 text-black mb-6 ">
								${singleProduct?.price}
							</h2>
							<p className=" max-w-[373px] text-black font-primary text-sm leading-[21px]  ">
								{singleProduct?.description}
							</p>
							<div className="bg-[#808080] w-full h-[1px] my-6"></div>
						</div>
						<div className="flex items-center">
							<h3 className="font-secondary text-[20px] leading-5 text-black ">
								Colours:
							</h3>
							<div>
								<ColourSelector />
							</div>
						</div>
						<div className="my-6">
							<SizeSelector />
						</div>
						<div className="flex gap-4 items-center">
							<div>
								<QuantityIncrease />
							</div>
							<div>
								<PrimaryButton className="py-[10px]">Buy Now</PrimaryButton>
							</div>
							<div
								onClick={() => setIsLiked(!isLiked)}
								className="border border-gray-300 py-[11px] px-[10px] rounded cursor-pointer "
							>
								{isLiked ? <FaRegHeart  /> : <FaHeart className="text-primary" />}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default SingleProductDetail;
