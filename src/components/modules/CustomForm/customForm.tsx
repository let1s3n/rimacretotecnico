import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Form, InputGroup, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import SubmitButton from '@/components/elements/SubmitButton/submitButton';
import styles from './customForm.module.scss';

interface Props {
  setUserData: Dispatch<SetStateAction<string>>;
}

const customForm = ({ setUserData }: Props) => {
  const [statusButton, setStatusButton] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { isSubmitSuccessful, errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      nroDoc: '',
      phone: '',
      privacyCheck: false,
      commercialCheck: false,
    },
  });

  const onSubmit = (data: any) => {
    setUserData({ ...data });
    router.push('/planes');
  };

  useEffect(() => {
    let count = Object.keys(dirtyFields).length;

    if (count === 4) {
      setStatusButton(true);
    } else {
      setStatusButton(false);
    }

    /* if (formState.isSubmitSuccessful) {
      reset();
    } */
  }, [formState, reset]);

  return (
    <Form
      className={styles.customForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <InputGroup>
        <Form.Select
          className={styles.customInput}
          aria-label="opciones documento"
        >
          <option value="1">DNI</option>
          <option value="2">RUC</option>
        </Form.Select>
        <FloatingLabel
          controlId="floatingInput1"
          label="Nro. de documento"
          className="BRSonomaRegular fs-12"
          style={{ flex: '2 1 0' }}
        >
          <Form.Control
            className={styles.customInput}
            type="text"
            placeholder="Nro. de documento"
            {...register('nroDoc', {
              required: true,
              pattern: /[0-9]{8,11}$/i,
              validate: (value, formValues) =>
                value === process.env.NEXT_PUBLIC_USERDOC,
            })}
          />
        </FloatingLabel>
      </InputGroup>
      {errors.nroDoc?.type === 'required' && (
        <p className="fs-12 lh-1 text-danger">
          *Tiene que ingresar un número de documento
        </p>
      )}
      {errors.nroDoc?.type === 'pattern' && (
        <p className="fs-12 lh-1 text-danger">
          *El número de documento ingresado no es válido.
        </p>
      )}

      {errors.nroDoc?.type === 'validate' && (
        <p className="fs-12 lh-1 text-danger">
          *El número de documento ingresado es incorrecto.
        </p>
      )}
      <FloatingLabel controlId="floatingInput2" label="Celular">
        <Form.Control
          className={styles.customInput}
          type="text"
          placeholder="Celular"
          /* onKeyDown={(e) => useOnlyNumbers(e)} */
          {...register('phone', {
            required: true,
            pattern: /[9][0-9]{8,11}$/i,
            validate: (value, formValues) =>
              value === process.env.NEXT_PUBLIC_USERPHONE,
          })}
        />
      </FloatingLabel>
      {errors.phone?.type === 'required' && (
        <p className="fs-12 lh-1 text-danger">
          *Tiene que ingresar un número de celular
        </p>
      )}
      {errors.phone?.type === 'pattern' && (
        <p className="fs-12 lh-1 text-danger">
          *El número de celular ingresado no es válido.
        </p>
      )}
      {errors.phone?.type === 'validate' && (
        <p className="fs-12 lh-1 text-danger">
          *El número de celular ingresado es incorrecto.
        </p>
      )}
      <div className="d-flex flex-column" style={{ rowGap: '.5rem' }}>
        <Form.Check
          type="checkbox"
          id="default-checkbox1"
          label="Acepto la Política de Privacidad"
          className="d-flex align-items-center BRSonomaRegular fs-12 m-0"
          style={{ columnGap: '.75rem' }}
          {...register('privacyCheck', { required: true })}
        />

        <Form.Check
          type="checkbox"
          id="default-checkbox2"
          label="Acepto la Política de Comunicaciones Comerciales"
          className="d-flex align-items-center BRSonomaRegular fs-12 m-0"
          style={{ columnGap: '.75rem' }}
          {...register('commercialCheck', { required: true })}
        />
      </div>

      <p
        className="text-decoration-underline text-gray100 fs-12 BRSonomaMedium fw-semibold"
        style={{ letterSpacing: '0.1px' }}
      >
        Aplican Términos y Condiciones.
      </p>
      <SubmitButton status={statusButton} />
    </Form>
  );
};

export default customForm;
