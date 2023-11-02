import React, { useEffect, useState } from 'react';
import { productsData } from '../constants/constants';
import { Box, Grid } from '@mui/material';
import SingleProduct from './SingleProduct';
import styled from '@emotion/styled';
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)({
    listStyleType:'none',
    display:"flex",
    gap:'2rem',
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
    }

})

const ProductsSection = ({ filteredProducts,pageNum,setPageNum }) => {


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
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                <SingleProduct product={product}/>
            </Grid>
        )
    })

    const handlePagination = ({ selected }) => {
        setPageNum(selected);   
    }

  return (
    <Box>
          <Grid container spacing={1}>
                { displayProducts }
            </Grid>  

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