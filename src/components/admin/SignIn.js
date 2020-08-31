import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import { firebase, auth as firebaseAuth } from '../firebase/firebase';

const loginHandler = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider);
};

export default () => {
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
      return 'Loading';
    case 'logged in':
      return <Redirect to="/admin" />;
    case 'not logged in':
      return (<Button onClick={loginHandler}>Signin with google</Button>);
    case 'permission denied':
      return 'Permission Denied';
    default:
      return '';
  }
};
