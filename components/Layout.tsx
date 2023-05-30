'use client';
import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
