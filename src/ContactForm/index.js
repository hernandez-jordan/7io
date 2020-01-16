import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Container,
  Typography,
  Button,
  Snackbar, 
  IconButton,
  Icon
} from "@material-ui/core";
import {
  makeStyles, useTheme
 } from '@material-ui/core/styles';
import  axios  from 'axios';
import { green } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';
//import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: 250,
      [theme.breakpoints.up("md")]: {
        width: 350,
      }
    }
  },
  textFieldMessage:{
    width: 535,
      [theme.breakpoints.up("md")]: {
        width: 735,
      },
      [theme.breakpoints.down("xs")]: {
        width: 250,
      },
  },    
  outer: {
    textAlign: "center",
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  componentTitle: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48"
  },
  button: {
    color: "white",
    borderRadius: "50px",
    backgroundColor: "#A765E6",
    width: "15em",
    height: "3em",
    margin: "50px auto",
    "&:hover": {
      backgroundColor: "#331D48",
      border: "2px solid white"
    }
  },
  
}));

const fieldOfInterest = [
  {
    value: "USD",
    label: "Finance"
  },
  {
    value: "EUR",
    label: "IT"
  },
  {
    value: "BTC",
    label: "Compliance"
  },
  {
    value: "JPY",
    label: "Legal"
  }
];

const ContactForm = props => {
  const classes = useStyles();
  const [fieldOfInterestItem, setFieldOfInterestItem] = useState('EUR');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [open, setOpen] = useState('test');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = event => {
    setFieldOfInterestItem(event.target.value);
  };

  const setSnackBar = (messageParam, typeParam) => {
    setResponseMessage(messageParam);
    setResponseMessageType(typeParam);
  };

  const useSnackbarStatusStyles = makeStyles(theme => ({
    success: {
      ' &>div': {
        backgroundColor: green[600],
      },
    },
    error: {
      ' &>div': {
        backgroundColor: theme.palette.error.main,
      },
    },
  }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setResponseMessage('');

    // only accept strings that include numbers & optionally starting '+'
    const phoneNumberRegex = /^\+?[0-9]*$/;

    // only accept strings with text characters & numbers within email format
    // see11@see2.com
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    if (!firstName || !lastName || !email || !message || !message) {
      setSnackBar('Please enter all required fields! (*)', 'error');
      return;
    }

    if (message.length < 6) {
      setSnackBar('Please enter a message with some substance...', 'error');
      return;
    }

    if ((phoneNumber && phoneNumber.length < 8)
      || (phoneNumber && !phoneNumberRegex.test(phoneNumber))) {
      setSnackBar('Please enter a valid phone number...', 'error');
      return;
    }

    if (!emailRegex.test(email)) {
      setSnackBar('Please enter a valid email...', 'error');
      return;
    }
    // // eslint-disable-next-line
    await axios.post('https://7io-mail.wevisualizeit.now.sh/api/sendMail', {
      firstName, lastName, email, phoneNumber, companyName, message,
    }).then((response) => {
      console.log('response:', response);
      if (response.data.status === 'success') {
        setSnackBar('Mail succesfuly sent!', 'success');
      } else if (response.data.status === 'fail') {
        setSnackBar(`error: ${response.data}`, 'error');
      }
    });
  };
  const theme = useTheme();
  const snackbarStatusClasses = useSnackbarStatusStyles(theme);

  return (
    <div id="contactContainer" className={classes.outer}>
      <Container>
        <Typography
          gutterBottom
          className={classes.componentTitle}
          variant="h2"
          component="h1"
        >
          Contact Us
        </Typography>
        <form
          className={classes.root}
          style={{ maxWidth: 800, margin: "auto" }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            label="First Name" 
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />

          <TextField 
            label="Last Name" 
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            required
          />

          <TextField 
            label="Email" 
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />

          <TextField 
            label="Phone Number" 
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />

          <TextField 
            label="Company Name" 
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} 
          />

          <TextField
            select
            label="Field of Interest"
            value={fieldOfInterestItem}
            onChange={handleChange}
            helperText="Please select your Field of Interest"
            variant="outlined"
            required
          >
            {fieldOfInterest.map((option, key) => (
              <MenuItem key={key} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

            <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows="4"
                placeholder="Your message here.."
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={classes.textFieldMessage}
                required
            />
          <Button 
            size="medium" 
            className={classes.button} 
            onClick={(e) => sendEmail(e)}
            startIcon={<SendIcon />}
            >
              Send
          </Button>
        </form>
        {responseMessage && (
          <Snackbar
            className={snackbarStatusClasses[responseMessageType]}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={Boolean(open)}
            autoHideDuration={6000}
            onClose={handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{responseMessage}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <Icon
                  light={'true'}
                />
              </IconButton>,
            ]}
          />
        )}
      </Container>
    </div>
  );
};

export default ContactForm;
