import React from 'react';
import { AppBar, Box, Toolbar, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    gap:'2rem',
    justifyContent:"center",
    background:'#000',
})
const NavItem = styled('a')({
    cursor:'pointer',
    color:'#fff',
    textDecoration:'none',
    '&:hover':{
        color:'#ecf0f1',
        transition:'0.2s ease-in-out',
        fontSize:25,
        letterSpacing:2
    }
})

const Header = () => {

  return (
    <Box>
        <AppBar position='fixed'>
            <StyledToolbar>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">About</NavItem>
                <NavItem href="/">Contact</NavItem>
                <NavItem href="/">Store</NavItem>

            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Header