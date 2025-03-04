import Glow from "./glow";
import Image from "next/image";
import DistributionDetails from "@/assets/img/doughnut.png";

const Distribution = () => {
    return (
		<section className="space-y-12 py-10 md:py-[7rem]">
			<div className="flex items-center justify-between gap-4">
				<h2 className="header">Fair Launch Distribution</h2>

				<Glow />
			</div>

			<div className="grid gap-8 md:flex md:items-center">
				<div className="md:w-3/5 space-y-4 lg:w-1/2">
					<div className="border-l-4 border-[#F4BE37] pl-4">
						<h3 className="font-medium">100% Public Fair Launch</h3>

						<p className="text-white/60 text-sm space-y-2">
							Available to the community with no VC or insider
							allocations, ensuring decentralization.
						</p>
					</div>

					<div className="border-l-4 border-[#19B820] pl-4">
						<h3 className="font-medium">
							2% Dev Wallet Buy For Marketing & Partnerships
						</h3>

						<p className="text-white/60 text-sm space-y-2">
							Used for influencer promotions, community growth,
							and ecosystem expansion.
						</p>
					</div>

					<div className="border-l-4 border-[#FF2C3F] pl-4">
						<h3 className="font-medium">
							Liquidity (Permanently Locked)
						</h3>

						<p className="text-white/60 text-sm space-y-2">
							Locked permanently - ensuring price stability and
							preventing rug risks.
						</p>
					</div>
				</div>

				<div className="md:w-3/5 lg:w-1/3 mx-auto lg:mr-0">
					<Image
						className="size-full"
						src={DistributionDetails}
						alt="Distribution details"
					/>
				</div>
			</div>
		</section>
	);
};

export default Distribution;
