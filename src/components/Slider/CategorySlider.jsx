import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import AlienSvg from "../Svg/AlienSvg";
import CameraSvg from "../Svg/CameraSvg";
import ComputersSvg from "../Svg/ComputersSvg";
import GamingSvg from "../Svg/GamingSvg";
import HeadPhonesSvg from "../Svg/HeadPhonesSvg";
import PhonesSvg from "../Svg/PhonesSvg";
import SmartWatchSvg from "../Svg/SmartWatchSvg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const CategorySlider = () => {
	const categoryItems = [
		{
			image: <PhonesSvg />,
			title: "Phones",
		},
		{
			image: <ComputersSvg />,
			title: "Computers",
		},
		{
			image: <SmartWatchSvg />,
			title: "SmartWatch",
		},
		{
			image: <CameraSvg />,
			title: "Camera",
		},
		{
			image: <HeadPhonesSvg />,
			title: "HeadPhones",
		},
		{
			image: <GamingSvg />,
			title: "Gaming",
		},
		{
			image: <AlienSvg />,
			title: "Alien",
		},
	];
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "red" }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
	}
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <FaArrowRight className="bg-[#F5F5F5] " />,
		prevArrow: <FaArrowLeft className=" " />,
	};
	return (
		<div className="slider-container mt-15 ">
			<Slider {...settings}>
				{categoryItems.map((item, index) => (
					<div key={index} className="w-full px-3">
						<div className="border border-black/30 pt-[30px] pb-6 rounded flex flex-col items-center ">
							<div className="flex items-center justify-center">
								{item.image}
							</div>
							<p className="font-primary leading-[22px] mt-[16px] text-center">
								{item.title}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CategorySlider;
