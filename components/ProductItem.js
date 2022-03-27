import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
  Link,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useStyles from '../utils/styles';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles();

  const whatsAppLink = 'https://web.whatsapp.com/';

  return (
    <Card>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
          // component="img"
          // image={product.image}
          // title={product.name}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={300}
              loading="lazy"
              layout="responsive"
            ></Image>
          </CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>₹{product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions spacing={2} className={classes.cardButton}>
        <Button
          size="small"
          className={classes.whatsIcon}
          variant="contained"
          startIcon={<WhatsAppIcon />}
          href={'https://web.whatsapp.com/'}
        >
          More Info
        </Button>

        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => addToCartHandler(product)}
          startIcon={<HomeIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
