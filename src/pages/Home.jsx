import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Select from "react-select";
import ProductsSection from '../components/ProductsSection';
import { productsData } from '../constants/constants';


const MainBox = styled(Box)(({theme}) =>({
    padding:"2rem 2rem",
    color:'#000',
    width:'75rem',
    display:'flex',
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",

    [theme.breakpoints.down('sm')]:{
        padding:'1rem'
    }

}))
const FilterBox = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap:"1rem"
})
const Filters = styled(Select)({
    width:'20rem',
    color:'#000',
})
//////////////////////////////////////////////////////////////////////
const Home = () => {

    const[filteredProducts , setFilteredProducts ] = useState(productsData);
    const[refresh, setRefresh] = useState(null);
    const[pageNum,setPageNum] = useState(0);

    const options1 = [
        { value : 'computer electronics' , label:'Computer electronics'},
        { value : 'personal care' , label : 'Personal Care' },
        { value: 'motor vehicles' , label : 'Motor vehicles' },
        { value: 'mobile accessories' , label : 'Mobile accessories' }
    ]
    const options2 = [
        { value: 'high to low' , label : 'Price high to low'},
        { value: 'low to high' , label : 'Price low to high'},
    ]

    const handleFilters = ( selectedItem, action) => {

        setPageNum(0);
        if(action.name==='categoryFilter'){
            const products = productsData.filter( product => product.category === selectedItem.value);
            setFilteredProducts(products);
        }
        else{
            setRefresh( prev => !prev);
            let products;
            if(selectedItem.value==='low to high'){
                products = [...filteredProducts.sort( function(a,b){ return a.price - b.price })];
            }
            else{
                products = [...filteredProducts.sort( function(a,b){ return b.price - a.price })];
            }
            setFilteredProducts(products);

        }
    }

  return (
    <MainBox>
        <FilterBox>
            <Typography variant='h5'>Sort Products</Typography>
            <Filters 
                name='categoryFilter'
                options={options1}
                onChange={ handleFilters }
                closeMenuOnSelect = { true }
                />
                <Filters 
                name='priceFilter'
                options={options2}
                onChange={ handleFilters }
                closeMenuOnSelect = { true }
                />
        </FilterBox>
        <ProductsSection filteredProducts={filteredProducts} refresh={refresh} pageNum={pageNum} setPageNum={setPageNum}/>
    </MainBox>
  )
}

export default Home