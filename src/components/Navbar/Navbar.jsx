import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; //hooks de React Redux permettant d'accéder à l'état global et de dispatcher des actions Redux.
import "../Navbar/Navbar.css";
import logo from "../../assets/argentBankLogo.webp";
import { logoutUser } from '../../action/userReducer'; // Une action Redux pour gérer la déconnexion de l'utilisateur.

// Définition du composant Navbar
const Navbar = () => {
  const userProfile = useSelector(state => state.user.userProfile); //  le hook useSelector pour accéder au profil de l'utilisateur dans le store Redux
  const dispatch = useDispatch(); // Obtient la fonction dispatch pour envoyer des actions Redux

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprime le token de l'utilisateur du stockage local
    sessionStorage.removeItem("token"); // Supprime le token de l'utilisateur de la session
    dispatch(logoutUser()); // Déclenche l'action logoutUser pour déconnecter l'utilisateur
    console.log("Déconnexion effectuée"); // Affiche un message dans la console pour indiquer que la déconnexion a été effectuée
  };

return (
  <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={logo} alt='Argent Bank Logo' />
    </Link>
    <div>
    {userProfile ? (
          <Link to="/account" className="main-nav-item">
            <i className='fa fa-user-circle'></i>
            {userProfile.userName}
          </Link>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      {/* Condition pour afficher le bouton de déconnexion uniquement si l'utilisateur est connecté */}
      {userProfile && (
        <Link to="/" onClick={handleLogout} className="logout">
          <i className='fa fa-sign-out'></i>
          Sign Out
        </Link>
      )}
    </div>
  </nav>
);
};
export default Navbar;
