import { Grid,Card,Link, Box } from "@material-ui/core"
import NextLink from "next/link"
export default function Banner2(){
    return(
        <Box>
        <Grid container spacing={3} >
            <Grid item md={6} xs={12} sm={12} >
                <Card  ><NextLink
            
            href= '/'
            passHref
          >
            <Link>
              <img
                src= "http://lapybazaar.com/img/dell.jpg"
                alt= "hh"
                width='100%'
              ></img>
            </Link>
          </NextLink></Card>
               
            </Grid>
            <Grid  item md={6} xs={12} sm={12}  >
            <Card  ><NextLink
            
            href= '/'
            passHref
          >
            <Link>
              <img
                src= "http://lapybazaar.com/img/hp.jpg"
                alt= "hh"
                width='100%'
              ></img>
            </Link>
          </NextLink></Card>
            </Grid>

        </Grid>
        </Box>
    )
}