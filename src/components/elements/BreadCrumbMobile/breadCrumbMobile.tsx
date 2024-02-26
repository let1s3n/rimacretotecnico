import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import GoBack from '@/components/elements/GoBack/goBack';
import styles from './breadCrumbMobile.module.scss';
const breadCrumbMobile = () => {
  const pathname = usePathname();
  return (
    <section className={styles.breadCrumbMobile}>
      <GoBack />

      <div className="d-flex align-items-center" style={{ columnGap: '1rem' }}>
        {pathname === '/resumen' ? (
          <>
            <p className={styles.breadCrumbMobile__text}>PASO 2 DE 2</p>
            <progress value="100" max="100"></progress>
          </>
        ) : (
          <>
            <p className={styles.breadCrumbMobile__text}>PASO 1 DE 2</p>
            <progress value="50" max="100"></progress>
          </>
        )}
      </div>
    </section>
  );
};

export default breadCrumbMobile;
