import bestSelling01 from "../../assets/bestSelling01.png";
import bestSelling02 from "../../assets/bestSelling02.png";
import bestSelling03 from "../../assets/bestSelling03.png";
import bestSelling04 from "../../assets/bestSelling04.png";
import PrimaryButton from "../Button/PrimaryButton";
import Container from "../Layout/Container";
import SectionHead from "../SectionHead/SectionHead";
import SectionSubHead from "../SectionHead/SectionSubHead";
import { FaStar } from "react-icons/fa6";
import { BsStarHalf } from "react-icons/bs";

const BestSelling = () => {
	const bestItems = [
		{
			image: bestSelling01,
			title: "The north coat",
			price: "$260",
			prevPrice: "$360",
			review: "65,",
      ratings: 5,
		},
		{
			image: bestSelling02,
			title: "Gucci duffle bag",
			price: "$960",
			prevPrice: "$1160",
			review: "65,",
      ratings: 4.5,
		},
		{
			image: bestSelling03,
			title: "RGB liquid CPU Cooler",
			price: "$160",
			prevPrice: "$170",
			review: "65,",
      ratings: 4.5,
		},
		{
			image: bestSelling04,
			title: "Small BookSelf",
			price: "$360",
			prevPrice: " ",
			review: "65,",
      ratings: 5,
		},
	];

	return (
		<div className="pt-[27px] pb-[122px]  ">
			<Container>
				<SectionHead>This Month</SectionHead>
				<div className="flex items-center justify-between">
					
						<SectionSubHead>Best Selling Products</SectionSubHead>
						<PrimaryButton>View All</PrimaryButton>
					
				</div>
				<div className="flex flex-wrap mt-15 gap-x-[30px]">
					{bestItems.map((items) => (
						<div>
							<div className="w-[270px] h-[250px]  bg-tertiary flex justify-center items-center py-[52px] px-[65px]  ">
								<img src={items.image} alt="" />
							</div>
							<div className="mt-4">
								<h3 className="font-primary font-medium leading-6 ">
									{items.title}
								</h3>
								<p className="font-primary py-2 font-medium leading-6 text-primary ">
									{items.price}
									<del className="text-black/50 ml-3">{items.prevPrice}</del>
								</p>
                <div className="flex icons ">
                    <FaStar size={20} color="#FFAD33" />
                    <FaStar size={20} color="#FFAD33" />
                    <FaStar size={20} color="#FFAD33" />
                    <FaStar size={20} color="#FFAD33" />
                    <FaStar size={20} color="#FFAD33" />
                </div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default BestSelling;
