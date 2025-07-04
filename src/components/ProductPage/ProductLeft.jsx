import LeftTitle from "./LeftTitle";

const ProductLeft = () => {
	const productCategories = [
		{
			title: "Woman’s Fashion",
		},
		{
			title: "Men’s Fashion",
		},
		{
			title: "Electronics",
		},
		{
			title: "Home & Lifestyle",
		},
		{
			title: "Medicine",
		},
		{
			title: "Sports & Outdoor",
		},
		{
			title: "Baby’s & Toys",
		},
		{
			title: "Groceries & Pets",
		},
		{
			title: "Health & Beauty",
		},
	];
const colorPick = [
  {
    color: "bg-black",
    title: "Color 1",
  },
  {
    color: "bg-red-500",
    title: "Color 1",
  },
  {
    color: "bg-[#00FF38]",
    title: "Color 1",
  },
]

	return (
		<div>
			<div>
				<LeftTitle>Shop by Category</LeftTitle>
				<ul className="font-primary text-black flex flex-col gap-y-4">
					{productCategories.map((item) => (
						<li>{item.title}</li>
					))}
				</ul>
			</div>
      <div className="mt-10">
        <LeftTitle>
          Shop by Color
        </LeftTitle>
        <div className="flex flex-col gap-y-[18px]">
          {colorPick.map((items)=>(
            <div className="flex items-center gap-x-[10px]">
              <div className={`h-[11px] w-[11px] ${items.color} rounded-full  `}></div>
              <h3 className="font-primary leading-[30px] text-[#767676]  ">{items.title}</h3>
            </div>
          ))}
        </div>
      </div>
		</div>
	);
};

export default ProductLeft;
