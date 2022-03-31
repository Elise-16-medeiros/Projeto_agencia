import * as React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../imgs/logo.png';



export default function Menu() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="nav_top">
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-around">

            <h5>Agência Mochileiro</h5>
          </div>
        </div>
      </Navbar>

      <Navbar className="navbar navbar-expand-lg navbar-light shadow">
        <Container className="container d-flex justify-content-between align-items-center">

          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="40"
              className="navbar-brand align-self-center"
            />
          </Navbar.Brand>


          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="main_nav" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Travel">Travel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Sale">Sale</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Register">Regitro</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

    </>

  );
}
