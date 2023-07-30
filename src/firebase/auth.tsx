import React, { createContext, useContext, useEffect, useState } from 'react';

import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth';

import { auth } from './firebase';

const AuthUserContext = React.createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user: any) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }

    setAuthUser({
      uid: user.uid,
      email: user.email,
    });

    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, authStateChanged);
    return unsubscribed;
  }, []);

  return { authUser, isLoading, signOut };
}

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
