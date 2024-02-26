import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styles from './goBack.module.scss';
const volverButton = () => {
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  return (
    <div className={styles.goBack}>
      <button className={styles.goBack__button} onClick={() => router.back()}>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/${width > 576 ? 'arrowLeftIcon' : 'arrowLeftIconOpaque'}.svg`}
          alt="Arrow Left"
          width={7}
          height={0}
          style={
            width > 576
              ? { height: 'auto', paddingRight: '1px' }
              : { height: 'auto' }
          }
          quality={100}
        />
      </button>

      <p className={styles.goBack__text}>Volver</p>
    </div>
  );
};

export default volverButton;
