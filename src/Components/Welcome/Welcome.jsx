import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner, MDBCarouselItem, MDBTypography } from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import BasicModal from '../ModalWelcome/ModalWelcome';
import './Welcome.css';


function Welcome() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>

                    <MDBCarousel className="carrossel" interval={5000}>
                        <MDBCarouselInner>
                            <MDBCarouselItem className='active'>
                                <MDBCarouselElement src='https://skillroads.com/images/blog//workplace_friendship.jpg' alt='...' />
                                <MDBCarouselCaption>
                                    <MDBTypography tag='div' className='texto display-5 pb-3 mb-3 border-bottom'>
                                        Bem vindos ao ABAR
                                    </MDBTypography>
                                    <MDBTypography className='texto lead mb-0'>Rede social voltada para o público LGBTQIA+.</MDBTypography>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://static.toiimg.com/photo/84825827.cms' alt='...' />
                                <MDBCarouselCaption>
                                    <MDBTypography tag='div' className='texto display-5 pb-3 mb-3 border-bottom'>
                                        Conecte-se
                                    </MDBTypography>
                                    <MDBTypography className='texto lead mb-0'>Primeira plataforma voltada unicamente para se fazer amizades.</MDBTypography>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://miro.medium.com/max/900/1*IKmSNsMAI1AssgIayxtpnw.jpeg' alt='...' />
                                <MDBCarouselCaption>
                                    <MDBTypography tag='div' className='texto display-5 pb-3 mb-3 border-bottom'>
                                        Saia do armário
                                    </MDBTypography>
                                    <MDBTypography className='texto lead mb-0'>Aqui você fica a vontade sendo quem você é, em um ambiente super acolhedor.</MDBTypography>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </Grid>

               <Grid item xs={4}>
                    <BasicModal />
                </Grid>
               
        </Grid>

    );
}



export default Welcome;