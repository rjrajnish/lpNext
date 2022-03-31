import React from 'react';

import Product from '../../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Grid, Typography, List, ListItem } from '@material-ui/core';
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import useStyles from '../../utils/styles';
import db from '../../utils/db';
import { Store } from '../../utils/Store';
import Image from 'next/image';

export default function DellLaptops(props) {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { topRatedProducts, featuredProducts } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout>
      <Grid container spacing={2}  style={{ marginTop: '30px' }}>
      <Grid  item   xs={12} sm={12} >
      <Image
            src="/lapyBanner/lanovoPageBanner.jpeg"
            alt="lenovo"
            width={1400}
            height={250}
          ></Image>
        </Grid>
        <br />
       
        <Typography variant="h1">SECONDHAND REFURBISHED HP LAPTOPS</Typography>
        <Grid container spacing={3}>
          {topRatedProducts.map((product) => (
            <Grid item xs={12} md={3} sm={4}  key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
        <Grid  className={classes.hpcontent} >
          <List>
            <ListItem>
              <Typography>
                The HP 17 Laptop is thoughtfully designed and delivers
                performance with an AMD processor, fast Wi-Fi technology, and
                loads of storage. Enjoy a more natural and comfortable typing
                position with the lift-hinge design and enlarged click pad. The
                HP 17 design includes sustainable materials like ocean-bound
                plastic and from post-consumer recycled plastic
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">Lift-hinge design</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                The new lift-hinge design elevates the keyboard for a more
                natural and comfortable typing position.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">A faster way to charge</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Get back to work or play without waiting hours to recharge.
                Charge your battery up to 50% within 45 minutes[2] with HP Fast
                Charge. Device comes with Windows 10 and a free Windows 11
                upgrade or may be preloaded with Windows 11. Upgrade timing may
                vary by device. Features and app availability may vary by
                region. Certain features require specific hardware
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({ brand: 'Dell' })
    .lean()
    .sort({});
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
