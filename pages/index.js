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
  Button,
  CardContent,
  Box,
  List,
  ListItem,
  Paper,
} from '@material-ui/core';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import ProductItem from '../components/ProductItem';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';
import Banner2 from '../components/Banner2';
import HomeContent from '../components/HomeContent';
import Image from 'next/image';
import Register from './register';
import render from 'next';
import EnquiryModal from '../components/EnquiryModal';

export default function Home(props) {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      <EnquiryModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
      <Layout>
        <Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Carousel
                className={classes.mt1}
                animation="pause"
                autoPlay={false}
              >
                {featuredProducts.map((product) => (
                  <Grid item>
                    <Image
                      key={product._id}
                      src={product.featuredImage}
                      alt={product.name}
                      width={600}
                      height={285}
                      layout="responsive"
                      
                    ></Image>
                    
                    <List className={classes.bnrcss}>
                      <ListItem>
                        <Typography variant="h4" >
                        LapyBazaar 
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={handleOpen}
                        >
                          Enquiry Now
                        </Button>
                      </ListItem>
                    </List>
                    
                  </Grid>
                ))}
              </Carousel>
            </Grid>
            <Grid item md={4} xs={12} sm={12} lg={4}>
              <Card style={{ height: 200, marginTop: 15, marginBottom: 5 }}>
                <NextLink href="/" passHref>
                  <Link>
                    <Image
                      src="/img/dell.jpg"
                      alt="hh"
                      width={425}
                      height={200}
                      layout="responsive"
                      loading="lazy"
                    ></Image>
                  </Link>
                </NextLink>
                <List className={classes.linkg}>
                  <ListItem>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleOpen}
                    >
                      Enquiry Now
                    </Button>
                  </ListItem>
                </List>
              </Card>

              <Card style={{ height: 200, marginBottom: 13 }}>
                <NextLink href="/" passHref>
                  <Link>
                    <Image
                      src="/img/hp.jpg"
                      alt="hh"
                      width={425}
                      height={200}
                      layout="responsive"
                    ></Image>
                  </Link>
                </NextLink>
                <List className={classes.linkgg}>
                  <ListItem>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleOpen}
                    >
                      Enquiry Now
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
          <Typography variant="h1">Popular Products</Typography>
          <Grid container spacing={3}>
            {topRatedProducts.map((product) => (
              <Grid item xs={12} md={3} sm={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          {/* banner 2 componaent */}
          <Banner2 />
          <br />
          <br />
          <Typography variant="h1">Best Commercial Products</Typography>
          <Grid container spacing={3}>
            {topRatedProducts.map((product) => (
              <Grid item xs={12} md={3} sm={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            style={{ textAlign: 'center', margin: '20px 0', fontSize: '20px' }}
          >
            <NextLink href="/category-products" passHref>
              <Link>View All</Link>
            </NextLink>
          </Grid>

          <br />
          <br />

          <br />
        </Grid>
        {/* home contetn component */}
        <br />
        <HomeContent />
      </Layout>
    </>
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
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(8);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
