import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";
import ExplorerProduct from "../ExplorerProduct/ExplorerProduct";
import NewArrival from "../NewArrival/NewArrival";
import OfferBanner from "../OfferBanner/OfferBanner";
import Services from "../Services/Services";

const Home = () => {
	return (
		<>
			<Banner />
			<Category />
			<BestSelling />
			<OfferBanner />
			<ExplorerProduct />
			<NewArrival />
			<Services />
		</>
	);
};

export default Home;
