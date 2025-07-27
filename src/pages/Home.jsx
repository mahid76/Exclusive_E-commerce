import BestSelling from "../components/BestSelling/BestSelling";
import Category from "../components/Category/Category";
import Banner from "../components/Banner/Banner";
import ExplorerProduct from "../components/ExplorerProduct/ExplorerProduct";
import NewArrival from "../components/NewArrival/NewArrival";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import Services from "../components/Services/Services";

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
