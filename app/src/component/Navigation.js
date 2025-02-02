import logo from "./image/Asset 14@4x.png"
import  {Link} from "react-router-dom";


export default function Navigation(){
    return(
        <>
            <header className="flex head">
                <img src= {logo} alt="img not av" className="logo"/>
                <nav className="flex head-nav">
                    
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/menu'>Menu</Link>
                        <Link to='/bookingPage'>Book Table</Link>

                </nav>
            </header>  
        </>
    );
}