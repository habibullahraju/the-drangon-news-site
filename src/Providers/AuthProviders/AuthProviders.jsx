import React, {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  } 

  const logOut = ()=>{
    setLoading(true)
    signOut(auth)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error =>{
        console.log(error);
    })
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
  },[])



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
