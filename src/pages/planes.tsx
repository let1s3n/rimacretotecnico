import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Planes from '@/components/templates/Planes/planes';
import Head from 'next/head';
import { UserContext } from '@/pages/_app';
import { createContext, useContext } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const planes = ({
  userRes,
  plansRes,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const userData = useContext(UserContext);

 

  return (
    <>
      <Head>
        <title>
          RIMAC Seguros | Seguro Vehicular, EPS, Seguro de Salud, SOAT, Vida e
          Inversión
        </title>
      </Head>
      <Planes userData={userData} userRes={userRes} plansRes={plansRes} />
    </>
  );
};

export default planes;

export async function getServerSideProps() {
  const user = await fetch(`${process.env.NEXT_PUBLIC_API}user.json`);
  const userRes = await user.json();

  const plans = await fetch(`${process.env.NEXT_PUBLIC_API}plans.json`);
  const plansRes = await plans.json();

  return {
    props: {
      userRes,
      plansRes,
    },
  };
}
