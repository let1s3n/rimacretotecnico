import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Row } from 'react-bootstrap';
import CustomForm from '@/components/modules/CustomForm/customForm';
import { lato } from '@/lib/fonts';
import styles from './home.module.scss';

interface Props {
  setUserData: Dispatch<SetStateAction<string>>;
}

const Home = ({ setUserData }: Props) => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log('setUserData: ', setUserData);
  }, []);

  return (
    <section className={styles.homeContainer + ' g-0'}>
      <Container className={styles.loginContainer + ' g-0'}>
        <Image
          className={styles.familyLogin}
          src={`${process.env.NEXT_PUBLIC_CDN}images/familiaLoginBig.png`}
          alt="Family Image"
          width={480}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />
        <div className={styles.loginContainer__right}>
          <div>
            <div
              className={
                styles.customGradient + ' BRSonomaBold fw-bold fs-14 mb-3'
              }
            >
              <p className="lh-base">Seguro Salud Flexible</p>
            </div>
            <p className="fs-2 BRSonomaBold fw-bold lh40 mb-2">
              Creado para ti y tu familia
            </p>
            <p className="fs-14 BRSonomaMedium fw-medium lh20">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
          </div>
          <CustomForm setUserData={setUserData} />
        </div>
        <Image
          className={styles.blurAssetLeft}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-left.png`}
          alt="Blur Asset Left"
          width={432}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />

        <Image
          className={styles.blurAssetRight}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-right.png`}
          alt="Blur Asset Right"
          width={432}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />
      </Container>
    </section>
  );
};

export default Home;
