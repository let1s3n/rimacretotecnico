import React, {
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import Planes from '@/components/templates/Planes/planes';
import Head from 'next/head';
import { UserContext } from '@/pages/_app';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
interface Props {
  setSelectedPlanData: Dispatch<SetStateAction<string>>;
}
const planes = ({
  userRes,
  plansRes,
  setSelectedPlanData,
  setSelectedUserData,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const userData = useContext(UserContext);
  const [user, setUser] = useState(userRes);
  const [plans, setPlans] = useState(plansRes);

  return (
    <>
      <Head>
        <title>
          RIMAC Seguros | Seguro Vehicular, EPS, Seguro de Salud, SOAT, Vida e
          Inversión
        </title>
      </Head>
      <Planes
        setSelectedPlanData={setSelectedPlanData}
        setSelectedUserData={setSelectedUserData}
        userData={userData}
        user={user}
        plans={plans}
      />
    </>
  );
};

export default planes;

export async function getServerSideProps() {
  const user = await fetch(`${process.env.NEXT_PUBLIC_API}user.json`);
  const userRes = await user.json();

  const plans = await fetch(`${process.env.NEXT_PUBLIC_API}plans.json`);
  const plansRes = await plans.json();

  return {
    props: {
      userRes,
      plansRes,
    },
  };
}
