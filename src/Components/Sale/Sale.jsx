import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Disney from '../../imgs/disney.jpg';
import Paris from '../../imgs/paris.jpeg';
import Menu from '../Navbar/Menu';
import Text from '../Sale/Text';



export default function ActionAreaCard() {
    return (
        
        <>
            <Menu></Menu>
            <Text></Text>
        <Grid
            container spacing={2} columns={16}
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
                            img src={Disney}
                            alt="Disney"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Disney
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
                            image={Paris}
                            alt="Paris"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Paris
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