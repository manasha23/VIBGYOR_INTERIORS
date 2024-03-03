//https://youtu.be/x62aBvnRCKw?si=Zoxi8qq7tA9b1J5l
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,//firebase functions
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,//check to see logged in
} from "firebase/auth";
import { auth } from "../firebase-config";

const UserContext = createContext(); //Context API -
// The components that share the authentication-related data and functions are wrapped by the AuthContextProvider.
// The AuthContextProvider provides a context value to all its descendants via the UserContext.Provider.
// The UserAuth hook allows components within the AuthContextProvider hierarchy to access the context values. Components that need authentication-related data or functionality can use this hook to consume the context.

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }; //function to create user

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);//useState .. setUser
    });//onAuthStateChanged function importedfrom firebase to check logged in or not
    return () => {
      unsubscribe();//This function is used to unsubscribe or stop listening to changes in the authentication state, This is important to avoid memory leaks.
    };
  }, []);//cause we want it to run only once

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );//returning functions and user
};

export const UserAuth = () => { //userAuth is exported
  return useContext(UserContext);
};
