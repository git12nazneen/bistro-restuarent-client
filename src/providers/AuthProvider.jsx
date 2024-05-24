import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,getAuth, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { app } from '../firebase/firebase.config';
import UseAxiosPublic from '../hooks/UseAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = UseAxiosPublic()

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        });
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged (auth,currentUser=>{
        setUser(currentUser)
        if(currentUser){
            // get token and store
            const userInfo = {email: currentUser.email};
            console.log('user infor', userInfo)
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token);
                }
            })
        }
        else{
            // remove token .
            localStorage.removeItem('access-token')
        }
        console.log('current user', currentUser);
        setLoading(false)
      })
      return () =>{
        return unsubscribe()
      }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;