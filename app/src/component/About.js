import image1 from './image/Asset 9@4x.png';

export default function About(){
    return(
        <>
            <div className="flex">
                <div className="text">
                    
                        <h1>little Lemon</h1>  
                        <article>
                            little lemon is the beautiful wwebsite eerone shold visit import PropTypes from 'prop-types'
                        </article>
                </div>
                <div>
                    <img src={image1} alt="img not found" className='about-img'/>    
                </div>
            </div>
        </>
    );
}
