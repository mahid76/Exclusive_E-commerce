import Container from "../Layout/Container";
import SectionHead from "../SectionHead/SectionHead";
import SectionSubHead from "../SectionHead/SectionSubHead";
import exProducts01 from '../../assets/exProducts01.png'
import exProducts02 from '../../assets/exProducts02.png'
import exProducts03 from '../../assets/exProducts03.png'
import exProducts04 from '../../assets/exProducts04.png'

import CardIcons from "../CardIcons/CardIcons";
import { FaStar } from "react-icons/fa6";

  const ourItems = [
    {
      image: exProducts01,
      title: "Breed Dry Dog Food",
      price: "$100",
      prevPrice: "",
     
      review: "35",
      ratings: 5,
    },
    {
      image: exProducts02,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      prevPrice: "",
      review: "95",
      ratings: 4.5,
    },
    {
      image: exProducts03,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      prevPrice: "",
      review: "325",
      ratings: 4.5,
    },
    {
      image: exProducts04,
      title: "Curology Product Set",
      price: "$500",
      prevPrice: " ",
      review: "145",
      ratings: 5,
    },
    {
      image: exProducts01,
      title: "Breed Dry Dog Food",
      price: "$100",
      prevPrice: "",
     
      review: "35",
      ratings: 5,
    },
    {
      image: exProducts02,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      prevPrice: "",
      review: "95",
      ratings: 4.5,
    },
    {
      image: exProducts03,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      prevPrice: "",
      review: "325",
      ratings: 4.5,
    },
    {
      image: exProducts04,
      title: "Curology Product Set",
      price: "$500",
      prevPrice: " ",
      review: "145",
      ratings: 5,
    },
  ];

const ExplorerProduct = () => {
	return (
		<div className="pt-[161px] pb-[42px] ">
			<Container>
				<div>
					<SectionHead>Our Products</SectionHead>
					<SectionSubHead>Explore Our Products</SectionSubHead>
				</div>
        <div className="flex flex-wrap mt-15 gap-y-15 gap-x-[30px]">
					{ourItems.map((items) => (
						<div>
							<div className= " group  relative w-[270px] h-[250px]  bg-tertiary flex justify-center items-center py-[52px] px-[65px] rounded ">
								<img src={items.image} alt="" />
								<CardIcons className="absolute top-3 right-3" />
								<div className="opacity-0 group-hover:opacity-100 duration-200  w-full bg-black text-center py-2 text-white font-primary font-medium absolute bottom-0 left-0 rounded-b" >Add To Cart</div>
							</div>
							<div className="mt-4">
								<h3 className="font-primary font-medium leading-6 ">
									{items.title}
								</h3>
								<p className="font-primary py-2 font-medium leading-6 text-primary ">
									{items.price}
									<del className="text-black/50 ml-3">{items.prevPrice}</del>
								</p>
							<div className="flex gap-x-2">
									<div className="flex icons ">
									<FaStar size={20} color="#FFAD33" />
									<FaStar size={20} color="#FFAD33" /> 
									<FaStar size={20} color="#FFAD33" />
									<FaStar size={20} color="#FFAD33" />
									<FaStar size={20} color="#FFAD33" />
								</div>
								<p className="text-sm font-primary leading-[21px] font-semibold text-black/50">({items.review})</p>
							</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default ExplorerProduct;
