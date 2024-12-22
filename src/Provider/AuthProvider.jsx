import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.confiq";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   ******Register a User ******

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ******Login a user ******

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // *******logout a user *******

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ********* sign in with google *********

  const signinWithGoogle = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // *********** Update a user *************

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  console.log(user);

  const authInfo = {
    registerUser,
    login,
    logOut,
    signinWithGoogle,
    setUser,
    user,
    loading,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
