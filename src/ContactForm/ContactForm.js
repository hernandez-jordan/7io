import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  MenuItem,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import { styled } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: 250,
      [theme.breakpoints.down("xs")]: {
        width: 200
      }
    }
  },
  outer: {
    textAlign: "center",
    backgroundColor: "white",
    padding: 50,
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
    display: "inherit",
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
  textFieldArea: {
    textAlign: "left",
    "& $notchedOutline": {
      border: "1px solid #4A90E2"
    },
    "&:hover": {
      border: "#fff"
    },
    textField: {
      MuiOutlinedInput: {
        root: {
          "&$focused $notchedOutline": {
            borderColor: "green",
            borderWidth: 1
          }
        }
      }
    }
  }
}));

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: red;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

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

const ContactForm = () => {
  const classes = useStyles();
  const [fieldOfInterestItem, setFieldOfInterestItem] = useState("EUR");

  const handleChange = event => {
    setFieldOfInterestItem(event.target.value);
  };

  return (
    <div className={classes.outer}>
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
          style={{ maxWidth: 600, margin: "auto" }}
          noValidate
          autoComplete="off"
        >
          <StyledTextField label="First Name" variant="outlined" />
          <TextField label="Last Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="Phone Number" variant="outlined" />
          <TextField label="Company Name" variant="outlined" />
          <TextField
            select
            label="Field of Interest"
            value={fieldOfInterestItem}
            onChange={handleChange}
            helperText="Please select your Field of Interest"
            variant="outlined"
            className={classes.textFieldArea}
          >
            {fieldOfInterest.map((option, key) => (
              <MenuItem key={key} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        {/* <TextFieldA
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            placeholder="Your message here.."
            variant="outlined"
        /> */}
          <Button size="medium" className={classes.button}>
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ContactForm;
