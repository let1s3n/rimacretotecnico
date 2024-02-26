import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from './footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer + ' bg-gray100 text-white'}>
      <Container className="g-0 d-flex flex-column flex-md-row justify-content-between align-items-normal align-items-md-center px-4 px-md-0">
        <Image
          className="d-none d-md-block"
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/logoFooter.svg`}
          alt="Logo Footer"
          width={86}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />

        <Image
          className="d-md-none pb-4 mx-auto"
          src={`${process.env.NEXT_PUBLIC_CDN}images/general/logoFooterMobile.svg`}
          alt="Logo Footer Mobile"
          width={138}
          height={0}
          style={{ height: 'auto' }}
          priority
          quality={100}
        />
        <p className="lh-1 text-gray10 BRSonomaRegular pt-4 pt-md-0 border-top border-top-md-0 text-center text-md-start">
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
