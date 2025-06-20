import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import AlienSvg from "../Svg/AlienSvg";
import CameraSvg from "../Svg/CameraSvg";
import ComputersSvg from "../Svg/ComputersSvg";
import GamingSvg from "../Svg/GamingSvg";
import HeadPhonesSvg from "../Svg/HeadPhonesSvg";
import PhonesSvg from "../Svg/PhonesSvg";
import SmartWatchSvg from "../Svg/SmartWatchSvg";

function SampleNextArrow(props) {
	const { style, onClick } = props;
	return (
		<div
			className="absolute  top-[-60px] transform translate-y-[-100%] right-[54px]"
			style={{
				...style,
				display: "flex",
				background: "#F5F5F5",
				padding: 11,
				justifyContent: "center",
				alignItems: "center",
				fontSize: "16px",
				color: "black",
				borderRadius: "50%",
				position: "absolute",
				zIndex: "1",
			}}
			onClick={onClick}
		>
			<a href="#">
				<FaArrowLeft />
			</a>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { style, onClick } = props;
	return (
		<div
			className="absolute  top-[-60px] transform translate-y-[-100%] right-0"
			style={{
				...style,
				display: "flex",
				background: "#F5F5F5",
				padding: 11,
				justifyContent: "center",
				alignItems: "center",
				fontSize: "16px",
				color: "black",
				borderRadius: "50%",
				position: "absolute",
				zIndex: "1",
			}}
			onClick={onClick}
		>
			<a href="#">
				<FaArrowRight />
			</a>
		</div>
	);
}
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
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="slider-container mt-15 ">
			<Slider {...settings}>
				{categoryItems.map((item, index) => (
					<div key={index} className="w-full px-2 ">
						<div className="border border-black/30 pt-[30px] pb-6 rounded flex flex-col   items-center ">
							<div className="flex  items-center justify-center">
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
