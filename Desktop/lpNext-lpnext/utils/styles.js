import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
    width: '100%',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
    maxWidth: '90%',
  },
  footer: {
    padding: '50px 0 20px 0',
    backgroundColor: '#203040',
    textAlign: 'left',
    width: '100%',
  },
  footerPad: { paddingBottom: '20px', textAlign: 'center',
  
   '& span': {color:'#02b6e5'} },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
    underline: 'always',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem'  },
  // search
  searchSection: {
    display: 'none',
     
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    fontSize: '15px',
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    '& button: hover':{
      backgroundColor:'#02b6e5' ,
     
    }
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#02b6e5',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#fff',
    },
  },
  
  sort: {
    marginRight: 5,
  },
  phone: {
    color: 'white',
  },
  facebook: {
    color: ' white',
    cursor: 'pointer',
    fontSize: '35px',
    marginRight: '10px',
  },
  youtubicon: {
    color: ' white',
    cursor: 'pointer',
    fontSize: '35px',
    marginRight: '10px',
  },
  twtricon: {
    color: ' white',
    cursor: 'pointer',
    fontSize: '35px',
    marginRight: '10px',
  },
  instaicon: {
    color: ' white',
    cursor: 'pointer',
    fontSize: '35px',
    marginRight: '10px',
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
  // footer style
  footerlink: {
    fontSize: '15px',
    '&:hover': {
      color: '#02b6e5',
    },
    color: 'white',
  },
  footerlogo: {
    color: 'white',
    fontsize: '25px',
    textAlign: 'center',
  },
  // banner and carousel css
  bannercard: {
    width: '100%',
  },
  cardButton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // margin:'0 10px '
  },
  featuredImage: {
    width: '100%',
    height: '402px',
  },
  linkhover: {
    color: 'white',
    '&:hover': {
      color: '#02b6e5',
    },
    textAlign: 'right',
  },
  whatsIcon: {
    color: 'white',
    backgroundColor: '#25D366',
  },
  linkg: {
    top: '25%',
    zIndex: '999',
    position: 'absolute',

    marginLeft: '9%',
  },
  linkgg: {
    top: '50%',
    zIndex: '999',
    position: 'absolute',

    marginLeft: '9%',
  },
  bnrcss: {
    position: 'absolute',
    color: 'black',
    marginTop: '-20%',
    right: '30%',
  },
  bannerCaption: {
    position: 'absolute',
    top: '30%',
    textAlign: 'right',
    
    right: '30px',
    '& h4': {
      fontSize: '24px',
    },
    '& button':{
      marginTop:'10px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      marginBottom: '15px',
      top: '20%',
      '& h4': {
        fontSize: '15px',
        textAlign: 'right',
      },
    },
  },
  
  bannerCaptionP: {
    fontSize: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },
  bannerCards: { marginTop: '15px', marginBottom: '5px' },
  enquiryModal: {
    position: 'absolute',
    textAlign: 'center',
    width: '400px',
    margin: 'auto',
  },
  marTop20: { marginTop: '50px' },
  enquiryModalBox: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    margin: ' 5% ',
    '& button': {
      backgroundColor: '#777',
    },
  },
  viewAllBtn: { textAlign: 'center' },
  viewAll: {
    '& a': {
      border: '1px solid rgb(1, 127, 160)',
      padding: ' 8px 20px 5px 20px',
      display: 'inline-block',
      TextDecoderStream: 'none',
      borderRadius: '4px',
      margin: '30px 0 0 0',
      alignItems: 'center',
    },
  },
  footerQuick: {
    fontSize: '20px',
    margin: '0px 0px 20px',
  },
  footerQuickLinks: {
    '& a': {
      color: '#fff',
      fontSize: '15px',
      lineHeight: '30px',
    },
  },
  socialFooter: { marginTop: '20px' },

  hpcontent:{
    marginTop:'50px',
    fontSize:'20px'
  },
  ctaBtn :{
    animation: "smoothBounce 1s",
    animationDirection: "alternate",
    animationIterationCount: "infinite"
  }
}));
export default useStyles;
