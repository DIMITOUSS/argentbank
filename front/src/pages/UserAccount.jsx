import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Account from '../components/Account/Account'; 
import Footer from '../components/Footer/Footer';
import HeaderAccount from '../components/HeaderAccount/HeaderAccount';
import '../style/main.css'

const User = () => {
  return (
    <div>
      <Navbar />
      <HeaderAccount />
      <Account />
      <Footer />
    </div>
  );
};

export default User;
