import useWindowDimensions from '@/hooks/useWindowDimensions';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container } from 'react-bootstrap';
import { lato } from '@/lib/fonts';
import styles from './home.module.scss';
const Home = ({ imageProps }: InferGetStaticPropsType<GetStaticProps>) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container className="g-0 ">

    </Container>
  );
};

export default Home;
