import { Grid, Card, Link, Box } from '@material-ui/core';
import NextLink from 'next/link';
import Image from "next/image";
export default function Banner2() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} sm={12}>
          <Card>
            <NextLink  href='/category-products/secondhand-refurbished-dell-laptops' passHref>
              <Link>
                <Image
                
                  src="/lapyBanner/dell.jpg"
                  alt="SECONDHAND LAPTOP"
                  width= {640}
                  height={285}
                  layout='responsive'
                ></Image>
              </Link>
            </NextLink>
          </Card>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <Card>
            <NextLink href='/category-products/secondhand-refurbished-lenovo-laptops' passHref>
              <Link>
                <Image
                  src="/lapyBanner/Lenovo.jpg"
                  alt="SECONDHAND LAPTOPS"
                  width={640}
                  height= {285}
                  layout='responsive'
                ></Image>
              </Link>
            </NextLink>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
