import React, { useEffect, useContext } from 'react';
import { PlanContext, UserContext, SelectedUserContext } from '@/pages/_app';
import Resumen from '@/components/templates/Resumen/resumen';
const resumen = () => {
  const selectedPlanData = useContext(PlanContext);
  const userData = useContext(UserContext);
  const selectedUserData = useContext(SelectedUserContext);
  return (
    <Resumen
      selectedPlanData={selectedPlanData}
      userData={userData}
      selectedUserData={selectedUserData}
    />
  );
};

export default resumen;
