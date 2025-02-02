import "./App.css";
import Navigation from "./component/Navigation";
import Home  from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingTable from './component/BookingTable';
import About from "./component/About";
import Menu from "./component/Menu";
function App() {
  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/bookingPage' element={<BookingTable/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
