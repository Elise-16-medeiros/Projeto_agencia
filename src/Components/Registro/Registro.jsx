import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Registro.css'


function Registro() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Confirmar senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Nome(Nome Social)</Form.Label>
                <Form.Control placeholder="Nome" />
            </Form.Group>


            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Identidade de Gênero</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Cisgênero</option>
                        <option>Transgênero</option>
                        <option>Binário</option>
                        <option>Não-Binário</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Orientação Sexual</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Lésbica</option>
                        <option>Gay</option>
                        <option>Bissexual</option>
                        <option>Pansexual</option>
                        <option>Outros</option>
                    </Form.Select>
                </Form.Group>
                
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Registro;