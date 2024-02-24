import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './submitButton.module.scss';
const submitButton = ({ status }: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <button
      className={
        styles.submitButton + ' BRSonomaBold ' + (status ? ' ' : styles.inactive)
      }
    >
      Cotiza aquí
    </button>
  );
};

export default submitButton;
