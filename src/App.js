import ResponseAppBar from "./AppBar";
import DayTabs from "./DayTabs";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <ResponseAppBar></ResponseAppBar>
      <br></br>
      <br></br>
      <br></br>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography
          variant="h4"
          noWrap
          component="a"
          align="center"
          sx={{
            mr: 2,
            fontWeight: "bold",
            letterSpacing: "0rem",
            color: "inherit",
            textDecoration: "none",
            whiteSpace: "normal",
          }}
        >
          UC Berkeley Golden Bear LXVI Tournament Schedule
        </Typography>
      </Box>
      <DayTabs></DayTabs>
    </Container>
  );
}

export default App;
