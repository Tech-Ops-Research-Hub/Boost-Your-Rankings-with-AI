import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { BsStars, BsListCheck } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { PiMagicWand, PiFiles } from "react-icons/pi";
import { LuMousePointerClick } from "react-icons/lu";

function Features() {
  return (
	// Features section
	<div className="flex flex-col w-full px-12 py-14 bg-gradient-to-r from-[#190D2E] to-[#020103]">
		{/* // Title */}
		<div className="w-full">
			<h2 className="text-5xl w-80 pb-7">Elevate your SEO efforts.</h2>
		</div>
		{/* Features list */}
		<div className="">
			<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-16">
				<div>
					<div className="flex place-items-center">
							<AiOutlineDashboard />
						<p className="font-medium pl-2">User-friendly dashboard</p>
					</div>
					<p className="font-light text-gray-400">Perform complex SEO audits and optimizations with a single click.</p>
				</div>

				<div>
					<div className="flex place-items-center">
						<AiOutlineLineChart />
						<p className="font-medium pl-2">Visual reports</p>
					</div>
					<p className="font-light text-gray-400">Visual insights into your site's performance.</p>
				</div>

				<div>
					<div className="flex place-items-center">
						<BsStars />
						<p className="font-medium pl-2">Smart Keyword Generator</p>
					</div>
					<p className="font-light text-gray-400">Automatic suggestions and the best keywords to target.</p>
				</div>

				<div>
					<div className="flex place-items-center">
						<BsListCheck />
						<p className="font-medium pl-2">Content evaluation</p>
					</div>
					<p className="font-light text-gray-400">Simple corrections for immediate improvemens.</p>
				</div>
			
				<div>
					<div className="flex place-items-center">
						<GoGoal />
						<p className="font-medium pl-2">SEO goal setting</p>
					</div>
					<p className="font-light text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
				</div>
			
				<div>
					<div className="flex place-items-center">
						<HiOutlineBellAlert />
						<p className="font-medium pl-2">Automated alerts</p>
					</div>
					<p className="font-light text-gray-400">Automatic notifications about your SEO health, including quick fixes.</p>
				</div>
			
				<div>
					<div className="flex place-items-center">
						<PiMagicWand />
						<p className="font-medium pl-2">Link Optimization Wizard</p>
					</div>
					<p className="font-light text-gray-400">Guides you through the process of creating and managing links.</p>
				</div>
			
				<div>
					<div className="flex place-items-center">
						<LuMousePointerClick />
						<p className="font-medium pl-2">One-click optimization</p>
					</div>
					<p className="font-light text-gray-400">Perform complex SEO audits and optimizations with a single click.</p>
				</div>
			
				<div>
					<div className="flex place-items-center">
						<PiFiles />
						<p className="font-medium pl-2">Competitor reports</p>
					</div>
					<p className="font-light text-gray-400">Provides insights into competitors’ keyword strategies and ranking.</p>
				</div>
			</div>

		</div>
	</div>
  )
}

export default Features