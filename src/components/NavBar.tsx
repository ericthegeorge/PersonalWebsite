import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Switch } from "@mui/material";
import nameLogo from "./images/namelogo.webp";
/**#130426 */

const pages = ["About", "Skills", "Personal Projects", "Contact"];

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Toggle dark mode class on body
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0e1330", width: "100%" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "flex" },
              fontFamily: "Helvetica",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <img
              src={nameLogo}
              alt="Logo"
              style={{ height: "3.5rem", width: "3.5rem", borderRadius: "50%" }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Menu Icon
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component="a" // Make this a link
                  href={`#${page.toLowerCase().replace(" ", "-")}`} // Link to the section by id
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component="a" // Use anchor element
                href={`#${page.toLowerCase().replace(" ", "-")}`} // Link to the section by id
                onClick={handleCloseNavMenu}
                sx={{ my: "1.3rem", color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            // variant="h6"

            sx={{
              textAlign: "center",
              fontFamily: "Georgia",
              display: { xs: "flex" },
            }}
          >
            Dark Mode
          </Typography>

          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            sx={{
              "&.Mui-checked": {
                color: "primary.main", // Color when switched on
              },
              "&.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "secondary.main", // Track color when switched on
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#bfb9c9", // Track color when switched off
              },
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
