import { Box, Container, Grid, Link } from "@material-ui/core";
import NextLink from 'next/link';
import useStyles from "../utils/styles";
import SocialIcons from "./SocialIcons";

 

export default function Footer() {
    const classes=useStyles( )
    return (
      <>
        <Box
        //   px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
         bgcolor= 'rgba(0, 0, 0, 0.87)'
          color="white"
          
        >
              
               
                        <Container maxWidth="lg"  >
            <Grid container spacing={3}      >
              <Grid item xs={12} sm={3} md={3}  >
            
                <Box borderBottom={1}   fontSize="30px">QUICK SHOP</Box>
                <Box  className={classes.footerlink} >
                <Box  >
           <NextLink  href="/" color="inherit" passHref>
                  <Link >
                    Home

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/contact" color="inherit" passHref>
                  <Link >
                  Contact

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/services" color="inherit" passHref>
                  <Link >
                  Services

                  </Link></NextLink>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}   fontSize="30px">Account</Box>
                <Box className={classes.footerlink} >
                <Box  >
                <NextLink  href="/login" color="inherit" passHref>
                  <Link >
                 Login

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/register" color="inherit" passHref>
                  <Link >
                 register

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/cart" color="inherit" passHref>
                  <Link >
                My Account

                  </Link></NextLink>
                </Box>
                </Box>
              </Grid>
              <Grid
               item xs={12} sm={3}>
                <Box borderBottom={1}   fontSize="30px">Our Products</Box>
                <Box className={classes.footerlink} >
                <Box>
                <NextLink  href="/dell" color="inherit" passHref>
                  <Link >
                    Refurbished Dell Laptops

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/hp" color="inherit" passHref>
                  <Link >
                  Refurbished Dell HP

                  </Link></NextLink>
                </Box>
                <Box>
                <NextLink  href="/lenovo" color="inherit" passHref>
                  <Link >
                  Refurbished Dell Lenovo

                  </Link></NextLink>
                </Box>
                </Box>
              </Grid>
              <Grid
               item xs={12} sm={3}>
                <Box borderBottom={1} fontSize="30px" >Messages</Box>
                <Box>
                
                  <NextLink href="/contact" passHref >
                  <Link  bgcolor="white">Enquiry Now</Link> 
                   </NextLink> 
                   
                </Box>
                <Box>
                
               {/* social icons component */}
               <SocialIcons />
                  
                </Box>
              </Grid>
            </Grid>
           
          </Container>
          <hr />
            <Box  className={classes.footerlogo}   >
              LapyBazaar &reg; {new Date().getFullYear()}
            </Box>
        </Box>
      </>
    );
  }