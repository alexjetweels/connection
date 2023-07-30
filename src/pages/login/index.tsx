import { Button, Form, Input } from 'antd';
import React from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import path from '~/configs/path';
import { auth } from '~/firebase/firebase';

const uiConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: path.PUNCH_CLOCK,
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
};

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="bg-white shadow p-[60px] rounded-3xl flex flex-col justify-center items-center">
        <div className="text-5xl font-bold mb-5">NITRO PUNCH CLOCK</div>

        <div className="mb-3">Welcome to our site! Please login</div>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </div>
  );
};
