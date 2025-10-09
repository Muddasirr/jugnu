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
export default function LandingPage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <CommittedSection/>
      <Impact/>
      <TrainingSection/>
      <PartnersSection/>
      <StoriesSection/>
      <PhotoCollage/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}
