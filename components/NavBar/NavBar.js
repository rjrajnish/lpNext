import { Box, Link, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
 

export const NavBarLink = () => {
  const classes = useStyles();
  return (
    <>
    <List  >
      <ListItem>
        <NextLink href="/search" passHref>
          <Link  className={classes.linkhover}  >Our Products</Link>
        </NextLink>
      </ListItem>
      </List>
      <List   >
      <ListItem>
      <NextLink href="/about" passHref>
          <Link  className={classes.linkhover}>About</Link>
        </NextLink>
      </ListItem>
      </List>
      <List   >
      <ListItem>
      <NextLink href="/services" passHref>
          <Link className={classes.linkhover}>Services</Link>
        </NextLink>
      </ListItem>
      </List>
      <List   >
      <ListItem>
      <NextLink href="/contact" passHref>
          <Link className={classes.linkhover}>Contact Us</Link>
        </NextLink>
      </ListItem>
      </List>
 
      
      </>
  );
};
