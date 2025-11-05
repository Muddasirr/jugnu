import CommittedSection from "@/components/Committed";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PartnersSection from "@/components/PartnersSection";
import { StoriesSection } from "@/components/StoriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrainingSection from "@/components/TrainingSection";
import PhotoCollage from "@/components/PhotoCollage";
import { Impact } from "@/components/Impact";
import { Banner } from "@/components/Banner";
import MenuBar from "@/components/MenuBar";
import ViolenceBanner from "@/components/ViolenceBanner";
import { AboutPage } from "@/components/about-page";
import SectorsSection from "@/components/SectorsSection";
import WhatWeDoSection from "@/components/Whatwedo";
import JugnuCarouselSection from "@/components/jugnu-carousel-section";
import PakistanMap from "@/components/map";
import SupportCard from "@/components/SupportCard";
import ResourcesSection from "@/components/ResourcesSection";
import JugnuPage from "@/components/jugnu";
import AboutUs from "@/components/aboutus";
export default function LandingPage() {
  return (
    <div>
      <Header/>
      <MenuBar/>
      <Banner/>
      <JugnuPage/>
      <PakistanMap/>
      <AboutUs/>
      {/* <AboutPage/> */}
      <CommittedSection/>
      <SupportCard/>
      <Impact/>
      <SectorsSection/>
      <TrainingSection/>
      <StoriesSection/>
      <ResourcesSection/>

      {/* <WhatWeDoSection/> */}
      <JugnuCarouselSection/>
      <ViolenceBanner/>
      <PartnersSection/>

      <TestimonialSection/>

      
      
      <Footer/>
    </div>
  );
}
