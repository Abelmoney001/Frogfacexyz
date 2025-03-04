import Image from "next/image";
import Glow from "./glow";
import CardImage from "@/assets/img/card-image.png";

const tekenomicsCards = [
	{
		title: "Community Fairlaunch Style",
		mainContent:
			"Best for: Full decentralization, no team allocation, strong investor trust",
	},
	{
		title: "1 Billion Tokens",
		mainContent: "Supply: 1,000,000,000 (fixed)",
	},
	{
		title: "Fully Unlocked",
		mainContent: "Anti-Whale & Anti-Bot Measures",
		subContent: [
			"Buy limit (1-2% of supply per wallet)",
			"Cooldown timer at launch",
		],
	},
	{
		title: "Zero Team Allocation",
		mainContent: "Distribution",
		subContent: [
			"100% Public (fair launch, no VC dumps)",
			"2% Dev wallet buy for marketing & partnerships",
			"Liquidity (permanently locked)",
			"0% Team Reserve (locked for 12+ months)",
		],
		additionalContent:
			"Best for: Community identity and FrogFace cult culture",
	},
];

const Tokenomics = () => {
	return (
		<section className="space-y-12">
			<div className="flex items-center justify-between gap-4">
				<h2 className="header">Tokenomics</h2>

				<Glow />
			</div>

			<div className="grid gap-10 items-start md:grid-cols-2 md:gap-y-[5rem]">
				{tekenomicsCards.map((card) => (
					<div
						className="border-2 border-white/10 p-6 space-y-6 -tracking-[6%]"
						key={card.title}
					>
						<div className="bg-brand-green text-black font-medium py-3.5 px-5 flex items-center gap-2">
							<Image
								className="w-12 h-auto rounded-full aspect-square object-cover"
								src={CardImage}
								alt=""
							/>

							<p>{card.title}</p>
						</div>

						<div className="bg-gray-500/10 py-3.5 px-6 font-light">
							<span className="flex items-start gap-1">
								<span className="shrink-0">&bull;</span>
								{card.mainContent}
							</span>

							{card?.subContent && (
								<div className="ml-2 mt-4">
									{" "}
									{card.subContent.map((content) => (
										<span
											className="flex items-start gap-1"
											key={content}
										>
											<span className="shrink-0">
												&bull;
											</span>
											{content}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tokenomics;
