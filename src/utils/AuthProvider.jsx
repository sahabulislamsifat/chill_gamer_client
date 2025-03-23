import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // SignIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Sign In
  const googleSignIn = new GoogleAuthProvider();
  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleSignIn);
  };

  const profileUpdate = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };

  //Reset password
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Log Out
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    signUp,
    signIn,
    continueWithGoogle,
    profileUpdate,
    passwordReset,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
