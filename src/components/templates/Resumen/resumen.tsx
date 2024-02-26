import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import BreadCrumb from '@/components/elements/BreadCrumb/breadCrumb';
import BreadCrumbMobile from '@/components/elements/BreadCrumbMobile/breadCrumbMobile';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Container } from 'react-bootstrap';
import GoBack from '@/components/elements/GoBack/goBack';
import styles from './resumen.module.scss';
const resumen = ({
  selectedPlanData,
  selectedUserData,
  userData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const { height, width } = useWindowDimensions();
  return (
    <section className={styles.resumenContainer}>
      {width > 576 ? <BreadCrumb /> : <BreadCrumbMobile />}

      <section className={styles.resumenContainer__contentSection}>
        <Container
          className={
            styles.resumenContainer__contentContainer + ' g-0 position-relative'
          }
        >
          {width > 576 ? <GoBack /> : null}

          <div
            className="d-flex flex-column align-items-center align-items-md-start"
            style={{ rowGap: '2.5rem' }}
          >
            <h1 className="fw-bold fs-2 fs-md-1 mb-md-2">
              Resumen del seguro{' '}
            </h1>
            <div className={styles.resumenContainer__content}>
              <div className={styles.resumenContainer__content__header}>
                <p style={{ letterSpacing: '0.8px' }}>
                  PRECIOS CALCULADOS PARA:
                </p>

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
                  <p className="fs-14 mb-1">{`DNI: ${userData?.nroDoc}`}</p>
                  <p className="fs-14 mb-1">{`Celular: ${userData?.phone}`}</p>
                </div>
                <div className="mt-3">
                  <p className="fw-bold mb-1">Plan elegido</p>
                  <p className="fs-14 mb-1">{selectedPlanData?.title}</p>
                  <p className="fs-14 mb-1">{`Costo del Plan: $${selectedPlanData?.price} al mes`}</p>
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
