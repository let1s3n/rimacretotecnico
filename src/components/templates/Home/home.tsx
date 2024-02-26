import React, { Dispatch, SetStateAction, Suspense } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import CustomForm from '@/components/modules/CustomForm/customForm';
import styles from './home.module.scss';

interface Props {
  setUserData: Dispatch<SetStateAction<string>>;
}

const Home = ({ setUserData }: Props) => {
  const { width, height } = useWindowDimensions();

  return (
    <section className={styles.homeContainer + ' g-0'}>
      <Container className={styles.loginContainer + ' g-0'}>
        <Image
          className={styles.familyLogin}
          src={`${process.env.NEXT_PUBLIC_CDN}images/familiaLoginBig.png`}
          alt="Family Image"
          width={480}
          height={560}
          priority
          quality={100}
        />
        <div className={styles.loginContainer__right}>
          <div
            className="d-flex pb-4 pb-md-0 border-bottom border-bottom-md-0 d-md-block"
            style={{ columnGap: '1rem' }}
          >
            <div className="d-flex flex-column d-md-block justify-content-center">
              <div
                className={
                  styles.customGradient + ' BRSonomaBold fw-bold fs-14 mb-3'
                }
              >
                <p className="lh-base">Seguro Salud Flexible</p>
              </div>
              <p className="fs-3 fs-md-2 BRSonomaBold fw-bold lh40 mb-md-2">
                Creado para ti y tu familia
              </p>
              <p className="fs-14 BRSonomaMedium fw-semibold lh20 d-none d-md-block">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>

            <Image
              className={styles['familyLogin--mobile']}
              src={`${process.env.NEXT_PUBLIC_CDN}images/familiaLoginBig.png`}
              alt="Family Image"
              width={136}
              height={0}
              style={{ height: 'auto' }}
              priority
              quality={100}
            />
          </div>
          <p className="fs-14 BRSonomaMedium fw-medium lh20 d-md-none">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
          <Suspense fallback={<p>Loading feed...</p>}>
            <CustomForm setUserData={setUserData} />
          </Suspense>
        </div>
        <Image
          className={styles.blurAssetLeft}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-left.png`}
          alt="Blur Asset Left"
          width={432}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />

        <Image
          className={styles.blurAssetRight}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-right.png`}
          alt="Blur Asset Right"
          width={432}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />

        <Image
          className={styles['blurAssetLeft--mobile']}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-left-mobile.png`}
          alt="Blur Asset Left Mobile"
          width={256}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />

        <Image
          className={styles['blurAssetRight--mobile']}
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/decor/blur-asset-right-mobile.png`}
          alt="Blur Asset Right Mobile"
          width={352}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />
      </Container>
    </section>
  );
};

export default Home;
