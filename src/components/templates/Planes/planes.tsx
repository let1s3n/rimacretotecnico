import React, { useState, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from 'react-bootstrap';
import UseGetAge from '@/hooks/useGetAge';
import GoBack from '@/components/elements/GoBack/goBack';
import WhoCard from '@/components/modules/WhoCard/whoCard';
import PlanCard from '@/components/modules/PlanCard/planCard';
import PlansRes from '@/types/plansRes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './planes.module.scss';
const planes = ({
  userData,
  userRes,
  plansRes,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedValue, setCheckedValue] = useState('');
  const userAge = UseGetAge(userRes.birthDay);
  useEffect(() => {
    console.log('userData: ', userData);
  }, [userData]);
  useEffect(() => {
    console.log('userAge: ', userAge);
  }, [userAge]);

  useEffect(() => {
    console.log('isChecked:', isChecked);
  }, [isChecked]);

  useEffect(() => {
    console.log('checkedValue:', checkedValue);
  }, [checkedValue]);

  var settings = {
    dots: true,
    infinite: false,
    centerMode: true,
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
                {`${userRes.name} ¿Para quién deseas cotizar?`}
              </h1>
              <h6 className={styles.planesContainer__text}>
                Selecciona la opción que se ajuste más a tus necesidades.
              </h6>
            </div>
            <div
              className="d-flex flex-column flex-md-row"
              style={{ columnGap: '2rem', rowGap: '1.5rem' }}
            >
              <WhoCard
                type="forme"
                setIsChecked={setIsChecked}
                setCheckedValue={setCheckedValue}
              />
              <WhoCard
                type="forsomeoneelse"
                setIsChecked={setIsChecked}
                setCheckedValue={setCheckedValue}
              />
            </div>
            {isChecked ? (
              <>
                <div className="d-none d-md-flex" style={{ columnGap: '2rem' }}>
                  {plansRes.list.map((item: PlansRes, idx: number) => {
                    return item.age >= userAge ? (
                      <PlanCard
                        userData={userData}
                        title={item.name}
                        price={item.price}
                        description={item.description}
                        age={item.age}
                        userName={userRes.name}
                        checkedValue={checkedValue}
                        recomendado={
                          item.name === 'Plan en Casa y Clínica' ? true : false
                        }
                      />
                    ) : null;
                  })}
                  {/* <PlanCard
                    userData={userData}
                    userRes={userRes}
                    plansRes={plansRes}
                    recomendado={false}
                  />
                  <PlanCard
                    userData={userData}
                    userRes={userRes}
                    plansRes={plansRes}
                    recomendado={true}
                  />
                  <PlanCard
                    userData={userData}
                    userRes={userRes}
                    plansRes={plansRes}
                    recomendado={false}
                  /> */}
                </div>
                <Container fluid className="g-0 d-md-none">
                  <Slider {...settings}>
                    {plansRes.list.map((item: PlansRes, idx: number) => {
                      return item.age >= userAge ? (
                        <PlanCard
                          userData={userData}
                          title={plansRes.name}
                          price={plansRes.price}
                          description={plansRes.description}
                          age={plansRes.age}
                          userName={userRes.name}
                          recomendado={
                            item.name === 'Plan en Casa y Clínica'
                              ? true
                              : false
                          }
                        />
                      ) : null;
                    })}
                  </Slider>
                </Container>
              </>
            ) : null}
          </div>
        </Container>
      </section>
    </section>
  );
};

export default planes;
