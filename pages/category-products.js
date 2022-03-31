/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import {
  Grid,
  Link,
  Typography,
  Row,
  Col,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@material-ui/core';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Store } from '../utils/Store';
import ProductItem from '../components/ProductItem';

import useStyles from '../utils/styles';
import Banner2 from '../components/Banner2';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';

export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { state, dispatch } = useContext(Store);
  const { bestCommercialProducts, popularProducts, under20000Products } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;



    setLoading(true);
    try{
      const { data } = await axios.get(`/api/products/${product._id}`);
      setLoading(false);
      enqueueSnackbar('Product added successfully', { variant: 'success' });

      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
      router.push('/cart');

    }catch(err){
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  return (
    <>
      <Layout>
        <Grid container spacing={2} style={{ margin: '50px 0' }}>
          <Typography variant="h1">Popular Products</Typography>
          <Grid container spacing={3}>
            {popularProducts.map((product) => (
              <Grid item md={3} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>

          <br />
          <br />
          <Typography variant="h1">Best Commercial Products</Typography>
          <Grid container spacing={3}>
            {bestCommercialProducts.map((product) => (
              <Grid item md={3} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>

         
          <br />
          <br />
          <Typography variant="h1">REFURBISHED LAPTOPS UNDER 25000</Typography>
          <Grid container spacing={3}>
            {bestCommercialProducts.map((product) => (
              <Grid item md={3} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>

          <br />
          <br />
        </Grid>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const popularProductsDocs = await Product.find({}).lean();

  const bestCommercialProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(8);
   

  await db.disconnect();
  return {
    props: {
      popularProducts: popularProductsDocs.map(db.convertDocToObj),
      bestCommercialProducts: bestCommercialProductsDocs.map(
        db.convertDocToObj
      ),
      
    },
  };
}
