import image1 from './logo.jpg';

export default function About(){
    return(
        <>
            <div className="flex">
                <div className="text">
                    <p>
                        <h1>little Lemon</h1>  
                        <article>
                            little lemon is the beautiful wwebsite eerone shold visit import PropTypes from 'prop-types'
                        </article>
                    </p>
                </div>
                <div className="img"><img scr={image1} alt="img not found"/></div>
            </div>
        </>
    );
}
