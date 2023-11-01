import React from 'react';
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    gap:'1rem',
    justifyContent:"center",
    background:'#000',


})
const NavItem = styled(Typography)`
    cursor:pointer,
`
const Header = () => {
  return (
    <Box>
        <AppBar position='static' sx={{width:"100vw",}}>
            <StyledToolbar>
                <NavItem variant='h6'>Home</NavItem>
                <NavItem variant='h6'>About</NavItem>
                <NavItem variant='h6'>Contact</NavItem>
                <NavItem variant='h6'>Store</NavItem>

            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Header