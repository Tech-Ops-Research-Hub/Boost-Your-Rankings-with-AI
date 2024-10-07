
function Logo(props) {
	let src = props.imgSrc;

	return (
		<div className="basis-1/3 md:basis-1/5 flex md:justify-center h-[6rem] border rounded-xl border-[#FFFFFF26]">
			<img className="w-[9rem] object-contain" src={src} alt="" />
		</div>
	)
};

// w-[14rem]

export default Logo;