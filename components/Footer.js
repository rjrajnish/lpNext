import { Box, Container, Grid, Link } from '@material-ui/core';
import NextLink from 'next/link';
import useStyles from '../utils/styles';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box color="white">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3} md={3}>
              <Box className={classes.footerQuick}>QUICK SHOP</Box>
              <Box className={classes.footerQuickLinks}>
                <Box>
                  <NextLink href="/" passHref>
                    <Link>Home</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/contact" passHref>
                    <Link>Contact</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/services" passHref>
                    <Link>Services</Link>
                  </NextLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className={classes.footerQuick}>Account</Box>
              <Box className={classes.footerQuickLinks}>
                <Box>
                  <NextLink href="/login" passHref>
                    <Link>Login</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/register" passHref>
                    <Link>register</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/cart" passHref>
                    <Link>My Account</Link>
                  </NextLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className={classes.footerQuick}>Our Products</Box>
              <Box className={classes.footerQuickLinks}>
                <Box>
                  <NextLink href='/category-products/secondhand-refurbished-dell-laptops' passHref>
                    <Link>Refurbished Dell Laptops</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href='/category-products/secondhand-refurbished-hp-laptops' passHref>
                    <Link>Refurbished HP Laptops</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href='/category-products/secondhand-refurbished-lenovo-laptops' passHref>
                    <Link>Refurbished Lenovo Lpatops</Link>
                  </NextLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className={classes.footerQuick}>Messages</Box>
              <Box className={classes.footerQuickLinks}>
                <NextLink href="/contact" passHref>
                  <Link bgcolor="white">Enquiry Now</Link>
                </NextLink>
              </Box>
              <Box className={classes.socialFooter}>
                <SocialIcons />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <hr />
        <Box className={classes.footerPad}>
          Lapy<span>Bazaar</span> &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </>
  );
}
