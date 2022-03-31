import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from '../utils/styles';
// import { SMTPClient } from 'emailjs';


export default function EnquiryModal({ handleClose, open }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
 const classes =useStyles()

//  const client = new SMTPClient({
//   user: process.env.mail,
//   password: process.env.password,
//   host: 'smtp.gmail.com',
//   ssl:true
// });



  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('hello');
    try {
      const { data } = await axios.post('/api/enquiry/enquiry', {
        name,
        email,
        phone,
        message,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
    // email
    // const client = new SMTPClient({
    //   user: process.env.mail,
    //   password: process.env.password,
    //   host: 'smtp.gmail.com',
    //   ssl:true
    // });
    
    // try{
    
     
    //   client.send(
    //     {
    //       text: `${message}`,
    //       from: process.env.mail,
    //       to: `${email}`,
    //       subject:  'Laptop Enquiry',
         
    //     }
    //     )
    //   }
    // catch(e){
    //   res.status(400).end(JSON.stringify({ message:"Error" }))
    //   return;
    // }
    
   
  //   res.status(200).end(JSON.stringify({ message:'Send Mail' }))
   };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    
      className={classes.enquiryModal}
    >
      <Box
        
        className={classes.enquiryModalBox}
      >
        <Grid>
          <List>
            <ListItem    >
              {' '}<Button  onClick={handleClose}> <CloseIcon  /></Button>
               
            </ListItem>
          </List>

          <Typography variant="h5"> Enquiry Now</Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="contact"
                label="Contact No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                value={message}
                id="message"
                variant="outlined"
                multiline
                rows={4}
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={submitHandler}
              >
                {' '}
                Submit
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Modal>
  );
}
