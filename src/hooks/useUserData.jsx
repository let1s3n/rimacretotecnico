import { useState, useEffect } from 'react';

const useUserData = (doc, phone) => {
  const [nroDoc, setNroDoc] = useState(null);
  const [nroPhone, setNroPhone] = useState(null);

  useEffect(() => {
    doc ? setNroDoc(doc) : '';
  }, [doc]);

  useEffect(() => {
    phone ? setNroPhone(phone) : '';
  }, [phone]);

  return { nroDoc, nroPhone };
};
export default useUserData;
