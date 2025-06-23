import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import Container from "../Layout/Container";
import Logo from "../Logo/Logo";
import { Link } from "react-router";

const Navbar = () => {
	const navItem = [
		{
			title: "Home",
			linkTo: "/"
		},
		{
			title: "Product",
			linkTo: "Products"
		},
		{
			title: "Contact",
			linkTo: "Contact"
		},
		{
			title: "About",
			linkTo: "About"
		},
		{
			title: "Sign Up",
			linkTo: "signUp"
		},
	];
	return (
		<nav className="pt-[42px] pb-[14px] border-b border-b-[#D9D9D9]">
			<Container>
				<div className="flex  items-center justify-between">
					<div className=" logo">
						<Link to={"/"} >
							<Logo />
						</Link>
					</div>
					<div className="">
						<ul className="flex md:flex-row flex-col gap-x-[48px] text-black font-primary leading-6 items-center ">
							{navItem.map((item) => (
								<Link to={item.linkTo} >
									<li>{item.title}</li>
								</Link>
							))}
						</ul>
					</div>
					<div className=" flex items-center gap-x-5   ">
						<div className="max-w-[243px] relative  ">
							<input
								className="w-full outline-0 rounded py-[10px] pl-5 pr-9  bg-[#F5F5F5] placeholder:text-[12px] font-primary "
								type="search"
								placeholder="What are you looking for?"
							/>
							<div className="absolute  top-[11px] right-[16px]">
								<a href="#">
									{" "}
									<CiSearch className="text-[20px] " />
								</a>
							</div>
						</div>
						<a href="#">
							<IoHeartOutline size={20} />
						</a>
						<a href="#">
							{" "}
							<IoCartOutline size={20} />
						</a>
						<a href="#">
							<GoPerson size={20} />
						</a>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
