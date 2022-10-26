import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubsucribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in the state', currentUser)
            setUser(currentUser)
        })
        return () => unsubsucribe();
    }, [])

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        createUser,
        userSignIn,
        LogOut,
        googleSignIn,
        githubSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;