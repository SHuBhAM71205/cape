import logo from "./1.jpg"

export default function Navigation(){
    return(
        <>
            <img src= {logo} alt="img not av"/>
            <ul className="flex head-nav">
                <li><a href="./">HOME</a></li>
                <li><a href="./">ABOUT</a></li>
                <li><a href="./">MENU</a></li>
                <li><a href="./">RESERVATION</a></li>
            </ul>
        </>
    );

}