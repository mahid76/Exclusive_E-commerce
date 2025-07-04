import Container from "../Layout/Container";
import ProductLeft from "../ProductPage/ProductLeft";
import ProductRight from "../ProductPage/ProductRight";

const Products = () => {
	return (
		<Container>
			<div className="flex py-[100px]" >
				<div className="w-[238px]">
					<ProductLeft />
				</div>
				<ProductRight />
			</div>
		</Container>
	);
};

export default Products;
