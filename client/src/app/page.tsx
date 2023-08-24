import BestSeals from "@/components/BestSeals";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
    <Navbar/>
    <div className="flex mx-5 flex-col md:px-20">
      <HeroSection />
      <div>
        <h1 className="mt-20 mb-5 text-2xl text-content-color font-semibold">Best Seals</h1>
        <BestSeals/>
      </div>
    </div>
    <Footer/>
    </Suspense>

  )
}
