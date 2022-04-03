/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";
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
} from "@material-ui/core";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { createRef, useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import ProductItem from "../components/ProductItem";
import Carousel from "react-material-ui-carousel";
import useStyles from "../utils/styles";
import Banner2 from "../components/Banner2";
import HomeContent from "../components/HomeContent";
import Image from "next/image";

import EnquiryModal from "../components/EnquiryModal";
import { getError } from "../utils/error";
import { useSnackbar } from "notistack";

export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(Store);
  const { topRatedProducts, popularProducts } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    setLoading(true);
    try {
      const { data } = await axios.get(`/api/products/${product._id}`);
      setLoading(false);
      enqueueSnackbar("Product added successfully", { variant: "success" });

      if (data.countInStock < quantity) {
        window.alert("Sorry. Product is out of stock");
        return;
      }
      dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
      router.push("/cart");
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);
  const wrapper = createRef();
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
              <Carousel ref={wrapper} className={classes.mt1} animation="slide">
                <Grid item>
                  <Image
                    key="banner1"
                    src="/lapyBanner/1st.jpg"
                    alt="SECONDHAND LAPTOP"
                    width={600}
                    height={285}
                    layout="responsive"
                    loading="eager"
                  ></Image>

                  <Grid item className={classes.bannerCaption}>
                    <Typography variant="h4">
                      CERTIFIED IMPORT REFURBISHED LAPTOPS
                    </Typography>
                    <Typography className={classes.bannerCaptionP}>
                      {" "}
                      WITH <span style={{ color: "red" }}> 1 YEAR </span>
                      WARRENTY{" "}
                    </Typography>

                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleOpen}
                    >
                      Enquiry Now
                    </Button>
                  </Grid>
                </Grid>

                <Grid item>
                  <Image
                    key="banner2"
                    src="/lapyBanner/2nd.jpg"
                    alt="SECONDHAND LAPTOP"
                    width={600}
                    height={285}
                    layout="responsive"
                    loading="eager"
                    onClick={handleOpen}
                  ></Image>
                </Grid>

                <Grid item>
                  <Image
                    key="banner3"
                    src="/lapyBanner/3rd.jpg"
                    alt="SECONDHAND LAPTOP"
                    width={600}
                    height={285}
                    layout="responsive"
                    loading="eager"
                    onClick={handleOpen}
                  ></Image>
                </Grid>
              </Carousel>
            </Grid>
            <Grid item md={4} xs={12} sm={12} lg={4}>
              <Card className={classes.bannerCards}>
                <NextLink href="/" passHref>
                  <Link>
                    <Image
                      src="/lapyBanner/cardBanner1.jpeg"
                      alt="hh"
                      width={425}
                      height={200}
                      layout="responsive"
                      loading="eager"
                    ></Image>
                  </Link>
                </NextLink>
              </Card>

              <Card className={classes.bannerCards}>
                <NextLink href="/" passHref>
                  <Link>
                    <Image
                      src="/lapyBanner/cardbanner2.jpeg"
                      alt="hh"
                      width={425}
                      height={200}
                      loading="eager"
                      layout="responsive"
                    ></Image>
                  </Link>
                </NextLink>
              </Card>
            </Grid>
          </Grid>
          <Typography variant="h1">Popular Products</Typography>
          <Grid container spacing={3}>
            {popularProducts.map((product) => (
              <Grid item xs={12} md={3} sm={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.viewAllBtn}>
            <Grid className={classes.viewAll}>
              <NextLink href="/category-products" passHref>
                <Link>View All</Link>
              </NextLink>
            </Grid>
          </Grid>
          <br />

          <Banner2 />

          <Typography variant="h2" className={classes.marTop20}>
            Best Commercial Products
          </Typography>
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
          <Grid className={classes.viewAllBtn}>
            <Grid className={classes.viewAll}>
              <NextLink href="/category-products" passHref>
                <Link>View All</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>

        <br />
        <HomeContent />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const popularProductsDocs = await Product.find({}).lean().limit(8);
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .limit(8);
  await db.disconnect();
  return {
    props: {
      popularProducts: popularProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
