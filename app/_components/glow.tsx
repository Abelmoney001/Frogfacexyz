const Glow = () => {
    return (
		<>
			<div className="flex gap-3 lg:hidden">
				{Array.from({ length: 3 }).map((_, index) => (
					<span
						className="inline-block bg-brand-green/20 hover:bg-brand-green transition-colors ease-in-out duration-300 md:w-3 w-2 h-10 md:h-[3.75rem] rounded-full hover:shadow-[0px_0px_100px_0px_#9BFF01]"
						key={index}
					></span>
				))}

				{Array.from({ length: 3 }).map((_, index) => (
					<span
						className="shadow-[0px_0px_100px_0px_#9BFF01] inline-block bg-brand-green hover:bg-brand-green/20 transition-colors ease-in-out duration-300 md:w-3 w-2 h-10 md:h-[3.75rem] rounded-full hover:shadow-none"
						key={index}
					></span>
				))}
			</div>

            <div className="gap-3 hidden lg:flex">
				{Array.from({ length: 7 }).map((_, index) => (
					<span
						className="inline-block bg-brand-green/20 hover:bg-brand-green transition-colors ease-in-out duration-300 w-3 h-[3.75rem] rounded-full hover:shadow-[0px_0px_100px_0px_#9BFF01]"
						key={index}
					></span>
				))}

				{Array.from({ length: 7 }).map((_, index) => (
					<span
						className="shadow-[0px_0px_100px_0px_#9BFF01] inline-block bg-brand-green hover:bg-brand-green/20 transition-colors ease-in-out duration-300 w-3 h-[3.75rem] rounded-full hover:shadow-none"
						key={index}
					></span>
				))}
			</div>
		</>
	);
};
export default Glow;
