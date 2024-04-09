import React from 'react';
import './style.css';
import {  NavLink } from 'react-router-dom';
import Logo from '../../components/img/argentBankLogo.png';


function Index() { // Change this line

  return (
    <div className='main-nav'>
      <img className='main-nav-logo-image' src={Logo} alt="" />
      <div className='main-nav a'>
      <NavLink  to={"/login" } className=" main-nav a.router-link-exact-active main-nav-item" >
         Sign In</NavLink>

         <i class="fa fa-user-circle"></i>

      </div>
    
         
    </div>
  );
}

export default Index; // And this line
