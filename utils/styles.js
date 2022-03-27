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
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
    width: '100%',
  },
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
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
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
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },
  phone: {
    color: 'white',
  },
  facebook: {
    marginRight: '10px',
    color: 'blue',
    fontSize: '50px',
    cursor: 'pointer',
  },
  youtubicon: {
    margin: '10px',
    color: '#FF0000',
    fontSize: '50px',
    cursor: 'pointer',
  },
  twtricon: {
    margin: '10px',
    color: ' #00acee',
    fontSize: '50px',
    cursor: 'pointer',
  },
  instaicon: {
    margin: '10px',
    color: '#833AB4',
    fontSize: '50px',
    cursor: 'pointer',
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
  bnrcss:{
    position: "absolute",
     color:'black',
    marginTop:"-20%",
    right: "30%"
  }
}));
export default useStyles;
