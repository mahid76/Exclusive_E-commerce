const PrimaryButton = ({ children }) => {
	return (
		<div className="bg-primary inline-block py-4 px-[48px] rounded ">
			<p className="font-primary font-medium text-base text-secondary">
				{children}
			</p>
		</div>
	);
};

export default PrimaryButton;
