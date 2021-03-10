import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate'
import LoginForm from '../containers/auth/LoginForm';
// import './LoginPage.css';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate> 
     );
};

export default LoginPage;
