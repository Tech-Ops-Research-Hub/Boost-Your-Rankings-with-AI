import Logo from './Logo';

function Hero() {
	return (
		<div className="w-full flex items-center flex-col">
			<div className="w-[18rem] flex justify-center text-base mt-[5.6rem] rounded-[3rem] py-2 px-2 border border-[#ffffff26]  bg-black">
				<p className="text-black font-bold text-[0.6rem] px-[5px] tracking-widest align-middle rounded-[0.8rem] bg-primary">NEW</p>
				<p className="px-1 text-primary">Latest integration just arrived</p>
			</div>
			<div className="flex flex-col items-center z-20">
				<h1 className="text-[4rem] md:text-[5rem] font-medium leading-[5rem] pb-2 mt-4 bg-gradient-to-b from-white to-[#B372CF] text-transparent bg-clip-text text-center">
					Boost your <br />rankings with AI.
				</h1>	
				<p className="text-white text-center px-7 md:text-lg font-normal tracking-wide">
					Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
				</p>
				<div className="border  border-[#FFFFFF1A] rounded-lg p-2 mt-5">
					<button className="bg-white text-black py-2 px-4 rounded-lg text-base">Start for free</button>
				</div>
			</div>

			<div className="w-[20rem] mt-10 h-[10rem] md:w-[51rem] md:h-[51rem] bg-[#602A9A] flex justify-center items-center rounded-full blur-3xl md:mt-[-14rem] z-0">
				<div className="hidden bg-[#622A9A] md:h-[35rem] md:w-[35rem] rounded-full blur-3xl"></div>
			</div>

			<div className="w-full mt-[-11rem] md:mt-[-36rem] md:h-[51rem] bg-[#602A9A] blur-2xl z-30"></div>
			<div className="mx-6 md:mt-[-50rem] rounded-xl p-2 bg-gradient-to-l from-[#0D0718] via-[#0F081B00] to-[#0B0614] z-30">
				<img className="" src="../src/assets/images/hero-img.png" alt="hero image" />
			</div>
			<div className='w-full  h-[32rem] md:mt-[-32rem] bg-gradient-to-b from-transparent via-black to-black z-30'></div>

			<div className="companies w-full bg-black flex flex-col mt-[-20rem] text-gray-400 font-light z-30">
				<p className="text-center">Trusted by the world’s most innovative teams</p>
				<div className="logos flex flex-row justify-center flex-wrap gap-2 mt-8 pb-14">
					<Logo imgSrc={'src/assets/images/acme.png'}/>
					<Logo imgSrc={'src/assets/images/echo-valley.png'}/>
					<Logo imgSrc={'src/assets/images/quantum.png'}/>
					<Logo imgSrc={'src/assets/images/pulsew.png'}/>
					<Logo imgSrc={'src/assets/images/outside.png'}/>
					<Logo imgSrc={'src/assets/images/apex.png'}/>
					<Logo imgSrc={'src/assets/images/celestial.png'}/>
					<Logo imgSrc={'src/assets/images/twice.png'}/>
				</div>
			</div>
		</div>
	)
};

// background: linear-gradient(270deg, #0D0718 0%, rgba(15, 8, 27, 0) 47.85%, #0B0614 100%);
export default Hero;

