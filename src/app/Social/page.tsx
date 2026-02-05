"use client";

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
import dynamic from "next/dynamic";

const PakistanMap = dynamic(() => import("@/components/map"), { ssr: false });
import SupportCard from "@/components/SupportCard";
import ResourcesSection from "@/components/ResourcesSection";
import JugnuPage from "@/components/jugnu";
import WelcomeSection from "@/components/WelcomeSection";
import HelpActionSection from "@/components/HelpActionSection";
import ResourceGridSection from "@/components/ResourceGridSection";
import SocialCampaigns from "@/components/SocialCampaigns";
import SectorsWeServe from "@/components/SectorsWeServe";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <WelcomeSection />
      <PakistanMap />

      <HelpActionSection />

      <CommittedSection />
      <ResourceGridSection />
      <TrainingSection />
      <Impact />
      <JugnuCarouselSection />
      <SectorsWeServe />
      <SocialCampaigns />



      <TestimonialSection />






    </div>
  );
}
