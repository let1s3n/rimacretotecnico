import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Home from '@/components/templates/Home/home';
import Head from 'next/head';
interface Props {
  setUserData: Dispatch<SetStateAction<string>>;
}
const index = ({ setUserData }: Props) => {
  return (
    <>
      <Head>
        <title>
          RIMAC Seguros | Seguro Vehicular, EPS, Seguro de Salud, SOAT, Vida e
          Inversión
        </title>
      </Head>
      <Home setUserData={setUserData} />
    </>
  );
};

export default index;
