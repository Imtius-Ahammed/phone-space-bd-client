import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [loading,setLoading] = useState(true);
  const [user,setUser] =  useState(null);

  
  const createNewUser =(email,password)=>{
    setLoading(true)
   
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  };

  const providerLogin = (provider)=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }




  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
       console.log('user observing');
       setUser(currentUser);
       setLoading(false);
     });
     return ()=> unsubscribe();
   },[])
 
 
   
   const logOut = ()=>{
     setLoading(true)
     return signOut(auth);
   }
 
   const updateUser =(userInfo)=>{
     return updateProfile(auth.currentUser,userInfo);
   }
  const authInfo = {
createNewUser,
signIn,
user,
logOut,
updateUser,
loading,
providerLogin
  }
  return (
    
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;