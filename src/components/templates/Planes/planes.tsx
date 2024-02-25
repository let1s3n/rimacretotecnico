import React, { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import GoBack from '@/components/elements/GoBack/goBack';
import styles from './planes.module.scss';
const planes = ({ userData }: InferGetStaticPropsType<GetStaticProps>) => {
  useEffect(() => {
    console.log('userData: ', userData);
  }, [userData]);

  return (
    <section className={styles.planesContainer}>
      <section className={styles.planesContainer__breadcrumb}></section>
      <section className={styles.planesContainer__opciones}>
        <GoBack />

        <div>
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <h6>Selecciona la opción que se ajuste más a tus necesidades.</h6>
        </div>
      </section>
    </section>
  );
};

export default planes;
