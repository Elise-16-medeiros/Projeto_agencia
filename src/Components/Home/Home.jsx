import * as React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Menu from '../Navbar/Menu';


export default function Home() {
    return (
        <>
            <Menu></Menu>


            <Container className="d-flex p-2">

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1643126484644-3b9de6860ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>A melhor agência de viagens do país</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1552911505-bb3b847ba5ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Ofertas imperdíveis</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1643574914412-409598704135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Escolha qualquer destino</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>



        </>


    );
}
