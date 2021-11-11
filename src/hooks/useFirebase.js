import  { useEffect, useState } from 'react';
import initializeFirebase from './../Components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();


    const registerUser = (email, password,name,history) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
             setAuthError('')
             
             const newUser = { email, displayName: name };
             setUser(newUser);
            
             updateProfile(auth.currentUser, {
                 displayName: name
             }).then(() => {
             }).catch((error) => {
             });
             history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message);   
          })
        .finally(() => setIsLoading(false));
    }

    // const updateName = (name)=> {
    //   updateProfile(auth.currentUser, {
    //     displayName: name
    //   }).then(() => {
    //     const newUser={...user, displayName: name} // recommend
    //    setUser(newUser)
        
    //     // ...
    //   }).catch((error) => {
    //     // An error occurred
    //     // ...
    //   });
    // }

    const loginUser = (email, password, location, history) => {
      setIsLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
            }

    // observe user state 
    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    }, [])

    const logOut = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
          setUser({})
          })
          .catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logOut,
       
    }
};

export default useFirebase;