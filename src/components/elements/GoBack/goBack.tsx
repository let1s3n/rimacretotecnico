import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './goBack.module.scss';
const volverButton = () => {
  const router = useRouter();
  return (
    <div className={styles.goBack}>
      <button className={styles.goBack__button} onClick={() => router.back()}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/arrowLeftIcon.svg`}
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
