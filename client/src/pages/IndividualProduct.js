import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import rotor from '../assets/images/rotor.jpg';
import './IndividualProduct.css';


const IndividualProduct = () => {
  return (
    <section className='ind-product'>
      <div className='img-container'>
        <img className='indiv-img' src={rotor} />
        <div className='info-container'>
          <h1>Sport Performance Rotor</h1>
          <p className='description-container'>
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f  </p>
          <p>$280</p>
          
            <div className='cart-wrapper'>
              <Remove />
              <div className='add-amount'>1</div>
              <Add />
              <Button className='add-to-cart-btn' variant='contained' color='primary'>Add to Cart</Button>
            </div>
        
        </div>
      </div>
    </section>

  )
}

export default IndividualProduct;