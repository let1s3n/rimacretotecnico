import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Footer from '@/components/modules/Footer/footer';
import NavBar from '@/components/modules/NavBar/navBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  useEffect(() => {
    console.log('pathname: ', pathname);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      {pathname === '/planes' ? null : <Footer />}
    </>
  );
}
