import { Josefin_Sans, Yeseva_One } from "next/font/google";

// define your variable fonts
const josefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
    subsets: ["latin"],
});
const yesevaOne = Yeseva_One({ weight: "400", variable: "--font-yeseva-one", subsets: ["latin"] });

export { josefinSans, yesevaOne };
