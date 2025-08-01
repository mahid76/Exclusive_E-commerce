import PrimaryButton from "../Button/PrimaryButton";

const CartTotal = () => {
	return (
		<div className="mt-20 flex justify-between">
			<div>
				<div className="flex gap-4">
					<input
						className="max-w-[300px] px-6 py-4 border border-black/50  "
						type="text"
						placeholder="Coupon Code"
					/>
					<PrimaryButton>Apply Coupon</PrimaryButton>
				</div>
			</div>
			<div className="w-[470px] border border-black/50 py-8 px-6 rounded ">
				<h3 className="font-primary text-[20px] leading-[28px] text-black font-medium  ">
					Cart Total
				</h3>
				<div>
					<div>
						<div className="flex justify-between mt-6">
						<p className="font-primary text-[16px] leading-[28px] text-black">
							Subtotal:
						</p>
						<p className="font-primary text-[16px] leading-[28px] text-black">
							$1750
						</p>
					</div>
					<div className="w-full mt-4 bg-black/50 h-[1px] block"></div>
					</div>
					<div>
						<div className="flex justify-between mt-6">
							<p className="font-primary text-[16px] leading-[28px] text-black">
								Shipping:
							</p>
							<p className="font-primary text-[16px] leading-[28px] text-black">
								Free
							</p>
						</div>
						<div className="w-full mt-4 bg-black/50 h-[1px] block"></div>
					</div>
					<div>
						<div className="flex justify-between mt-6">
							<p className="font-primary text-[16px] leading-[28px] text-black">
								Total:
							</p>
							<p className="font-primary text-[16px] leading-[28px] text-black">
								$1750
							</p>
						</div>
					</div>
					<div className="cursor-pointer text-center mt-4">
						<PrimaryButton>Procees to checkout</PrimaryButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
