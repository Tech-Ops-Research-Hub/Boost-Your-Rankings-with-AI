

function Bento() {
  return (
	// Bento section
	<div className="w-full bg-black pt-10 z-30">
		{/* Title */}
		<h2 className="text-center text-2xl md:pb-[2rem] md:px-[24rem] px-20">Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h2>
		
		{/* Sectoin 1 */}
		<div className="md:flex px-12 pt-10 gap-2">
			<div className="md:h-[20rem] md:basis-1/3 mb-10 rounded-xl border border-[#FFFFFF26]">
				<img className="w-[16rem] md:w-[13rem]" src="src/assets/images/holo-cylinder.png" alt="holo cylinder" />
				<p className="px-8">SEO goal setting</p>
				<p className="pb-5 px-8 font-light text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
			</div>
			
			{/* Sectoin 2 */}
			<div className="md:basis-2/3 rounded-xl">
				<div className="h-[20rem] mix-blend-lighten bg-gradient-to-t from-purple-900 to-transparent rounded-xl">
				</div>
				<img className="bg-transparent mt-[-20rem] md:w-full md:h-[20rem] object-cover object-left-top" src="src/assets/images/bento-img.png" alt="bento image" />
				<div className="md:mt-[-8rem] mt-[-8rem] p-8">
					<p className="">User-friendly dashboard</p>
					<p className="font-light text-gray-400 md:w-1/3">Perform complex SEO audits and optimizations with a single click.</p>
				</div>
			</div>
		</div>

		{/* Sectoin 3 */}
		<div className="md:mt-0 mt-10 md:flex px-12 md:pt-0 pt-10 gap-2">
			<div className="md:basis-2/3 rounded-xl">
				<div className="h-[20rem] mix-blend-lighten bg-gradient-to-t from-purple-900 to-transparent rounded-xl">
				</div>
				<img className="bg-transparent mt-[-20rem] md:w-full md:h-[20rem] object-cover object-left-top" src="src/assets/images/Analytics_2x@3x.png" alt="bento image" />
				<div className="md:mt-[-8rem] mt-[-2rem] p-8">
					<p className="">Visual reports</p>
					<p className="font-light text-gray-400 md:w-1/3">Visual insights into your site’s performance.</p>
				</div>
			</div>

			{/* Sectoin 4 */}
			<div className="md:mt-0 mt-20 md:h-[20rem] md:basis-1/3 mb-10 rounded-xl border border-[#FFFFFF26]">
				<img className="w-[16rem] md:w-[13rem]" src="src/assets/images/holo-conus.png" alt="holo cylinder" />
				<p className="px-8">Smart Keyword Generator</p>
				<p className="pb-5 px-8 font-light text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
			</div>
		</div>
	</div>
  )
}

export default Bento