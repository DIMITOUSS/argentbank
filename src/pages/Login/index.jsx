import React from 'react'
import './style.scss'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'


function index() {
  return (
    <>
    <Header/>
      <main className =" main bg-dark" >
     
     <section className='sign-in-content'>
       <h1>Sign in</h1>
     <form>
   <div  className='input-wrapper'>
   <input
        type="email" name="email"  placeholder="Email Address" /> username
   </div>
   <div className=' input-wrapper'>
   <input type="password" name="password"  placeholder="password" /> Password
   <input type="checkbox"  id="remember"/><label htmlFor="remember">Remember me</label> 

   </div>


       <button className='sign-in-button' onClick={(e) => alert('Your Name is: '
        + e.target.previousSibling.value)}> Sign In</button>
     </form>


     </section>
   </main>
   <Footer/>

    </>
  
  )
}

export default index
