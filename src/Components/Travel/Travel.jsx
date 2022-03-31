import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Angra from '../../imgs/angra.jpg';
import Cancun from '../../imgs/cancun.jpg';
import Jalapao from '../../imgs/jalapao.jpg';
import Noronha from '../../imgs/noronha.jpg';
import Pelourinho from '../../imgs/pelourinho.jpg';
import Redentor from '../../imgs/redentor.jpg';
import Menu from "../Navbar/Menu";
import Types from '../Travel/Types';





export default function ActionAreaCard() {
  return (
    <>
      <Menu></Menu>
      <Types></Types>
      <Grid
        container spacing={2} columns={20}
        direction="row"
        justifyContent="space-around"
        alignItems="baseline"
      >
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Angra}
                alt="Angra"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Angra
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Cancun}
                alt="Cancún"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cancún
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Jalapao}
                alt="Jalapão"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jalapão
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Noronha}
                alt="Fernando de Noronha"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fernando de Noronha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Pelourinho}
                alt="Pelourinho"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pelourinho
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={Redentor}
                alt="Cristo Redentor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cristo Redentor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}




