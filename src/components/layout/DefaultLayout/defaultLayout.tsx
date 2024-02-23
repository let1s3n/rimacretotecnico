import React from 'react';

import Footer from '@/components/modules/Footer/footer';
import NavBar from '@/components/modules/NavBar/navBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
