import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import NotesIcon from "@mui/icons-material/Notes";
import BusinessIcon from "@mui/icons-material/Business";

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f6f8",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const useStyles = makeStyles(() => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.primary,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    borderRadius: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginBottom: theme.spacing(2),
    border: `4px solid ${theme.palette.primary.main}`,
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
  icon: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  field: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  companyName: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

function CustomerDetails({ customer }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Customer Details
        </Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} textAlign="center">
              <Avatar
                src={customer.logo ? URL.createObjectURL(customer.logo) : ""}
                className={classes.avatar}
              />
              <Typography variant="h6">{customer.name}</Typography>
              <Typography variant="body1" className={classes.companyName}>
                <BusinessIcon className={classes.icon} />
                {customer.companyName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" className={classes.section}>
                Contact Information
              </Typography>
              <Box className={classes.field}>
                <PhoneIcon className={classes.icon} />
                <Typography variant="body1">Phone: {customer.phone}</Typography>
              </Box>
              <Box className={classes.field}>
                <EmailIcon className={classes.icon} />
                <Typography variant="body1">Email: {customer.email}</Typography>
              </Box>
              <Box className={classes.field}>
                <HomeIcon className={classes.icon} />
                <Typography variant="body1">
                  Address: {customer.address}
                </Typography>
              </Box>
              <Box className={classes.field}>
                <LocationCityIcon className={classes.icon} />
                <Typography variant="body1">City: {customer.city}</Typography>
              </Box>
              <Box className={classes.field}>
                <Typography variant="body1">State: {customer.state}</Typography>
              </Box>
              <Box className={classes.field}>
                <Typography variant="body1">
                  ZIP Code: {customer.zip}
                </Typography>
              </Box>
              <Box className={classes.field}>
                <PublicIcon className={classes.icon} />
                <Typography variant="body1">
                  Country: {customer.country}
                </Typography>
              </Box>
              <Divider className={classes.divider} />
              <Typography variant="h6" className={classes.section}>
                Notes
              </Typography>
              <Box className={classes.field}>
                <NotesIcon className={classes.icon} />
                <Typography variant="body1">{customer.notes}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CustomerDetails;
