import Container from "../components/Layout/Container";
import ProductLeft from "../components/ProductPage/ProductLeft";
import ProductRight from "../components/ProductPage/ProductRight";

const Products = () => {
	return (
		<Container>
			<div className="flex  py-[100px]">
				<div className="w-[20%]">
					<ProductLeft />
				</div>
				<div className="w-[80%]">
					<ProductRight />
				</div>
			</div>
		</Container>
	);
};

export default Products;
