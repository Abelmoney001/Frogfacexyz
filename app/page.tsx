import Distribution from "./_components/distribution";
import FAQs from "./_components/faqs";
import HeroSection from "./_components/hero-section";
import Roadmap from "./_components/roadmap";
import SectionOne from "./_components/section-one";
import Tokenomics from "./_components/tokenomics";

const Index = () => {
    return (
        <>
            <HeroSection />
			<SectionOne />

			<div className="padding bg-black text-white/100 selection:bg-brand-green selection:text-black">
				<Tokenomics />
                <Roadmap />
                <Distribution />
                <FAQs />
			</div>
		</>
	);
};

export default Index;
