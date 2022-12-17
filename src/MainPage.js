import ResponseAppBar from "./AppBar";
import InfoBox from "./InfoBox";
import DayTabs from "./DayTabs";
import { Alert, Box, Container, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <Container maxWidth="lg">
      <ResponseAppBar></ResponseAppBar>
      <br></br>
      <br></br>
      <br></br>
      <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
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
          Golden Bear LXVI Tourney Schedule
        </Typography>
      </Box>
      <InfoBox layout={false}></InfoBox>
      <InfoBox layout={true}></InfoBox>
      <Alert severity="info" sx={{ p: 2 }}>
        The tournament is now over, thank you to everyone who played! We hope to
        see everyone at Polar Bear LXVII!
      </Alert>
      <DayTabs></DayTabs>
    </Container>
  );
}
