import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const customForm = () => {
  return (
    <Form>
      <InputGroup className="mb-2">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">DNI</option>
          <option value="2">RUC</option>
        </Form.Select>
        <Form.Floating className="mb-3">
          <Form.Control id="textBox" type="text" />
          <label htmlFor="textBox">DNI</label>
        </Form.Floating>
      </InputGroup>
    </Form>
  );
};

export default customForm;
