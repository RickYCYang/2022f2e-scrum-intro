import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="h-screen relative overflow-hidden">{children}</main>;
};

export default Main;
