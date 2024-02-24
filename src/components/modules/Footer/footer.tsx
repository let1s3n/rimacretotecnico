import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer + ' bg-gray100 text-white'}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}images/general/logoFooter.svg`}
        alt="Logo Footer"
        width={86}
        height={0}
        style={{ height: 'auto' }}
        priority
        quality={100}
      />
      <p className="lh-1 text-gray10 BRSonomaRegular">© 2023 RIMAC Seguros y Reaseguros.</p>
    </div>
  );
};

export default Footer;
