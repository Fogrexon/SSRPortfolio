import React, { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../firebase/firebase';

export default (props) => {
  const [loggedIn, setLoginStatus] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setChecked(true);
      setLoginStatus(!!user && process.env.REACT_APP_ADMINISTRATOR_UID === user.uid);
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
