import HeroSection from "./HeroSection";
import Highlight from "./Highlight";
import Testimonial from "./Testimonial";
import About from "./About";
import FooterNav from "./FooterNav";
export default function Home(){
    
    return(
        <>
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