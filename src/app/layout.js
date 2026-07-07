import { 
  Inter, Outfit, Montserrat, Playfair_Display, Fira_Code,
  Caveat, Dancing_Script, Pacifico, Permanent_Marker, Satisfy
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

// Handwritten & Script Fonts
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" });
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-permanent-marker" });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"], variable: "--font-satisfy" });

export const metadata = {
  title: "Loay Ashraf | Portfolio",
  description: "Portfolio of Loay Ashraf, showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${montserrat.variable} ${playfair.variable} ${firaCode.variable} ${caveat.variable} ${dancingScript.variable} ${pacifico.variable} ${permanentMarker.variable} ${satisfy.variable} ${inter.className}`}>
        <CustomCursor />
        <Navbar />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
