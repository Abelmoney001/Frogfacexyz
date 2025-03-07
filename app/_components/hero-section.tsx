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

			<div className="flex items-center flex-wrap mx-auto gap-4 text-center place-content-center">
				<div className="relative inline-block after:transition-all after:ease-in-out after:duration-300 after:bg-transparent after:border after:border-brand-green after:absolute after:size-full after:inset-0 hover:after:top-1.5 hover:after:left-1.5 md:order-1">
					<button
						className="bg-brand-green text-black py-2.5 px-6 inline-flex items-center gap-2.5 relative z-[1024] -tracking-[2%] hover:text-black text-xl font-crunch-chips hover:gap-3 transition-all duration-300 ease-in-out group"
						type="button"
					>
						Add Snapchat Filter
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								className="transition-all duration-300 ease-in-out group-hover:fill-black"
								d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
								fill="black"
							/>
						</svg>
					</button>
                </div>

                <div className="relative inline-block after:transition-all after:ease-in-out after:duration-300 after:bg-transparent after:border after:border-brand-green after:absolute after:size-full after:inset-0 hover:after:top-1.5 hover:after:left-1.5 md:order-1">
					<button
						className="bg-brand-green text-black py-2.5 px-6 inline-flex items-center gap-2.5 relative z-[1024] -tracking-[2%] hover:text-black text-xl font-crunch-chips hover:gap-3 transition-all duration-300 ease-in-out group"
						type="button"
					>
						Add Tiktok Filter
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								className="transition-all duration-300 ease-in-out group-hover:fill-black"
								d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
								fill="black"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
