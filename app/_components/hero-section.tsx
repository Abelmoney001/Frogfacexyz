import Image from "next/image";
import HeroImage from "@/assets/img/hero-image.png";

const frogFaceLettersOne = ["F", "R", "O", "G"];
const frogFaceLettersTwo = ["F", "A", "C", "E"];

const HeroSection = () => {
	return (
		<section className="bg-black text-white padding grid gap-8 selection:bg-brand-green selection:text-white">
			<h1 className="text-center text-6xl lg:text-[12.5rem] font-gelica grid place-content-center gap-2 md:-mb-20">
				<div className="flex items-center gap-8">
					{frogFaceLettersOne.map((letter) => (
						<span
							className="relative font-bold"
							key={letter}
						>
							<span className="text-outline z-10 relative">
								{letter}
							</span>

							<span className="absolute size-full bg-black bg-clip-text text-[#19B820] left-2 md:left-3 md:top-1.5 pointer-events-none select-none">
								{letter}
							</span>
						</span>
					))}
				</div>

				<div className="flex items-center gap-8">
					{frogFaceLettersTwo.map((letter) => (
						<span
							className="relative font-bold"
							key={letter}
						>
							<span className="text-outline z-10 relative">
								{letter}
							</span>

							<span className="absolute size-full bg-black bg-clip-text text-[#19B820] left-2 md:left-3 md:top-1.5 pointer-events-none select-none">
								{letter}
							</span>
						</span>
					))}
				</div>
			</h1>

			<div className="grid gap-4 md:items-center md:grid-cols-3">
				<p className="font-medium text-justify">
					In college, I was not beautiful. My classmates called me
					“Frog Face,” a reminder of their narrow standards. It
					haunted me, chipping away at my self-esteem and making me
					feel unworthy. I wondered if I’d ever be enough.
				</p>

				<div className="relative z-50 md:-translate-y-14">
					<Image
						className="size-full"
						src={HeroImage}
						alt=""
					/>
				</div>

				<p className="font-medium text-justify">
					As I grew older, I saw things differently. Beauty isn’t just
					one face; it’s a mosaic of our differences—races, cultures,
					traditions, and struggles. It’s in how we rise after falling
					and the quiet strength of those told they’re not enough.
				</p>
			</div>
		</section>
	);
};

export default HeroSection;
