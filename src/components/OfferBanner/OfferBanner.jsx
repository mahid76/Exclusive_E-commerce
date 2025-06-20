import Countdown from "react-countdown";
import offerBanner from "../../assets/offerBanner.jpg";
import Container from "../Layout/Container";
import RenderTime from "./RenderTime";

const OfferBanner = () => {
	return (
		<Container>
			<div
				className=" bg-center bg-cover bg-no-repeat py-[69px] px-[56px] "
				style={{
					backgroundImage: `url(${offerBanner})`,
				}}
			>
				<p className="text-[#00FF66] font-primary font-semibold leading-5  ">
					Categories
				</p>
				<h3 className="font-secondary leading-[60px] tracking-[4%] font-semibold text-[48px] text-secondary my-8 max-w-[443px] ">
					Enhance Your Music Experience
				</h3>
				<div>
					<Countdown
						className="text-white"
						date={Date.now() + 518375000}
						renderer={RenderTime}
					/>
					
				</div>
        <div className="mt-10">
          <a href="#">
            <button className="rounded font-primary font-medium leading-6 text-secondary py-4 px-[48px] bg-[#00FF66]">
              Buy Now!
            </button>
          </a>
        </div>
			</div>
		</Container>
	);
};

export default OfferBanner;
