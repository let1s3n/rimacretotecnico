import React, { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
const planes = ({ userData }: InferGetStaticPropsType<GetStaticProps>) => {
  useEffect(() => {
    console.log('userData: ', userData);
  }, [userData]);

  return <h1>PLANES</h1>;
};

export default planes;
