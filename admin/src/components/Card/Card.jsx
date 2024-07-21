import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WeeklySalesIcon from "@mui/icons-material/ShowChart";
import TotalUsersIcon from "@mui/icons-material/Group";
import TotalVehiclesIcon from "@mui/icons-material/DirectionsCar";
import MyEarningsIcon from "@mui/icons-material/MonetizationOn";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 255, 0.2)",
  borderRadius: "15px",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 255, 0.3)",
  },
}));

const WeeklySalesItem = styled(Item)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(255, 255, 224, 1) 0%, rgba(255, 250, 205, 1) 100%)",
}));

const TotalUsersItem = styled(Item)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(240, 255, 240, 1) 0%, rgba(224, 255, 224, 1) 100%)",
}));

const TotalVehiclesItem = styled(Item)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(224, 255, 255, 1) 0%, rgba(240, 255, 255, 1) 100%)",
}));

const MyEarningsItem = styled(Item)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(255, 228, 225, 1) 0%, rgba(255, 240, 245, 1) 100%)",
}));

export default function Card() {
  // Example data, replace with real data
  const data = {
    weeklySales: 123,
    totalUsers: 456,
    totalVehicles: 789,
    myEarnings: 101112,
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <WeeklySalesItem>
            <WeeklySalesIcon fontSize="large" color="primary" />
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              Weekly Sales
            </Typography>
            <Typography variant="h4" component="div" sx={{ mt: 1 }}>
              {data.weeklySales}
            </Typography>
          </WeeklySalesItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalUsersItem>
            <TotalUsersIcon fontSize="large" color="primary" />
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              Total Users
            </Typography>
            <Typography variant="h4" component="div" sx={{ mt: 1 }}>
              {data.totalUsers}
            </Typography>
          </TotalUsersItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalVehiclesItem>
            <TotalVehiclesIcon fontSize="large" color="primary" />
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              Total Vehicles
            </Typography>
            <Typography variant="h4" component="div" sx={{ mt: 1 }}>
              {data.totalVehicles}
            </Typography>
          </TotalVehiclesItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MyEarningsItem>
            <MyEarningsIcon fontSize="large" color="primary" />
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              My Earnings
            </Typography>
            <Typography variant="h4" component="div" sx={{ mt: 1 }}>
              {data.myEarnings}
            </Typography>
          </MyEarningsItem>
        </Grid>
      </Grid>
    </Box>
  );
}
