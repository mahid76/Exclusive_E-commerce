import React, { useEffect, useMemo, useState } from 'react'
import { Link } from "react-router";
import CardIcons from "../CardIcons/CardIcons";
import ProductRating from "../ProductPage/ProductRating";


const RandomProduct = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProductData(data.products));
    }, []);
  	const randomFour = useMemo(() => {
		const shuffled = [...productData].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 4);
	}, [productData]);
  return (
   <div className="flex flex-wrap   gap-y-14  gap-x-[30px]">
						{randomFour.map((items) => (
							<Link to={`/products/${items.id}`}>
								<div className=" group  relative w-[270px] h-[250px]  bg-tertiary flex justify-center items-center py-[52px] px-[65px] rounded ">
									<img src={items.thumbnail} alt="" />
									<CardIcons className="absolute top-3 right-3" />
									<div className="opacity-0 group-hover:opacity-100 duration-200  w-full bg-black text-center py-2 text-white font-primary font-medium absolute bottom-0 left-0 rounded-b">
										Add To Cart
									</div>
								</div>
								<div className="mt-4">
									<h3 className="font-primary font-medium leading-6 ">
										{items.title}
									</h3>
									<p className="font-primary py-2 font-medium leading-6 text-primary ">
										${items.price}
										<del className="text-black/50 ml-3">
											{items.discountPercentage}
										</del>
									</p>
									<div className="flex items-center gap-x-2">
										<div className="flex icons ">
											<ProductRating rating={items.rating} />
										</div>
										<p className="text-sm font-primary leading-[21px] font-semibold text-black/50">
											({items.reviews.length})
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
  )
}

export default RandomProduct
