import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import router from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import useStyles from "../utils/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SocialIcons from "../components/SocialIcons";

export default function Contact() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/enquiry/contact", {
        name,
        email,
        phone,
        message,
      });
    } catch (err) {
      return err;
    }

    router.push("/");
  };
  return (
    <Layout>
      <form style={{ marginTop: "20px" }}>
        <Box>
          <Grid container>
            <Grid item md={8}>
              <Typography variant="h4"> Contact Form</Typography>
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
                    {" "}
                    Submit
                  </Button>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Typography variant="h6">
                    LapyBazaar: The One-stop Shopping Destination for Second
                    hand laptop and refurbished laptop.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    The best low cost refurbished laptops are the best
                    alternative for fresh laptops. There are various reasons
                    when an original laptop product is called a refurbished one.
                    With these scenarios, it will be clearer to define the exact
                    meaning of a refurbished laptop that you are looking for, as
                    of now.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4} justifyContent="flex-end">
              <List>
                <ListItem>
                  <Typography variant="h4">Address</Typography>
                </ListItem>
                <hr />
                <List>
                  <ListItem>
                    <Typography>
                      <LocationOnIcon color="primary" /> 123 Street, New York,
                      USA{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <MailIcon style={{ color: "#EA4335" }} />{" "}
                      hello@lapybazaar.com{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <LocalPhoneIcon color="success" /> +91-987654321
                    </Typography>
                  </ListItem>
                </List>
              </List>

              <List>
                <ListItem>
                  <Typography variant="h5">HeadOffice</Typography>{" "}
                </ListItem>
                <hr />
                <ListItem>
                  <Typography>
                    <LocationOnIcon color="primary" /> Basement 359, DLF Phase 1
                    Sector 28 Gurugram, Haryana 122002{" "}
                  </Typography>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Typography variant="h6">Social Media</Typography>
                </ListItem>
                <hr />
                <ListItem>
                  <SocialIcons />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </form>
      {/* contact page content */}
    </Layout>
  );
}
