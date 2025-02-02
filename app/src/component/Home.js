import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Highlight from "./Highlight";
import Testimonial from "./Testimonial";
import About from "./About";
import FooterNav from "./FooterNav";

export default function Home(){
    return(
        <>
            <Navigation />
            <main>
                <HeroSection />
                <Highlight />
                <Testimonial />
            </main>
    
            <footer>
                <About/>
                <FooterNav />
            </footer>
        </>
    );
}