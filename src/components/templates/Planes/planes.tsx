import React, { useState, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container } from 'react-bootstrap';
import UseGetAge from '@/hooks/useGetAge';
import GoBack from '@/components/elements/GoBack/goBack';
import WhoCard from '@/components/modules/WhoCard/whoCard';
import PlanCard from '@/components/modules/PlanCard/planCard';
import BreadCrumb from '@/components/elements/BreadCrumb/breadCrumb';
import BreadCrumbMobile from '@/components/elements/BreadCrumbMobile/breadCrumbMobile';
import PlansRes from '@/types/plansRes';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './planes.module.scss';
const planes = ({
  userData,
  user,
  plans,
  setSelectedPlanData,
  setSelectedUserData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedValue, setCheckedValue] = useState('');
  const userAge = UseGetAge(user.birthDay);
  const { height, width } = useWindowDimensions();
  var settings = {
    dots: true,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 0.92,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.planesContainer}>
      {width > 576 ? <BreadCrumb /> : <BreadCrumbMobile />}

      <section className={styles.planesContainer__opcionesSection}>
        <Container
          className={
            styles.planesContainer__opcionesContent + ' g-0 position-relative'
          }
        >
          {width > 576 ? <GoBack /> : null}

          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ rowGap: '2rem' }}
          >
            <div
              className="px-4 px-md-0 d-flex flex-column"
              style={{ rowGap: '2rem' }}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ rowGap: '.5rem' }}
              >
                <h1 className={styles.planesContainer__title}>
                  {`${user.name} ¿Para quién deseas cotizar?`}
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
            </div>
            {isChecked ? (
              <>
                <div className="d-none d-md-flex" style={{ columnGap: '2rem' }}>
                  {plans.list.map((item: PlansRes, idx: number) => {
                    return item.age >= userAge ? (
                      <PlanCard
                        userData={userData}
                        title={item.name}
                        price={item.price}
                        description={item.description}
                        age={item.age}
                        userName={user.name}
                        userLastName={user.lastName}
                        checkedValue={checkedValue}
                        setSelectedPlanData={setSelectedPlanData}
                        setSelectedUserData={setSelectedUserData}
                        recomendado={
                          item.name === 'Plan en Casa y Clínica' ? true : false
                        }
                      />
                    ) : null;
                  })}
                </div>
                <Container fluid className="g-0 d-md-none">
                  <Slider {...settings}>
                    {plans.list.map((item: PlansRes, idx: number) => {
                      return item.age >= userAge ? (
                        <PlanCard
                          userData={userData}
                          title={item.name}
                          price={item.price}
                          description={item.description}
                          age={item.age}
                          userName={user.name}
                          userLastName={user.lastName}
                          checkedValue={checkedValue}
                          setSelectedPlanData={setSelectedPlanData}
                          setSelectedUserData={setSelectedUserData}
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
