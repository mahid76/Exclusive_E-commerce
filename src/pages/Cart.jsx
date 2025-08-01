import Container from "../components/Layout/Container";
import CartTotal from "../components/CartPage/CartTotal";
import CartDetails from "../components/CartPage/CartDetails";

const Cart = () => {
	return (
		<section className="py-[181px]">
			<Container>
				<div>
					<CartDetails />
					
					<CartTotal />
				</div>
			</Container>
		</section>
	);
};

export default Cart;
