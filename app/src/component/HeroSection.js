import resImg from './image/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg';

export default function HeroSection()
{
    return(
        <>
            <div className="hero-sec">
                <div className="flex hero-sec">
                        <article id="hero-article"><h1>Little Lemon</h1></article>
                        <img src={resImg} alt="NO ing av" id="hero" />
                </div>
                <button id="hero-start-free">Reserve Table</button>
            </div>
        </>
    );
}