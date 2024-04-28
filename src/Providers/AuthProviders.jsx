import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider, 
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContest = createContext(null);

// direct login auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
      })   
  }

  // loginUser
  const login =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

   // google login
   const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  
  // twitter login
  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    user, setUser, loading, 
    createUser, updateUserProfile,
    googleLogin, githubLogin, twitterLogin,
    login, logOut,
  }

  return (
    <AuthContest.Provider value={authInfo}>
      {children}
    </AuthContest.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
}