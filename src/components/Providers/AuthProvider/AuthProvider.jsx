import { createContext, useEffect, useState } from "react";

import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../firebase/firebase.config";


export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }
 const logOut=()=>{
    setLoading(true)
    return signOut(auth);
 }
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,curentUser=>{
            setUser(curentUser);
            setLoading(false)
            console.log('user in the auth state changed',curentUser);
        });
        return ()=>{
            unSubscribe();}
    },[])
    const authInfo={
      user,
      loading,
      createUser,
      signIn,
      logOut,
      signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;