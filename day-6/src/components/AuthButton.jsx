import React, { useEffect, useState } from 'react';
import Button from './Button';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const status = localStorage.getItem('authStatus');
    setIsLoggedIn(status === 'true');
  }, []);


  useEffect(() => {
    localStorage.setItem('authStatus', isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <Button onClick={handleToggle}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
};

export default AuthButton;
