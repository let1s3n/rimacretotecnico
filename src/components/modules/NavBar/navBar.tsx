import usePathName from '@/hooks/usePathName';
import Image from 'next/image';
import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import styles from './navbar.module.scss';
const NavBar = () => {
  const currentPath = usePathName();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className={styles.customNavbar + ' p-0 position-absolute top-0 w-100'}
      bg="transparent"
      expand="lg"
    >
      <Container className="g-0 px-4 px-xl-0" style={{ columnGap: '1rem' }}>
        <Navbar.Brand
          href="/"
          className="p-0 m-0 d-flex align-items-center"
          style={{ columnGap: '20px' }}
        >
          <Image
            className={styles.logo}
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.svg`}
            alt="Rimac Logo"
            width={74}
            height={0}
            style={{ height: 'auto' }}
            priority
            quality={100}
          />
        </Navbar.Brand>

        <Nav
          className="align-items-center"
          style={{ columnGap: '1rem', rowGap: '1rem', zIndex: '100' }}
        >
          <Nav.Link
            className="d-none d-md-block position-relative p-0 text-gray100"
            href="/"
          >
            <p className={styles.text + ' BRSonomaRegular'}>
              ¡Compra por este medio!
            </p>
          </Nav.Link>

          <Nav.Link
            className="position-relative p-0 d-flex"
            href="/"
            style={{ columnGap: '.5rem' }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/phoneIcon.svg`}
              alt="Phone Icon"
              width={20}
              height={0}
              style={{ height: 'auto' }}
              quality={100}
            />
            <p className={styles.phone}>(01) 411 6001</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
