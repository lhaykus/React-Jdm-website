import React from 'react';
import rotor from '../assets/images/rotor.jpg';
import './IndividualProduct.css';


const IndividualProduct = () => {
  return (
    <section className='ind-product'>
        <div className='img-container'>
            <img className='indiv-img' src={rotor} />
            <div className='info-container'>
                <h1>ehkaklfjhe</h1>
                <div className='description-container'>
                    jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
                    jlksdfgjlk;sdglksdfj;ldks
                    jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf 
                    jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f  </div>
            </div>
        </div>

    </section>
  )
}

export default IndividualProduct;