import React, { useState } from 'react';
import styles from './whoCard.module.scss';
import Image from 'next/image';
import { Form } from 'react-bootstrap';
const whoCard = ({
  type,
  setIsChecked,
  setCheckedValue,
}: {
  type: string;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(true);
    setCheckedValue(e.target.value);
  };
  return (
    <div className={styles.radioContainer}>
      <input
        id={type === 'forme' ? 'opt1' : 'opt2'}
        type="radio"
        hidden
        value={type === 'forme' ? 'forme' : 'forsomeoneelse'}
        name="plan"
        onChange={handleChange}
      />
      <label
        htmlFor={type === 'forme' ? 'opt1' : 'opt2'}
        className={styles.whoCard}
      >
        <div className={styles.whoCard__radioButton}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/check.svg`}
            alt="check"
            width={12}
            height={0}
            style={{ height: 'auto' }}
            quality={100}
          />
        </div>
        {type === 'forme' ? (
          <div className={styles.whoCard__mainContent}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/forMeIcon.svg`}
              alt="For me icon"
              width={48}
              height={48}
              quality={100}
            />
            <h5 className={styles.whoCard__title}>Para mí</h5>
            <p className={styles.whoCard__text}>
              Cotiza tu seguro de salud y agrega familiares si así lo deseas.
            </p>
          </div>
        ) : (
          <div className={styles.whoCard__mainContent}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/general/icons/forSomeoneElseIcon.svg`}
              alt="For someone else icon"
              width={48}
              height={48}
              quality={100}
            />
            <h5 className={styles.whoCard__title}>Para alguien más</h5>
            <p className={styles.whoCard__text}>
              Realiza una cotización para uno de tus familiares o cualquier
              persona.
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default whoCard;
