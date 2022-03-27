import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
// import Link from 'next/link';
 
export default function SocialIcons(){
    const classes=useStyles()
return(
    <div   >
        
            <NextLink href="https://www.facebook.com/">
          <FacebookIcon      className={classes.facebook}  /></NextLink> 
          <NextLink href="https://www.instagram.com/?hl=en"> 
               <InstagramIcon    className={classes.instaicon}   /> 
               </NextLink>
               <NextLink href="https://www.youtube.com/"> 
< YouTubeIcon    className={classes.youtubicon}  />
</NextLink>
<NextLink href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"> 
< TwitterIcon   className={classes.twtricon}  />
</NextLink>
    </div>
)


}