import React, { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from 'react-bootstrap';
import GoBack from '@/components/elements/GoBack/goBack';
import WhoCard from '@/components/modules/WhoCard/whoCard';
import PlanCard from '@/components/modules/PlanCard/planCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './planes.module.scss';
const planes = ({ userData }: InferGetStaticPropsType<GetStaticProps>) => {
  useEffect(() => {
    console.log('userData: ', userData);
  }, [userData]);
  var settings = {
    dots: true,
    infinite: false,
    centerMode:true,
    speed: 500,
    slidesToShow: 1.05,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.planesContainer}>
      <section className={styles.planesContainer__breadcrumb}></section>
      <section className={styles.planesContainer__opcionesSection}>
        <Container
          className={
            styles.planesContainer__opcionesContent +
            ' g-0 position-relative border border-danger'
          }
        >
          <GoBack />

          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ rowGap: '2rem' }}
          >
            <div
              className="d-flex flex-column align-items-center"
              style={{ rowGap: '.5rem' }}
            >
              <h1 className={styles.planesContainer__title}>
                Rocío ¿Para quién deseas cotizar?
              </h1>
              <h6 className={styles.planesContainer__text}>
                Selecciona la opción que se ajuste más a tus necesidades.
              </h6>
            </div>
            <div
              className="d-flex flex-column flex-md-row"
              style={{ columnGap: '2rem', rowGap: '1.5rem' }}
            >
              <WhoCard type="forme" />
              <WhoCard type="forsomeoneelse" />
            </div>

            <div className="d-none d-md-flex" style={{ columnGap: '2rem' }}>
              <PlanCard />
              <PlanCard />
              <PlanCard />
            </div>
            <Container fluid className="g-0 d-md-none">
              <Slider {...settings}>
                <PlanCard />
                <PlanCard />
                <PlanCard />
              </Slider>
            </Container>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default planes;
