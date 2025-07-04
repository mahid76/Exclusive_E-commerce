const CameraSvg = () => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="56"
				height="56"
				fill="none"
				className="group"
			>
				<g
					stroke="#000"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					clip-path="url(#a)"
				>
					<path className="group-hover:stroke-white" d="M11.667 16.333H14a4.667 4.667 0 0 0 4.667-4.666A2.333 2.333 0 0 1 21 9.333h14a2.334 2.334 0 0 1 2.333 2.334A4.667 4.667 0 0 0 42 16.333h2.333A4.667 4.667 0 0 1 49 21v21a4.667 4.667 0 0 1-4.667 4.667H11.667A4.667 4.667 0 0 1 7 42V21a4.667 4.667 0 0 1 4.667-4.667" />
					<path className="group-hover:stroke-white" d="M28 37.333a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h56v56H0z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export default CameraSvg;
