import useWindowDimensions from '@/hooks/useWindowDimensions';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Row } from 'react-bootstrap';
import { lato } from '@/lib/fonts';
import styles from './home.module.scss';
const Home = ({ imageProps }: InferGetStaticPropsType<GetStaticProps>) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container className={styles.loginContainer + ' g-0 border border-black'}>
      <Image
        className={styles.familyLogin}
        src={`${process.env.NEXT_PUBLIC_CDN}images/familiaLoginBig.png`}
        alt="Family Image"
        width={480}
        height={0}
        style={{ height: 'auto' }}
        priority
        quality={100}
      />
      <div className={styles.loginContainer__right}>
        <div className={styles.customGradient + ' BRSonomaBold fw-bold fs-14'}>
          <p className="lh-base">Seguro Salud Flexible</p>
        </div>
        <p className="fs-2 BRSonomaBold fw-bold lh40">
          Creado para ti y tu familia
        </p>
        <p className="fs-14 BRSonomaMedium fw-medium lh20">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>
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
    </Container>
  );
};

export default Home;
