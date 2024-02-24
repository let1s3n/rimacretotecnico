import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Planes from '@/components/templates/Planes/planes';
import Head from 'next/head';
import { UserContext } from '@/pages/_app';
import { createContext, useContext } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const planes = () => {
  const userData = useContext(UserContext);
  return (
    <>
      <Head>
        <title>
          RIMAC Seguros | Seguro Vehicular, EPS, Seguro de Salud, SOAT, Vida e
          Inversión
        </title>
      </Head>
      <Planes userData={userData} />
    </>
  );
};

export default planes;
