import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { lato } from '@/lib/fonts';
import { createContext } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout/defaultLayout';
import '@/sass/app.scss';

export const UserContext = createContext(null);
export const PlanContext = createContext(null);
export const SelectedUserContext = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState(null);
  const [selectedPlanData, setSelectedPlanData] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
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
            <PlanContext.Provider value={selectedPlanData}>
              <SelectedUserContext.Provider value={selectedUserData}>
                <Component
                  setUserData={setUserData}
                  setSelectedPlanData={setSelectedPlanData}
                  setSelectedUserData={setSelectedUserData}
                  {...pageProps}
                />
              </SelectedUserContext.Provider>
            </PlanContext.Provider>
          </UserContext.Provider>
        </DefaultLayout>
      </main>
    </>
  );
}
