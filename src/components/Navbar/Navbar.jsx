import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import Container from "../Layout/Container";
import Logo from "../Logo/Logo";

const Navbar = () => {
	const navItem = [
		{
			title: "Home",
		},
		{
			title: "Product",
		},
		{
			title: "Contact",
		},
		{
			title: "About",
		},
		{
			title: "Sign Up",
		},
	];
	return (
		<nav className="pt-[42px] pb-[14px] border-b border-b-[#D9D9D9]">
			<Container>
				<div className="flex  items-center justify-between">
					<div className=" logo">
						<a href="#">
							<Logo />
						</a>
					</div>
					<div className="">
						<ul className="flex md:flex-row flex-col gap-x-[48px] text-black font-primary leading-6 items-center ">
							{navItem.map((item) => (
								<a href="#"><li>{item.title}</li></a>
							))}
						</ul>
					</div>
					<div className=" flex items-center gap-x-6   ">
						<div className="w-[243px] relative  ">
							<input
								className="w-full outline-0 rounded py-[10px] pl-5 pr-9  bg-[#F5F5F5] placeholder:text-[12px] font-primary "
								type="search"
								placeholder="What are you looking for?"
							/>
							<div className="absolute  top-[11px] right-[16px]">
								<CiSearch className="text-[20px] " />
							</div>
						</div>
						<IoHeartOutline size={20} />
						<IoCartOutline size={20} />
						<GoPerson size={20} />
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
