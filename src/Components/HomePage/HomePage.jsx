import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './HomePage.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (

    <Stack className='publicacao'
      justifyContent="center"
      alignItems="flex-start"
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }} >

      <Item>
        <Avatar alt="Remy Sharp" src="https://cabanadoleitor.com.br/wp-content/uploads/2021/10/Komi-san.jpg"
          sx={{ width: 56, height: 56 }} />
      </Item>

      <Item>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Postagem do dia</Form.Label>
            <Form.Control as="textarea" size="lg"  />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Publicar
          </Button>
        </Form>

      </Item>

    </Stack>



  );
}

export default HomePage;