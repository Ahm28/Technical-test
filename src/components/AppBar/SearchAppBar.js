import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link to="/">
                <img
                  src="/assets/Logo/logo_poolapack_new.png"
                  width="120px"
                  alt="Logo"
                />
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Link to="/" style={{ textDecoration: "none", color: "#616161" }}>
                <Typography
                  sx={{
                    mx: "20px",
                    cursor: "pointer",
                    color: "inherit",
                  }}
                >
                  Home
                </Typography>
              </Link>
              {/* Dropdown */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <Link
                  to="/case-1"
                  style={{ textDecoration: "none", color: "#616161" }}
                >
                  <MenuItem onClose={handleClose}>Case 1</MenuItem>
                </Link>
                <Link
                  to="/case-2"
                  style={{ textDecoration: "none", color: "#616161" }}
                >
                  <MenuItem onClose={handleClose}>Case 2</MenuItem>
                </Link>
              </Menu>
              <Typography
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Case
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
