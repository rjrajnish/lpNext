import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  CardActions,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import Product from '../../models/Product';
import db from '../../utils/db';
import axios from 'axios';
import { Store } from '../../utils/Store';
import { getError } from '../../utils/error';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import data from '../../utils/data';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeContent from '../../components/HomeContent';

export default function ProductScreen(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { product } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `/api/products/${product._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      setLoading(false);
      enqueueSnackbar('Review submitted successfully', { variant: 'success' });
      fetchReviews();
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`/api/products/${product._id}/reviews`);
      setReviews(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = async () => {
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
  console.log(product.relateImages[1]);

  const [defaultImg, setDefaultImg] = useState(product.relateImages[0]);

  return (
    <Layout title={product.name} description={product.description}>
      <br />
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={defaultImg}
            alt={product.name}
            width={520}
            height={400}
            layout="responsive"
            loading="eager"
          ></Image>
          <br />

          {/* related images */}
          <Grid container>
            {product.relateImages.map((p, i) => (
              <Grid item xs={3} sm={3} md={3}>
                <Card>
                  <Image
                    key={i}
                    src={`${p}`}
                    alt={product.name}
                    width={6}
                    height={4}
                    onClick={() => setDefaultImg(p)}
                    layout="responsive"
                    loading={
                      product.relateImages.length === i + 1 ? 'eager' : 'lazy'
                    }
                  ></Image>{' '}
                </Card>{' '}
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* dsds */}
        <Grid item md={6} xs={12}>
          <Grid>
            <List>
              <ListItem key={product._id}>
                <Typography component="h1" variant="h1">
                  {product.name} LAPTOP (CORE {product.core}/ {product.ram}/{' '}
                  {product.disk})
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">Price:₹ {product.price}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Status:</Typography>

                <Typography>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </Typography>
              </ListItem>
            </List>

            <List key={product._id} style={{ margin: '0 40px ' }}>
              <Typography variant="h5">HIGHLIGHTS</Typography>

              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  Brand: {product.brand}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  Core: {product.core}{' '}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  Generation: {product.generation}{' '}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  RAM: {product.ram}{' '}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  Memory: {product.disk}{' '}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {' '}
                  <ArrowRightIcon />
                  Display: {product.display}{' '}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Card>
              <List key={product._id}>
                <CardActions spacing={2} className={classes.cardButton}>
                  <Button
                    fullWidth
                    className={classes.whatsIcon}
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    href={'https://web.whatsapp.com/'}
                  >
                    More Info
                  </Button>
                  <Button
                    fullWidth
                    startIcon={<HomeIcon />}
                    variant="contained"
                    color="primary"
                    onClick={addToCartHandler}
                  >
                    Add cart
                  </Button>
                </CardActions>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      {/* table descripton */}
      <Grid>
        <Typography variant="h5">Description</Typography>
        <hr />
        <List>
          <ListItem>
            <Table>
              <TableHead>Processor And Memory Features</TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Modal Number</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> {product.modal}{' '}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Processor Name</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> {product.core}{' '}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Graphic Processor</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> Intel Integrated HD Graphics
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RAM Type</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> {product.ram}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> {product.disk} HHD
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Table>
              <TableHead>Additional Features</TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>OS Architecture</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> 64 bit processor{' '}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Operating System </TableCell>
                  <TableCell>
                    <ArrowRightIcon /> Windows 10
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Screen Resolution </TableCell>
                  <TableCell>
                    <ArrowRightIcon /> 1600 x 900 pixel
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wireless LAN</TableCell>
                  <TableCell>
                    <ArrowRightIcon /> 802.11 a/b/g/n
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ethernet</TableCell>
                  <TableCell>
                    <ArrowRightIcon />
                    Gigabit Ethernet
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Generic Name </TableCell>
                  <TableCell>
                    <ArrowRightIcon /> Refurbished laptops ,Commercial laptops
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ListItem>
        </List>
      </Grid>
      {/* product page description */}
      <br />
      <Grid container>
        <Grid item>
          <Typography variant="h5"> About Product</Typography>
          <hr />
          <br />
          <HomeContent />
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
