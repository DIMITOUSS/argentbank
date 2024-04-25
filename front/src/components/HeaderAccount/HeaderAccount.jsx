import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../action/userReducer';

import EditName from '../../EditName/EditName'; 

// Définition du composant HeaderAccount
const HeaderAccount = () => {
  const dispatch = useDispatch(); // Obtient la fonction dispatch pour envoyer des actions Redux
  const userProfile = useSelector((state) => state.user.userProfile); // Utilise le hook useSelector pour accéder au profil de l'utilisateur dans le store Redux
  const [isEditing, setIsEditing] = useState(false); // Utilise le hook useState pour gérer l'état de l'édition du nom

  useEffect(() => { //montage du composant 
    dispatch(fetchUserProfile()); // Déclenche l'action fetchUserProfile pour récupérer le profil de l'utilisateur lors du montage du composant
  }, [dispatch]); // Le useEffect dépend de la fonction dispatch

  return (
    <div className="header">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} /> 
      ) : (
        <>
          <h1>Welcome back !<br />{`${userProfile.firstName} `}{userProfile.lastName} </h1>
          <h1></h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button> 
          <h2 className="sr-only">Accounts</h2>
        </>
      )}
    </div>
  );
};

export default HeaderAccount;