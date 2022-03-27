import React from "react";
import Layout from "../components/Layout";
import HomeContent from ".././components/HomeContent"
import { Typography } from "@material-ui/core";

function About() {
  return <Layout>
    <br />
    <div>
      <Typography   color='inherit' align='center'   variant='h5' >About Us</Typography>
    </div>
    <HomeContent />

  </Layout>;
}

export default About;
