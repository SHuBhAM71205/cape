import './App.css';
import Navigation from './component/Navigation';
import Highlight from './component/Highlight'
import HeroSection from './component/HeroSection';
import Testimonial from './component/Testimonial';
import Abuot from './component/About';
import FooterNav from './component/FooterNav';


function App() {
  return (
    <>
      <header className="flex head"><Navigation/></header>
      <main>
        <HeroSection/>
        <Highlight/>
        <Testimonial/>
      </main>
      
      <footer>
        <Abuot/>
        <FooterNav/>
      </footer>
    </>
  );
}

export default App;
