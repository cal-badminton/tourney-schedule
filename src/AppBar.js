import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "./logo.png";

const pages = [
  { name: "WEBSITE", url: "https://badminton.berkeley.edu/" },
  { name: "SLACK", url: "https://cal-badminton.slack.com/signup" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/cal_badminton/" },
  { name: "FACEBOOK PAGE", url: "https://www.facebook.com/calbadminton1" },
  {
    name: "FACEBOOK GROUP",
    url: "https://www.facebook.com/groups/calbadminton",
  },
];
function ResponsiveAppBar(props) {
  return (
    <AppBar position="fixed" style={{ background: "#003262" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton href="/tourney-schedule">
            <Avatar src={logo} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/tourney-schedule"
            sx={{
              mr: 2,
              fontWeight: "bold",
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
              whiteSpace: "normal",
            }}
          >
            CAL BADMINTON
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Typography
                variant="h8"
                noWrap
                component="a"
                href={page.url}
                target="_blank"
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  letterSpacing: "0rem",
                  color: "inherit",
                  textDecoration: "none",
                  whiteSpace: "normal",
                }}
              >
                {page.name}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
