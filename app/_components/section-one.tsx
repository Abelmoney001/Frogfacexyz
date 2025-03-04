import Image from "next/image";
import Link from "next/link";
import FrogFace from "@/assets/img/buy-frog-face.png";

const SectionOne = () => {
    return (
		<section className="bg-brand-green grid gap-8 md:gap-12 lg:gap-8 lg:grid-cols-2 lg:justify-between padding selection:bg-black selection:text-brand-green md:items-center">
			<div className="space-y-4 text-center lg:text-left md:space-y-6 text-lg xl:text-xl xl:leading-9">
				<h2 className="header">
					$FrogFace
				</h2>

				<p>
					The “FROGFACE” genesis is a movement for those who feel they
					don’t belong. It’s for dreamers and fighters who refuse to
					stay down. Life happens to everyone, but we all have the
					potential for something extraordinary.
				</p>

				<p>
					You are not defined by names or boxes. You are a masterpiece
					in progress, a story being written. Remember: You are
					beautiful, capable, and worthy. Greatness is inside you,
					waiting to rise. This is for you and all of us.
				</p>

				<div className="relative inline-block after:transition-all after:ease-in-out after:duration-300 after:bg-transparent after:border after:border-black after:absolute after:size-full after:inset-0 hover:after:top-1.5 hover:after:left-1.5">
					<Link
						className="bg-black text-white/100 py-2.5 px-6 inline-flex items-center gap-2.5 relative z-[1024] -tracking-[2%] hover:text-brand-green text-xl font-crunch-chips hover:gap-3 transition-all duration-300 ease-in-out group"
						href=""
					>
						BUY $FrogFace
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
                            <path
                                className="transition-all duration-300 ease-in-out group-hover:fill-brand-green"
								d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
								fill="white"
							/>
						</svg>
					</Link>
				</div>
			</div>

			<div className="md:w-3/5 lg:w-4/5 mx-auto lg:mr-0">
				<Image
					className="size-full"
					src={FrogFace}
					alt="$FrogFace"
				/>
			</div>
		</section>
	);
};

export default SectionOne;
