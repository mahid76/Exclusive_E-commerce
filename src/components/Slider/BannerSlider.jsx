import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import banner01 from "../../assets/banner01.jpg";
import banner02 from "../../assets/banner02.jpg";
import banner03 from "../../assets/banner03.jpg";
import banner04 from "../../assets/banner04.jpg";
import banner05 from "../../assets/banner05.jpg";

const BannerSlider = () => {
	const bannerSliderImg = [
		{
			Image: banner01,
		},
		{
			Image: banner02,
		},
		{
			Image: banner03,
		},
		{
			Image: banner04,
		},
		{
			Image: banner05,
		},
	];
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "none", background: "red" }}
				onClick={onClick}
			/>
		);
	}
	const settings = {
		customPaging: () => {
			return (
				<a>
					<div className="w-3 h-3 rounded-full bg-[#7D8184] "></div>
				</a>
			);
		},
		dots: true,
		dotsClass: " custom_slider",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<div className=" text-right relative ">
			<Slider {...settings} className="custom-slider">
				{bannerSliderImg.map((slide) => (
					<div key={slide.Image}>
						<img className="w-full" src={slide.Image} alt="" />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default BannerSlider;
