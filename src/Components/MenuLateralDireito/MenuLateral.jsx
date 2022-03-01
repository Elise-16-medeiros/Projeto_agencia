import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { indigo } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PhotoIcon from '@mui/icons-material/Photo';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import './MenuLateral.css';

const preventDefault = (event) => event.preventDefault();

function MenuLateral() {
    return (
        <Box className= "menu-direito" sx={{ width: '160px', height: '590px'}} onClick={preventDefault} >


            <MenuList>

                <Card className="zoom" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cabanadoleitor.com.br/wp-content/uploads/2021/10/Komi-san.jpg" alt="Avatar" />
                    <Card.Body>
                   
                        <Card.Title><Button variant="contained">Squad 31</Button></Card.Title>
                        
                        <Card.Text>
                            Grupo Formado por seis pessoas.
                        </Card.Text>
                    </Card.Body>
                </Card>
                


                <MenuItem>
                <ListItemIcon>
                <AccountCircleIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Perfil</Link></MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                <FeedIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Feed</Link></MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                <ChatIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Mensagens</Link></MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                <PhotoIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Fotos</Link></MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                <PersonAddIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Solicitações de amizade</Link></MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                <SettingsIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Configurações</Link></MenuItem>

    
            </MenuList>
            </Box>
    );
}

export default MenuLateral;

