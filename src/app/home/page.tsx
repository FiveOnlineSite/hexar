import GallerySlider from "@/src/components/Home/GallerySlider"
import Hero from "@/src/components/Home/Hero"
import About from "@/src/components/Home/About"
import MissionVision from "@/src/components/Home/MissionVision"
import Solution from "@/src/components/Home/Solution"
import OurExpertise from "@/src/components/Home/OurExpertise"

export default function HomePage () {
    return (
        <>
        <Hero/>
        <GallerySlider/>
        <About/>
        <MissionVision/>
        <Solution/>
        <OurExpertise/>
        </>
        
    )
}