import Container from "../Layout/Container";
import Logo from "../Logo/Logo";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";



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
		<>
			<Container>
				<div className="flex mt-[42px] items-center justify-between">
					<div className="w-[20%] logo">
						<Logo />
					</div>
					<div className="w-[40%]" >
            <ul className="flex md:flex-row flex-col gap-x-[48px] text-black font-primary leading-6 items-center ">
              {navItem.map((item)=>(
                <li>{item.title}</li>


              ))}
             </ul>
          </div>
					<div className="w-[40%]">
            <div className="w-[243px] relative  " >
              <input className="w-full outline-0 rounded py-[10px] px-5 bg-[#F5F5F5]  " type="search" placeholder="What are you looking for?" />
             <div  className="absolute  top-[11px] right-[16px]">
               <CiSearch className="text-[20px]" />
             </div>

            </div>
          </div>
				</div>
			</Container>
		</>
	);
};

export default Navbar;
