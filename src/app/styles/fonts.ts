import { Bodoni_Moda, Noto_Serif, Playfair_Display } from "next/font/google";

// define your variable fonts
const playfairDisplay = Playfair_Display({
    weight: "400",
    variable: "--font-playfair-display",
    subsets: ["latin"],
});
const bodoniModa = Bodoni_Moda({ variable: "--font-bodoni-moda", subsets: ["latin"] });

const notoSerif = Noto_Serif({ variable: "--font-noto-serif", subsets: ["latin"] });

export { playfairDisplay, bodoniModa, notoSerif };
