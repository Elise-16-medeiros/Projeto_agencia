
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';
import Grid from '@mui/material/Grid';


import './MenuEsquerdo.css';


export default function MenuEsquerdo() {
  return (

    <Grid className="amigos" container
    direction="column"
    justifyContent="flex-start">
    
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem  key="Subheader" cols={2}>
        <ListSubheader sx={{ color: indigo[500] }}  component="div">
          <Typography variant="h4" gutterBottom component="div">
          <strong>Amigos</strong>
          </Typography>
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: indigo[500] }}
                aria-label={`info about ${item.title}`}
              >
                <PeopleAltIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    
    </Grid>
 
  );
}

const itemData = [
  {
    img: 'https://www.sabornamesa.com.br/media/k2/items/cache/8212207f146778f83156ffc204ca380c_XL.jpg',
    title: 'Aldione',
    author: '@Dhi Souza',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/originals/5e/98/77/5e9877acae8d2b0f62570607508d5276.jpg',
    title: 'Eder',
    author: '@Drake Montgomery',
  },
  {
    img: 'https://i.pinimg.com/736x/d7/46/f6/d746f6fdc46d9e430258dab7c3c4e6d1.jpg',
    title: 'Elise',
    author: '@Elise Medeiros',
  },
  {
    img: 'https://i.pinimg.com/originals/d1/f5/2b/d1f52b6dad4967e1434803fd2ec6549b.jpg',
    title: 'Igor',
    author: '@Igor One Piece',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/564x/fb/1f/3f/fb1f3f19e5d0c3ce71f03340318163b9.jpg',
    title: 'Lucas',
    author: '@Lucas Samurai',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/6b/84/c6/6b84c6e293f4e8bac6987385dfbd607c.jpg',
    title: 'Thales',
    author: '@Thales gótico',
    rows: 2,
    cols: 2,
    featured: true,
  },

];
