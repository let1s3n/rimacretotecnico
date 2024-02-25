import React, { useEffect } from 'react';
import Image from 'next/image';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './planCard.module.scss';
const planCard = ({
  userData,
  userRes,
  plansRes,
}: InferGetStaticPropsType<GetStaticProps>) => {
  useEffect(() => {
    console.log('userRes:', userRes);
    console.log('plansRes:', plansRes);
  }, []);
  return (
    <div className={styles.planCard}>
      <div className="d-flex" style={{ columnGap: '1rem' }}>
        <div className="d-flex flex-column" style={{ rowGap: '1.5rem' }}>
          <div
            className="d-flex flex-column"
            style={{ rowGap: '1.5rem' }}
          ></div>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/check.svg`}
          alt="check"
          width={12}
          height={0}
          style={{ height: 'auto' }}
          quality={100}
        />
      </div>
    </div>
  );
};

export default planCard;
