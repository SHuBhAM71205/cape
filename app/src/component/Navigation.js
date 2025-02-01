import logo from "./image/Asset 14@4x.png"

export default function Navigation(){
    return(
        <>
            <img src= {logo} alt="img not av" className="logo"/>
            <ul className="flex head-nav">
                <li><a href="./">HOME</a></li>
                <li><a href="./">ABOUT</a></li>
                <li><a href="./">MENU</a></li>
                <li><a href="./">RESERVATION</a></li>
            </ul>
        </>
    );

}