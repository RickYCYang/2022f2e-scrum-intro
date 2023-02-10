import Footer from '@/components/Footer';
import { ReactElement } from 'react';

interface ILayout {
  children: ReactElement;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="h-screen bg-village">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
