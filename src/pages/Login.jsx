import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'; // Assurez-vous d'importer le composant Footer depuis le bon emplacement
import SignIn from '../components/Form/Form';
const Login = () => {
  return (
    <div className='page_login'>
      <Navbar />
      <SignIn />
      <Footer />
    </div>
  );
};

export default Login;
