import React from 'react';
import './Navbar.css';
import { MDBContainer, MDBNavbar, MDBBtn } from 'mdb-react-ui-kit';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
    return (

        <MDBNavbar expand='lg' light style={{ backgroundColor: '#DE3163' }}>
            <MDBContainer fluid>
                <Link href="#"><HomeIcon /></Link>
                <Link href="#"><AccountCircleIcon /></Link>
                <Link href="#"><ChatIcon /></Link>
                <Link href="#"><PeopleAltIcon /></Link>
                <form className='d-flex flex-row'>
                    <input type='search' className='form-control' placeholder='Pesquisar' aria-label='Pesquisar' />
                    <MDBBtn color='primary'><SearchIcon /></MDBBtn>
                </form>
                <Link href="#"><LogoutIcon /></Link>
            </MDBContainer>
        </MDBNavbar>




    );
}

export default Navbar;