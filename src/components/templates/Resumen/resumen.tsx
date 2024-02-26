import React, { useEffect, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import BreadCrumb from '@/components/elements/BreadCrumb/breadCrumb';
import { getCookie, setCookie, hasCookie } from 'cookies-next';
import { Container } from 'react-bootstrap';
import GoBack from '@/components/elements/GoBack/goBack';
import styles from './resumen.module.scss';
const resumen = ({
  selectedPlanData,
  selectedUserData,
  userData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <section className={styles.resumenContainer}>
      <BreadCrumb />

      <section className={styles.resumenContainer__contentSection}>
        <Container
          className={
            styles.resumenContainer__contentContainer + ' g-0 position-relative'
          }
        >
          <GoBack />

          <div
            className="d-flex flex-column align-items-center align-items-md-start"
            style={{ rowGap: '2.5rem' }}
          >
            <h1 className="fw-bold fs-2 fs-md-1 mb-md-2">
              Resumen del seguro{' '}
            </h1>
            <div className={styles.resumenContainer__content}>
              <div className={styles.resumenContainer__content__header}>
                <p style={{letterSpacing:"0.8px"}}>PRECIOS CALCULADOS PARA:</p>

                <div className="d-flex" style={{ columnGap: '.75rem' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/personIcon.svg`}
                    alt="Person Icon"
                    width={24}
                    height={0}
                    style={{ height: 'auto' }}
                    quality={100}
                  />
                  <h5>
                    {selectedUserData?.userName +
                      ' ' +
                      selectedUserData?.userLastName}
                  </h5>
                </div>
              </div>
              <div className={styles.resumenContainer__content__body}>
                <div className="mt-3">
                  <p className="fw-bold mb-1">Responsable de pago</p>
                  <p className="fs-14 mb-1">DNI: 444888888</p>
                  <p className="fs-14 mb-1">Celular: 5130216147</p>
                </div>
                <div className="mt-3">
                  <p className="fw-bold mb-1">Plan elegido</p>
                  <p className="fs-14 mb-1">Plan en Casa y Clínica</p>
                  <p className="fs-14 mb-1">Costo del Plan: $99 al mes</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default resumen;
