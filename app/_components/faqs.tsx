import Accordion from "./accordion";

const FAQs = () => {
	return (
		<section className="space-y-12 py-12">
			<h2 className="font-crunch-chips text-2xl md:text-5xl text-center">
				Frequently Asked Questions
			</h2>

			<div className="space-y-6">
				<Accordion
					question="What is Frog Face Genesis?"
					answer={
						<p>
							Frog Face Genesis is more than just a token - it’s a
							movement of resilience, inclusivity, and
							empowerment. It represents the beauty of diversity
							and the strength of those who have faced adversity
							but refuse to be defined by it. Whether you’ve been
							underestimated, judged, or overlooked, this token is
							a reminder that greatness comes from within.
						</p>
					}
				/>

				<Accordion
					question="What makes Frog Face Genesis different?"
					answer={
						<p>
							Unlike typical meme coins, Frog Face Genesis is
							built on a real message of empowerment. It’s not
							just about hype - it’s about community, inclusivity,
							and long-term value. Our roadmap includes staking,
							NFTs, DAO governance, and strategic partnerships to
							ensure the token evolves beyond just a trend.
						</p>
					}
				/>

				<Accordion
					question="How is the token supply distributed?"
					answer={
						<div className="grid gap-4">
							<p>
								The total supply of Frog Face Genesis is
								1,000,000, with no hidden mints or rug risks.
								The token distribution is as follows:
							</p>

							<ul className="list-disc list-inside ml-3">
								<li>
									Fair Launch – No VC or insider allocations
								</li>
								<li>
									Marketing & Partnerships – Community growth
									& adoption
								</li>
								<li>
									Liquidity Pool – Locked permanently for
									stability
								</li>
								<li>
									Reserved for Future Development – Ensuring
									sustainability
								</li>
							</ul>
						</div>
					}
				/>

				<Accordion
					question="Are there any anti-whale or anti-bot protections?"
					answer={
						<div className="grid gap-2">
							<p>
								Yes! To ensure fairness at launch and prevent
								manipulation:
							</p>

							<ul className="list-disc list-inside ml-3">
								<li>
									Buy limits per wallet will be enforced to
									avoid large holders dominating the supply.
								</li>
								<li>
									Cooldown timers will be implemented to
									prevent sniper bots.
								</li>
								<li>
									A higher sell tax will be applied in the
									first 24-48 hours to discourage early dumps.
								</li>
							</ul>
						</div>
					}
				/>
			</div>
		</section>
	);
};

export default FAQs;
