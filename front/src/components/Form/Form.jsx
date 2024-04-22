import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../action/userActionCreator';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import './Form.css';

const SignIn = () => {
  //Etats locaux
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showError, setShowError] = useState(true); // Mise à true par défaut, affiche la baniere si
  
  //Rédux
  const dispatch = useDispatch(); // Obtention de la fonction pour envoyer des actions à Redux
  const loading = useSelector(state => state.user.loading); // Obtention du chargement de l'état global à partir du store Redux
  const error = useSelector(state => state.user.error); // Obtention de l'erreur de l'état global à partir du store Redux
  
  //Navigation
  const navigate = useNavigate(); // Obtention de la fonction pour la navigation entre les pages

  //Gestion de la connexion
  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        setShowError(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }

      await dispatch(loginUser(email, password, navigate,rememberMe));//hooks envoie les informations à Redux
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.error('API Error:', error);
      setShowError(true);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && showError && ( 
          <div role="alert" className="banner-error">
            Error: {error}
          </div>
        )}
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="button" className="sign-in-button" onClick={handleSignIn} disabled={loading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
