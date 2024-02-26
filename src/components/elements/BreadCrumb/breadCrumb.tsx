import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './breadCrumb.module.scss';
const breadCrumb = () => {
  const pathname = usePathname();
  return (
    <section className={styles.breadCrumb}>
      <div className={styles.breadCrumb__step}>
        <div className={styles.breadCrumb__step__circle}>1</div>
        <p className={styles.breadCrumb__step__text}>Planes y coberturas</p>
      </div>

      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/progress.svg`}
        alt="Breadcrumb flow icon"
        width={32}
        height={0}
        style={{ height: 'auto' }}
        quality={100}
      />
      <div className={styles.breadCrumb__step}>
        <div
          className={
            styles.breadCrumb__step__circle +
            ' ' +
            (pathname === '/resumen' ? '' : styles['circle--inactive'])
          }
        >
          2
        </div>
        <p
          className={
            styles.breadCrumb__step__text +
            ' ' +
            (pathname === '/resumen' ? '' : styles['text--inactive'])
          }
        >
          Resumen
        </p>
      </div>
    </section>
  );
};

export default breadCrumb;
