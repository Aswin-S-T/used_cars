import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
  Avatar,
  Input,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function AddCustomer() {
  const [dealerDetails, setDealerDetails] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    notes: "",
    logo: null,
  });

  const handleChange = (event) => {
    setDealerDetails({
      ...dealerDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setDealerDetails({
      ...dealerDetails,
      logo: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(dealerDetails);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Dealer
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Dealer Name"
              name="name"
              value={dealerDetails.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              name="companyName"
              value={dealerDetails.companyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              value={dealerDetails.phone}
              onChange={handleChange}
              fullWidth
              required
              type="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              name="email"
              value={dealerDetails.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={dealerDetails.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              value={dealerDetails.city}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="State"
              name="state"
              value={dealerDetails.state}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="ZIP Code"
              name="zip"
              value={dealerDetails.zip}
              onChange={handleChange}
              fullWidth
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Country"
              name="country"
              value={dealerDetails.country}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Notes"
              name="notes"
              value={dealerDetails.notes}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="logo-upload">Logo Upload</InputLabel>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                startAdornment={
                  <IconButton>
                    <PhotoCamera />
                  </IconButton>
                }
              />
              <FormHelperText>
                Upload a logo for the dealer (optional)
              </FormHelperText>
              {dealerDetails.logo && (
                <Avatar
                  src={URL.createObjectURL(dealerDetails.logo)}
                  sx={{ width: 56, height: 56, mt: 2 }}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <button
              type="submit"
              className="primary"
              style={{ marginBottom: "50px" }}
            >
              Add Dealer
            </button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddCustomer;
