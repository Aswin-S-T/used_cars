import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Slider,
  TablePagination, // Import TablePagination
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Search, Refresh } from "@mui/icons-material";

// Create a theme with custom colors and typography
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Dark Blue
    },
    secondary: {
      main: "#388E3C", // Dark Green
    },
    background: {
      default: "#FFF",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  backgroundColor: "#ffffff",
  marginTop: theme.spacing(2),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: 700,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1, 2),
  marginLeft: theme.spacing(1),
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(1),
  overflow: "hidden",
}));

const StyledTableHeader = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FilterSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
}));

const FilterItem = styled(Grid)(({ theme }) => ({
  flex: "1 1 200px",
  minWidth: 200,
}));

const FilterFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
}));

// Sample data for vehicles
const vehicles = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    mileage: 15000,
    price: 22000,
    addedDate: new Date("2024-01-10"),
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "Black",
    mileage: 25000,
    price: 18000,
    addedDate: new Date("2024-02-20"),
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Red",
    mileage: 5000,
    price: 28000,
    addedDate: new Date("2024-03-15"),
  },
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    mileage: 15000,
    price: 22000,
    addedDate: new Date("2024-01-10"),
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "Black",
    mileage: 25000,
    price: 18000,
    addedDate: new Date("2024-02-20"),
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Red",
    mileage: 5000,
    price: 28000,
    addedDate: new Date("2024-03-15"),
  },
  // Add more sample data as needed
];

function ListVehicles({ currentScreen, setCurrentScreen }) {
  const [view, setView] = useState("list");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumn, setSortColumn] = useState("make");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    if (view === "view") {
      setCurrentScreen(" > View Details");
    } else {
      setCurrentScreen("");
    }
  }, [view, setCurrentScreen]);

  const [dateRange, setDateRange] = useState([
    new Date("2023-01-01"),
    new Date(),
  ]);

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (column) => {
    const direction =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(direction);
    setSortColumn(column);
    const sortedVehicles = [...filteredVehicles].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredVehicles(sortedVehicles);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    applyFilters(value, priceRange, selectedModel, dateRange);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    applyFilters(searchTerm, newValue, selectedModel, dateRange);
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    applyFilters(searchTerm, priceRange, model, dateRange);
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setDateRange(date);
    applyFilters(searchTerm, priceRange, selectedModel, date);
  };

  const applyFilters = (search, priceRange, model, dateRange) => {
    const filtered = vehicles.filter(
      (vehicle) =>
        Object.values(vehicle).some((val) =>
          String(val).toLowerCase().includes(search)
        ) &&
        vehicle.price >= priceRange[0] &&
        vehicle.price <= priceRange[1] &&
        (model ? vehicle.model === model : true) &&
        vehicle.addedDate >= dateRange[0] &&
        vehicle.addedDate <= dateRange[1]
    );
    setFilteredVehicles(filtered);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setPriceRange([0, 30000]);
    setSelectedModel("");
    setDateRange([new Date("2023-01-01"), new Date()]);
    setFilteredVehicles(vehicles);
    setPage(0); // Reset page to first page
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to first page
  };

  return (
    <ThemeProvider theme={theme}>
      {console.log("view------------", view)}
      {view == "list" && (
        <>
          <StyledContainer maxWidth="lg" style={{ marginTop: "5px" }}>
            <StyledTitle
              variant="h4"
              style={{ textAlign: "left", color: "darkcyan" }}
            >
              All Vehicles
            </StyledTitle>
            <StyledPaper>
              <FilterSection container spacing={2}>
                <FilterItem item>
                  <StyledTextField
                    label="Search Vehicles"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FilterItem>
                <FilterItem item>
                  <FilterFormControl size="small" fullWidth variant="outlined">
                    <Select
                      value={selectedModel}
                      onChange={handleModelChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Filter by Model" }}
                    >
                      <MenuItem value="">All Models</MenuItem>
                      <MenuItem value="Camry">Camry</MenuItem>
                      <MenuItem value="Accord">Accord</MenuItem>
                      <MenuItem value="Mustang">Mustang</MenuItem>
                    </Select>
                  </FilterFormControl>
                </FilterItem>
                <FilterItem item>
                  <Typography gutterBottom>Price Range</Typography>
                  <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={30000}
                    step={1000}
                    marks
                    sx={{ mb: 2 }}
                    size="small"
                  />
                </FilterItem>
                <FilterItem item>
                  <Typography gutterBottom>Added Date Range</Typography>
                  <TextField
                    type="date"
                    size="small"
                    value={dateRange[0].toISOString().split("T")[0]}
                    onChange={(e) =>
                      handleDateChange({
                        target: { value: [e.target.value, dateRange[1]] },
                      })
                    }
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 1 }}
                  />
                  <TextField
                    type="date"
                    size="small"
                    value={dateRange[1].toISOString().split("T")[0]}
                    onChange={(e) =>
                      handleDateChange({
                        target: { value: [dateRange[0], e.target.value] },
                      })
                    }
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </FilterItem>
                <FilterItem item>
                  <StyledButton
                    variant="contained"
                    style={{ backgroundColor: "darkcyan" }}
                    startIcon={<Refresh />}
                    onClick={handleRefresh}
                  >
                    Refresh
                  </StyledButton>
                </FilterItem>
              </FilterSection>
              <StyledTableContainer component={Paper}>
                <Table>
                  <TableHead style={{ backgroundColor: "darkcyan" }}>
                    <StyledTableHeader style={{ backgroundColor: "darkcyan" }}>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "make"}
                          direction={sortDirection}
                          onClick={() => handleSort("make")}
                          style={{ color: "#FFF" }}
                        >
                          Make
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "model"}
                          direction={sortDirection}
                          onClick={() => handleSort("model")}
                          style={{ color: "#FFF" }}
                        >
                          Model
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "year"}
                          direction={sortDirection}
                          onClick={() => handleSort("year")}
                          style={{ color: "#FFF" }}
                        >
                          Year
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "color"}
                          direction={sortDirection}
                          onClick={() => handleSort("color")}
                          style={{ color: "#FFF" }}
                        >
                          Color
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "mileage"}
                          direction={sortDirection}
                          onClick={() => handleSort("mileage")}
                          style={{ color: "#FFF" }}
                        >
                          Mileage
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel
                          active={sortColumn === "price"}
                          direction={sortDirection}
                          onClick={() => handleSort("price")}
                          style={{ color: "#FFF" }}
                        >
                          Price
                        </TableSortLabel>
                      </TableCell>
                    </StyledTableHeader>
                  </TableHead>
                  <TableBody>
                    {filteredVehicles
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((vehicle) => (
                        <StyledTableRow key={vehicle.id}>
                          <TableCell>{vehicle.make}</TableCell>
                          <TableCell>{vehicle.model}</TableCell>
                          <TableCell>{vehicle.year}</TableCell>
                          <TableCell>{vehicle.color}</TableCell>
                          <TableCell>{vehicle.mileage} km</TableCell>
                          <TableCell>${vehicle.price}</TableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={filteredVehicles.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                />
              </StyledTableContainer>
            </StyledPaper>
          </StyledContainer>
        </>
      )}
    </ThemeProvider>
  );
}

export default ListVehicles;
