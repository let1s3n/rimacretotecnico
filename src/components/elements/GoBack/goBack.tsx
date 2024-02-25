import React from 'react';
import Image from 'next/image';
import styles from './goBack.module.scss';
const volverButton = () => {
  return (
    <div className={styles.goBack}>
      <button className={styles.goBack__button}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/arrowLeft.svg`}
          alt="Arrow Left"
          width={7}
          height={0}
          style={{ height: 'auto', paddingRight: '1px' }}
          quality={100}
        />
      </button>

      <p className={styles.goBack__text}>Volver</p>
    </div>
  );
};

export default volverButton;
