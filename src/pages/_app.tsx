import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { lato } from '@/lib/fonts';
import { createContext, useContext } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';
export const UserContext = createContext(null);
export default function App({ Component, pageProps }: AppProps) {
  
  const [userData, setUserData] = useState(null);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </Head>
      <main className={lato.className}>
        <DefaultLayout>
          <style jsx global>{`
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: ${lato.style.fontFamily};
            }
          `}</style>
          <UserContext.Provider value={userData}>
            <Component setUserData={setUserData} {...pageProps} />
          </UserContext.Provider>
        </DefaultLayout>
      </main>
    </>
  );
}
