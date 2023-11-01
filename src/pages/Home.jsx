import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Select from "react-select";
import ProductsSection from '../components/ProductsSection';
import { productsData } from '../constants/constants';


const MainBox = styled(Box)({
    padding:"2rem 8rem",
    display:'flex',
    flexDirection:'column',
    color:'#000'
})
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


    const[filteredProducts , setFilteredProducts ] = useState(null);
    const[refresh, setRefresh] = useState(null);

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

        if(action.name==='categoryFilter'){
            const products = productsData.filter( product => product.category === selectedItem.value);
            setFilteredProducts(products);
        }
        else{
            setRefresh( prev => !prev);
            let products;
            if(selectedItem.value==='low to high'){
                console.log('low to high');
                products = productsData.sort( function(a,b){ return a.price - b.price });
 
            }
            else{
                console.log('high to low');
                products = productsData.sort( function(a,b){ return b.price - a.price });
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
        <ProductsSection filteredProducts={filteredProducts} refresh={refresh}/>
    </MainBox>
  )
}

export default Home