"use client";

const HeroSection = dynamic(() => import("./components/hero"), { ssr: false });
const About = dynamic(() => import("./components/about"), { ssr: false });
import Services from "./components/services";
import Advantages from "./components/advantages";
import ProductTabs from "./components/tabs";
import Faq from "./components/faq";
import BannerFollow from "./components/bannerfollow";
import Footer from "./components/footer";
import { useLanguage } from "./context/langContext";
import dynamic from "next/dynamic";



export default function Home() {
   const { t } = useLanguage();
  const btnText = {
    downloadBtn: t.catalogueBtn,
  };
  const btnText2 = {
    downloadBtn: t.priceBtn,
  };

  return (
    <div className="d-flex flex-column mx-auto">
      <div className="container d-flex flex-column gap-5 py-4">
        <HeroSection />
        <About btnText={btnText} />
        <Services/>
        <Advantages btnText={btnText2} />
        <ProductTabs/>
        <Faq/>
        <BannerFollow/>
        <Footer></Footer>
      </div>
    </div>
  );
}
