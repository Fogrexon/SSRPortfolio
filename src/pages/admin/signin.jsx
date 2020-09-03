import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import App from '../../components/App';
import { firebase, auth as firebaseAuth } from '../../components/firebase/firebase';

const loginHandler = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider);
};

const SignIn = () => {
  const [login, setLoginStatus] = useState('uncheck');
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (!user) {
        setLoginStatus('not logged in');
      } else if (user.uid === process.env.REACT_APP_ADMINISTRATOR_UID) {
        setLoginStatus('logged in');
      } else {
        setLoginStatus('permission denied');
      }
    });
  }, []);
  switch (login) {
    case 'uncheck':
      return <App>Loading</App>;
    case 'logged in':
      useRouter().replace('/admin');
      return '';
    case 'not logged in':
      return (<App><Button onClick={loginHandler}>Signin with google</Button></App>);
    case 'permission denied':
      return <App>Permission Denied</App>;
    default:
      return <App />;
  }
};

export default SignIn;
