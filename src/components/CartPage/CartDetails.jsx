import React from 'react'
import cartImg from "../../assets/singlePage.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const CartDetails = () => {
  return (
    <div>
      <div className="flex py-6 px-10  shadow-[0_1px_13px_rgba(0,0,0,0.05)] ">
						<div className="w-1/4">Product</div>
						<div className="w-1/4 text-center">Price</div>
						<div className="w-1/4 text-center">Quantity</div>
						<div className="w-1/4 text-right">Subtotal</div>
					</div>
					<div className="mt-10 flex py-6 px-10 items-center shadow-[0_1px_13px_rgba(0,0,0,0.05)] ">
						<div className="w-1/4 flex items-center gap-5">
							<img className="w-[50px] " src={cartImg} alt="cart01" />
							<p className=" text-black font-primary leading-6  ">
								LCD Monitor{" "}
							</p>
						</div>
						<div className="w-1/4 text-center">
							<p className="text-black font-primary leading-6 ">$650</p>
						</div>
						<div className="w-1/4 text-center">
							<div className=" w-[73px] py-[10px]  inline-block border border-gray-300 rounded ">
								<div className="flex items-center justify-center gap-3">
									<p>5</p>
									<div>
										<div className=" cursor-pointer hover:bg-gray-300">
											<FaCaretUp size={10} />
										</div>
										<div className=" cursor-pointer hover:bg-gray-300 mt-1">
											<FaCaretDown size={10} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-1/4 text-right">
							<p className="text-black  font-primary leading-6 ">$650</p>
						</div>
					</div>
					<div className="mt-10 flex py-6 px-10 items-center shadow-[0_1px_13px_rgba(0,0,0,0.05)] ">
						<div className="w-1/4 flex items-center gap-5">
							<img className="w-[50px] " src={cartImg} alt="cart01" />
							<p className=" text-black font-primary leading-6  ">
								LCD Monitor{" "}
							</p>
						</div>
						<div className="w-1/4 text-center">
							<p className="text-black font-primary leading-6 ">$650</p>
						</div>
						<div className="w-1/4 text-center">
							<div className=" w-[73px] py-[10px]  inline-block border border-gray-300 rounded ">
								<div className="flex items-center justify-center gap-3">
									<p>5</p>
									<div>
										<div className=" cursor-pointer hover:bg-gray-300">
											<FaCaretUp size={10} />
										</div>
										<div className=" cursor-pointer hover:bg-gray-300 mt-1">
											<FaCaretDown size={10} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-1/4 text-right">
							<p className="text-black  font-primary leading-6 ">$650</p>
						</div>
					</div>
    </div>
  )
}

export default CartDetails
