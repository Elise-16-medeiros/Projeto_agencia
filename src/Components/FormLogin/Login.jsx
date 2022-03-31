import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Menu from "../Navbar/Menu";
import FormLoginText from './FormLoginText';
import "./Login.css";

function Login() {
  return (
    <>
      <Menu></Menu>
      <FormLoginText></FormLoginText>

      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Continuar conectado" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </>



  );
}

export default Login;