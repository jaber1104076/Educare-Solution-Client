import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubsucribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in the state', currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubsucribe();
    }, [])

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        createUser,
        userSignIn,
        LogOut,
        googleSignIn,
        githubSignIn,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;