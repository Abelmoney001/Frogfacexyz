import type { Metadata } from "next";
import Footer from "./_components/footer";
import localFont from "next/font/local";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const dm_mono = DM_Mono({
	variable: "--font-dm-mono",
	weight: ["300", "400", "500"],
    subsets: ["latin"],
    display: "swap"
});

const crunchChip = localFont({
    variable: "--font-crunch-chips",
	src: "../assets/fonts/Crunch_Chips.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Frog Face | Home",
	description: "A movement for dreamers and fighters who refuse to stay down",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${dm_mono.variable}
                    ${crunchChip.variable} antialiased font-dm-mono text-black`}
            >
                <Header />

                <main>{children}</main>

                <Footer />
			</body>
		</html>
	);
}
