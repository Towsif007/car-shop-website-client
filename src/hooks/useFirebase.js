import  { useEffect, useState } from 'react';
import initializeFirebase from './../Components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const registerUser = (email, password,name,history) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
             setAuthError('')
             
             const newUser = { email, displayName: name };
             setUser(newUser);

            //  save user to database
            saveUser(email, name, 'POST')
            
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

     useEffect( () =>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
          setUser({})
          })
          .catch((error) => {
            
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
          method: method,
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logOut,
       
    }
};

export default useFirebase;