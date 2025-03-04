"use client";

import { JSX, useState } from "react";

const Accordion = ({
	question,
	answer,
}: {
	question: string;
	answer: JSX.Element;
}): JSX.Element => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleAccordion = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="bg-brand-green text-black">
			<button
				className="leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full px-3 py-4"
				type="button"
				onClick={toggleAccordion}
			>
				<span className="text-xl md:text-2xl header">{question}</span>

				<span className={`inline-block rounded-full`}>
					{isExpanded ? (
						<svg
							width="40"
							height="40"
							viewBox="0 0 60 60"
							fill="none"
						>
							<rect
								width="60"
								height="60"
								fill="black"
							/>
							<path
								d="M29 29.0001V20.0005L31 20.0005V29.0001L40.0001 28.9999L40.0002 30.9999L31 31.0001L31.0001 40H29.0001V31.0001L20 31.0003L20 29.0003L29 29.0001Z"
								fill="#9BFF01"
								stroke="#9BFF01"
								strokeWidth="0.5"
							/>
						</svg>
					) : (
						<svg
							width="40"
							height="40"
							viewBox="0 0 60 60"
							fill="none"
						>
							<rect
								width="60"
								height="60"
								rx="30"
								fill="black"
							/>
							<path
								d="M22.384 39.384L30.0001 31.7679L37.6162 39.384L37.793 39.5608L37.9698 39.384L39.384 37.9697L39.5607 37.7929L39.384 37.6161L31.7679 30.0001L39.384 22.384L39.5607 22.2072L39.384 22.0304L37.9698 20.6162L37.793 20.4394L37.6162 20.6162L30.0001 28.2323L22.384 20.6162L22.2072 20.4394L22.0304 20.6162L20.6162 22.0304L20.4394 22.2072L20.6162 22.384L28.2323 30.0001L20.6162 37.6161L20.4394 37.7929L20.6162 37.9697L22.0304 39.384L22.2072 39.5608L22.384 39.384Z"
								fill="white"
								stroke="white"
								strokeWidth="0.5"
							/>
						</svg>
					)}
				</span>
			</button>

			<div
				className={`grid transition-all ease-linear px-3 ${
					isExpanded
						? "[grid-template-rows:1fr] pb-4"
						: "[grid-template-rows:0fr] pb-0"
				}`}
			>
				<div className="overflow-hidden text-left -tracking-[4%]">{answer}</div>
			</div>
		</div>
	);
};

export default Accordion;
