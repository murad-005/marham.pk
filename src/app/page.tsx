import { Navbarnew } from "@/Components/navbarnew";
import HeroSection from "../Components/homePage/HeroSection";
import PromotionSection from "../Components/homePage/PromotionSection/PromotionSection";
import ServicesSection from "../Components/homePage/ServicesSection/ServicesSection";
import Image from "next/image";


export default function Home() {
  return (
    <main>
  
<Navbarnew/>
      <HeroSection/>
      <ServicesSection/>
      <PromotionSection/>
    </main>
  );
}
