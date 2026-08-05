import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import SkillsAndExpertise from "../sections/SkillsAndExpertise/SkillsAndExpertise";
import FeaturedProjects from "../sections/FeaturedProjects/FeaturedProjects";
import LetsConnect from "../sections/LetsConnect/LetsConnect";

export default function Home(){
    return(
    <>
    <Hero />
    <About />
    <SkillsAndExpertise />
    <FeaturedProjects />
    <LetsConnect />
    </>
    )
}