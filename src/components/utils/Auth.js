import React, { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../firebase/firebase';

const Auth = (props) => {
  const [loggedIn, setLoginStatus] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setChecked(true);
      setLoginStatus(!!user && process.env.NEXT_PUBLIC_ADMINISTRATOR_UID === user.uid);
    });
  }, []);

  if (!checked) {
    return 'Loading...';
  }
  if (loggedIn) {
    return props.children;
  }
  return (
    <>
      Login is Required.
    </>
  );
};

export default Auth;
