import * as React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteAxios from '../Service/ClienteClass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Navbar/Menu';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ButtonsRegister from './ButtonsRegister';
import Button from 'react-bootstrap/Button'
import { Container } from '@mui/material';
import Titulo from './Titulo';
import './Register.css';


function Register() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, email, senha, endereco };

    if (id) {
      ClienteAxios.putCliente(id, cliente).then((response) => {
        navigate("/Register");
      });
    } else {
      ClienteAxios.postCliente(cliente).then((response) => {
        navigate("/Register");
      }).catch(err => console.log(err));
    }
  };

  useEffect(() => {
    function getClienteById() {
      if (id) {
        ClienteAxios.getClienteById(id)
          .then((response) => {
            setNome(response.data.nome);
            setEmail(response.data.email);
            setSenha(response.data.senha);
            setEndereco(response.data.endereco);


          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getClienteById();
  }, [id]);


  return (
    <>
      <Menu></Menu>
      <Titulo></Titulo>
      <Form className="registro">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control placeholder="Nome completo" value={nome}
            onChange={(e) => setNome(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" value={senha}
            onChange={(e) => setSenha(e.target.value)} />
            
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" placeholder="Senha"/>
            
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="Rua Aboborá" value={endereco}
            onChange={(e) => setEndereco(e.target.value)}/>
          
        </Form.Group>
        <Container fluid="md" className="botao">
      <Button as="input" type="submit" value="Submit" onClick={(e) => criarOuEditarCliente(e)} />{' '}
      <Button as="input" type="reset" value="Reset" />
    </Container>
      </Form>
    </>


  );
}

export default Register;
