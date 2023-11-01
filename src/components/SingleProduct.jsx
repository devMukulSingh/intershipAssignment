import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const MainBox = styled(Box)({
    background:'#fff',
    borderRadius:5,
    width:'15rem',
    height:'20rem',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:'2rem 0',
    padding:'1rem 1rem',
    color:'#000',
    cursor:'pointer',
    '&:hover':{
        boxShadow:' 0px 0px 18px 14px rgba(0,0,0,0.1)',
        transition:'0.3s ease-in-out'
    }
})
const DetailsBox = styled(Box)({
    marginTop:"auto"
})
const Description = styled(Typography)({
    display:'-webkit-box',
    WebkitBoxOrient:'vertical',
    WebkitLineClamp:'2',
    overflow:'hidden'
})
const SingleProduct = ({ product }) => {
  return (
    <MainBox>

        <img src={product.url} style={{ height:'12rem',width:'100%',objectFit:"contain"}}/>

        <DetailsBox>
            <Description>
                {product.title}
            </Description>
            <Typography sx={{ fontWeight:600,marginTop:1,textAlign:'center'}}>
                ₹{product.price}
            </Typography>
        </DetailsBox>

    </MainBox>
  )
}

export default SingleProduct