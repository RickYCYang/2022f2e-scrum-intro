import Footer from '@/components/common/Footer';
import { ReactElement } from 'react';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='h-screen bg-village'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
