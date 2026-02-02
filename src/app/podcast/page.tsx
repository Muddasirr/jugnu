'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import PodcastPage from "@/components/PodcastPage";

export default function Podcast() {
    return (
        <div>
            <Header />
            <MenuBar />
            <PodcastPage />
            <Footer />
        </div>
    );
}
