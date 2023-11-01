import React, { useEffect, useState } from 'react';
import { productsData } from '../constants/constants';
import { Box, Grid } from '@mui/material';
import SingleProduct from './SingleProduct';
import styled from '@emotion/styled';
import ReactPaginate from "react-paginate";

const StyledGrid = styled(Grid)({
    display:'flex',
    // gap:10,
})
const StyledPaginate = styled(ReactPaginate)({
    listStyleType:'none',
    display:"flex",
    gap:'3rem',
    textTransform:'capitalize',
    alignItems:"center",
    justifyContent:"center",
    background:'#fff',
    padding:'15px 10px',
    borderRadius:10,
    '& > li':{
        cursor:'pointer',
        fontSize:18,
        '& > a':{
            color:' #485460',   
        }
    },
    '& > li:first-of-child, li:last-of-child':{
        fontSize:20,
        fontWeight:600,
    },
})

const ProductsSection = ({ filteredProducts,refresh,pageNum,setPageNum }) => {


    const[pageCount, setPageCount ] = useState(null);
    const[productsArray, setProductsArray ] = useState(null);

    const productPerPage = 12;
    const pagesVisited = pageNum * productPerPage;
 
    useEffect( () => {
        setPageCount(Math.ceil(filteredProducts.length/productPerPage));
        setProductsArray(filteredProducts?.slice(pagesVisited, productPerPage + pagesVisited));
    },[filteredProducts,pageNum])

    const displayProducts = productsArray?.map( (product,index) => {
        return(
            <Grid item lg={3} md={6} sm={12} key={index}>
                <SingleProduct product={product}/>
            </Grid>
        )
    })

    const handlePagination = ({ selected }) => {
        setPageNum(selected);   
    }

  return (
    <Box>
          <StyledGrid container>
                { displayProducts }
            </StyledGrid>  

            <StyledPaginate
                previousLabel='< previous'
                nextLabel='Next >'
                breakLabel='...'
                pageCount={pageCount}
                onPageChange={ handlePagination }
                containerClassName={'paginationBttns'}
                />
    </Box>
  )
}

export default ProductsSection