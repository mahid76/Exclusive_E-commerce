import Container from "../Layout/Container";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
	return (
		<>
			<Container>
				<div className="flex relative after:absolute after:top-0 after:left-[230px] after:w-[1px]  after:h-[384px] after:bg-[#D9D9D9] ">
					<BannerLeft />
					<BannerRight />
				</div>
			</Container>
		</>
	);
};

export default Banner;
