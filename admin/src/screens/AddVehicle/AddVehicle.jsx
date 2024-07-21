import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  Box,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Tooltip,
  Divider,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Add, ArrowForward } from "@mui/icons-material";

// Create a theme with custom colors and typography
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5722", // Bright orange
    },
    secondary: {
      main: "#FFC107", // Amber
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
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
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  field: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  select: {
    minWidth: 220,
  },
  formControl: {
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Sam Johnson" },
  // Add more customers as needed
];

function AddVehicle() {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState({
    customer: "",
    make: "",
    model: "",
    year: "",
    color: "",
    vin: "",
    mileage: "",
    price: "",
    description: "",
    fuelType: "",
    transmission: "",
    condition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(vehicle);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Typography variant="h4">Add New Vehicle</Typography>
        <Paper className={classes.paper} style={{ marginTop: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Customer</InputLabel>
                  <Select
                    value={vehicle.customer}
                    onChange={handleChange}
                    name="customer"
                    variant="outlined"
                    label="Customer"
                    className={classes.select}
                  >
                    {customers.map((customer) => (
                      <MenuItem key={customer.id} value={customer.id}>
                        {customer.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Make"
                  name="make"
                  value={vehicle.make}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ArrowForward />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Model"
                  name="model"
                  value={vehicle.model}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Year"
                  name="year"
                  type="number"
                  value={vehicle.year}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Color"
                  name="color"
                  value={vehicle.color}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="VIN"
                  name="vin"
                  value={vehicle.vin}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mileage"
                  name="mileage"
                  type="number"
                  value={vehicle.mileage}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">km</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  type="number"
                  value={vehicle.price}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className={classes.field}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Fuel Type</InputLabel>
                  <Select
                    value={vehicle.fuelType}
                    onChange={handleChange}
                    name="fuelType"
                    variant="outlined"
                    label="Fuel Type"
                    className={classes.select}
                  >
                    <MenuItem value="Gasoline">Gasoline</MenuItem>
                    <MenuItem value="Diesel">Diesel</MenuItem>
                    <MenuItem value="Electric">Electric</MenuItem>
                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Transmission</InputLabel>
                  <Select
                    value={vehicle.transmission}
                    onChange={handleChange}
                    name="transmission"
                    variant="outlined"
                    label="Transmission"
                    className={classes.select}
                  >
                    <MenuItem value="Automatic">Automatic</MenuItem>
                    <MenuItem value="Manual">Manual</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel>Condition</InputLabel>
                  <Select
                    value={vehicle.condition}
                    onChange={handleChange}
                    name="condition"
                    variant="outlined"
                    label="Condition"
                    className={classes.select}
                  >
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Used">Used</MenuItem>
                    <MenuItem value="Certified Pre-Owned">
                      Certified Pre-Owned
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={vehicle.description}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  className={classes.field}
                />
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Add />}
                  >
                    Add Vehicle
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default AddVehicle;
