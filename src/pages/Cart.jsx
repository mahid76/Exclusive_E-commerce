import CartButton from "../components/CartPage/CartButton";
import CartDetails from "../components/CartPage/CartDetails";
import CartTotal from "../components/CartPage/CartTotal";
import Container from "../components/Layout/Container";

const Cart = () => {
	return (
		<section className="py-[181px]">
			<Container>
				<div>
					<CartDetails />
					<CartButton />
					<CartTotal />
				</div>
			</Container>
		</section>
	);
};

export default Cart;
