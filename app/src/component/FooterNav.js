import fimg from './image/Asset 20@4x.png';
export default function FooterNav(){
    return(
        <>
            <div className="flex" id="f-box">
                <img src={fimg} alt="img not found" className="fimg"/>
                <nav className="Footer_Nav flex">
                    <ul className="flex fnav">
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                    </ul>
                    <ul className="flex fnav">
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                    </ul>
                    <ul className="flex fnav">
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                        <li><a href=".">Link</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}