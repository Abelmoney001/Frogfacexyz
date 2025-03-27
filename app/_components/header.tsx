import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.png";

const Header = () => {
    return (
        <header className="py-8 px-4 md:px-14 lg:px-[4.875rem] bg-black selection:bg-brand-green selection:text-black flex flex-wrap items-center justify-between gap-8">
            <Link href="/">
                <Image className="size-14" src={Logo} alt="FrogFace" />
            </Link>

            <div className="order-2 hidden md:flex items-center place-content-center gap-4 w-full md:w-auto md:order-1">
                <Link
                    href="https://x.com/FrogfaceGenesis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect
                            width="56"
                            height="56"
                            rx="28"
                            fill="white"
                            fillOpacity="0.1"
                        />
                        <path
                            d="M36.5311 14.5938L29.0361 23.1614L22.5557 14.5938H13.1699L24.3844 29.258L13.7557 41.4062H18.3069L26.5102 32.0329L33.6795 41.4062H42.8328L31.1425 25.9513L41.0797 14.5938H36.5311ZM34.9348 38.6837L18.4815 17.1733H21.1862L37.4551 38.6837H34.9348Z"
                            fill="white"
                        />
                    </svg>
                </Link>

                <Link
                    href="https://t.me/Frogfacegenesis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect
                            width="56"
                            height="56"
                            rx="28"
                            fill="white"
                            fillOpacity="0.1"
                        />
                        <path
                            d="M43 28C43 36.2842 36.2842 43 28 43C19.7157 43 13 36.2842 13 28C13 19.7157 19.7157 13 28 13C36.2842 13 43 19.7157 43 28ZM28.5376 24.0737C27.0786 24.6805 24.1627 25.9366 19.7899 27.8418C19.0798 28.1241 18.7079 28.4004 18.674 28.6704C18.6168 29.127 19.1884 29.3067 19.9669 29.5515C20.0728 29.5848 20.1825 29.6193 20.295 29.6559C21.0608 29.9047 22.0911 30.196 22.6266 30.2076C23.1125 30.2181 23.6547 30.0178 24.2533 29.6067C28.339 26.8488 30.448 25.4548 30.5805 25.4248C30.6739 25.4035 30.8034 25.377 30.891 25.4548C30.9787 25.5328 30.97 25.6804 30.9609 25.72C30.9042 25.9615 28.6602 28.0477 27.499 29.1273C27.1527 29.4492 26.8152 29.778 26.475 30.1059C25.7635 30.7917 25.23 31.306 26.5045 32.146C27.7966 32.9976 29.0985 33.8473 30.3586 34.7457C30.9801 35.1888 31.5385 35.5869 32.2282 35.5234C32.6292 35.4865 33.0432 35.1096 33.2533 33.9855C33.7503 31.329 34.7271 25.5732 34.9528 23.2012C34.9726 22.9935 34.9477 22.7275 34.9278 22.6108C34.9078 22.494 34.866 22.3277 34.7143 22.2045C34.5345 22.0587 34.2571 22.0279 34.1331 22.0301C33.5688 22.0401 32.7033 22.3411 28.5376 24.0737Z"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>

            <div className="relative inline-block after:transition-all after:ease-in-out after:duration-300 after:bg-transparent after:border after:border-brand-green after:absolute after:size-full after:inset-0 hover:after:top-1.5 hover:after:left-1.5 md:order-1">
                <Link
                    className="bg-brand-green text-black py-2.5 px-6 inline-flex items-center gap-2.5 relative z-[1024] -tracking-[2%] hover:text-black text-xl font-crunch-chips hover:gap-3 transition-all duration-300 ease-in-out group"
                    href="https://dexscreener.com/solana/GbD4BwJfNzfWmrw4a9cCPiCeuGcrZRrUjRLkG8HgtWVt"
                >
                    BUY $SIM5
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            className="transition-all duration-300 ease-in-out group-hover:fill-black"
                            d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
                            fill="black"
                        />
                    </svg>
                </Link>
            </div>
        </header>
    );
};

export default Header;
