import React from 'react'
import './style.scss'
import Chat from '../../components/img/icon-chat.png'
import Cach from '../../components/img/icon-money.png'
import Security from '../../components/img/icon-security.png'



function index() {
  return (
    <>
     <div className='hero'>
        <div className='hero-content' >
            <h1 className='sr-only'>Promoted Content</h1>
            <p className='subtitle' >No fees.</p>
            <p  className='subtitle'>No minimum deposit.</p>
            <p className='subtitle'>High interest rates.

            <p className='text'>Open a savings account with Argent Bank today!</p>

</p>

        </div>
      
      
    </div>
    <div className='features'>
<h2 className='sr-only'>Features</h2>
<div className="feature-item">
    <img className='feature-icon' src={Chat} alt="" />
    <h3>You are our #1 priority</h3>
<p>Need to talk to a representative? You can get in touch 
    through our 24/7 chat or through a phone call in less than 5 minutes.</p>

</div>
<div className="feature-item">
<img className='feature-icon' src={Cach} alt="" />
<h3>More savings means higher rates
</h3>
<p>The more you save with us, the higher your interest rate will be!</p>

</div>
<div className="feature-item">
<img className='feature-icon' src={Security} alt="" />
<h3>Security you can trust
</h3>
<p>We use top of the line encryption to make sure your data and money is always safe.</p>

</div>


</div>
    </>
   


  )
}

export default index
