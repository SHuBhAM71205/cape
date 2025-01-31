import './App.css';
import Navigation from './component/Navigation';
import Highlight from './component/Highlight'
import HeroSection from './component/HeroSection';
import Testimonial from './component/Testimonial';

function App() {
  return (
    <>
      <header className="flex head"><Navigation/></header>
      <HeroSection/>
      <main>
        <Highlight/>
        <Testimonial/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
