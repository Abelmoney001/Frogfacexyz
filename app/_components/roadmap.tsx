import Image from "next/image";
import Glow from "./glow";
import RoadmapImage from "@/assets/img/roadmap-image.png";

const projectTarget = [
	"Wave 1: FROGFACE GENESIS community Campaigns launch",
	"Wave 2: FROGFACE GENESIS TOKEN LAUNCH",
	"Wave 3: FROGFACE GENESIS PARTNERSHIPS",
	"Wave 4: FROGFACE GENESIS NFT COLLECTIONS",
];

const Roadmap = () => {
	return (
		<section className="space-y-12 py-10 md:py-[7rem]">
			<div className="flex items-center justify-between gap-4">
				<h2 className="header">Roadmap</h2>

				<Glow />
			</div>

			<div className="grid gap-10 items-start md:gap-x-auto md:grid-cols-2 md:justify-between">
				{projectTarget.map((target) => (
					<div className="flex items-center gap-4 md:even:ml-auto" key={target}>
						<Image
							className="w-12 h-auto rounded-full aspect-square object-cover"
							src={RoadmapImage}
							alt=""
						/>

                        <p className="font-crunch-chips text-lg lg:text-[2rem]">
                            {target}
                        </p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Roadmap;
