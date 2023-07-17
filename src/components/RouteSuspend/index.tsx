import React, { PropsWithChildren, Suspense } from 'react';

export const RouteSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense fallback={null}>{children}</Suspense>;
};
