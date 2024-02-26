import React, { useEffect } from 'react';
import Image from 'next/image';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/navigation';
import styles from './planCard.module.scss';

const planCard = ({
  userData,
  title,
  price,
  description,
  age,
  userName,
  userLastName,
  checkedValue,
  recomendado,
  setSelectedPlanData,
  setSelectedUserData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const router = useRouter();
  useEffect(() => {
    console.log('description: ', description);
  }, [description]);
  const handleClick = () => {
    setSelectedPlanData({ title, price });
    setSelectedUserData({ age, userName,userLastName });
    router.push('/resumen');
  };
  return (
    <div className={styles.planCard}>
      {recomendado ? (
        <button className={styles.planCard__btnRecomendado}>
          Plan recomendado
        </button>
      ) : null}

      <div className={styles.planCard__header}>
        <div className="d-flex flex-column" style={{ rowGap: '1.5rem' }}>
          <h4 className="fw-bolder text-neutrals700">{title}</h4>
          <div className="d-flex flex-column" style={{ rowGap: '.25rem' }}>
            <p
              className="fw-bolder fs-12 text-neutrals600"
              style={{ letterSpacing: '0.6px' }}
            >
              COSTO DEL PLAN
            </p>
            {checkedValue === 'forme' ? (
              <p className="fw-bolder fs-5 text-neutrals700">{`$${price} al mes`}</p>
            ) : (
              <>
                <p
                  className="fs-14 text-neutrals600"
                  style={{ textDecoration: 'line-through' }}
                >{`$${price} antes`}</p>
                <p className="fw-bolder fs-5 text-neutrals700">{`$${price * 0.95} al mes`}</p>
              </>
            )}
          </div>
        </div>
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/${title === 'Plan en Casa y Clínica' ? 'homeAndHospitalIcon' : 'homeIcon'}.svg`}
            alt="Home Icon"
            width={56}
            height={0}
            style={{ height: 'auto' }}
            quality={100}
          />
        </div>
      </div>

      <div className={styles.planCard__body}>
        <ul>
          {description?.map((item: string, idx: number) => {
            return (
              <li>
                <p>{item}</p>
              </li>
            );
          })}
          {/* <li>
            <p>
              <span className="fw-bold">Médico general a domicilio</span> por
              S/20 y medicinas cubiertas al 100%.
            </p>
          </li>
          <li>
            <p>
              <span className="fw-bold">Videoconsulta</span> y orientación
              telefónica al 100% en medicina general + pediatría.
            </p>
          </li>
          <li>
            <p>
              <span className="fw-bold">Indemnización</span> de S/300 en caso de
              hospitalización por más de un día.
            </p>
          </li> */}
        </ul>
      </div>

      <button className={styles.planCard__button} onClick={handleClick}>
        Seleccionar Plan
      </button>
    </div>
  );
};

export default planCard;
