import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <center>
        <Button variant="outlined" onClick={handleClickOpen}>
          Announcements & Rules
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "fixed" }} style={{ background: "#003262" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Announcements & Rules
              </Typography>
            </Toolbar>
          </AppBar>
          <br></br>
          <br></br>
          <Box sx={{ p: 4 }} style={{ background: "#f3f6fa" }}>
            <Typography>
              <strong>Announcements</strong> <br></br>
              Hi everyone! Tournament draws and match times are now out.
              Check-in times on both days now start at 8:15AM rather than
              8:30AM. Please get your match number from the draw and find its
              corresponding time in the Match Times folder. Plan on arriving at
              least 1 hour before your match in case your match is called early.
              We have a right to default your match if you are not present
              within 5 minutes of us calling your match. Do make sure that you
              are actually apart of this tournament, some people are still
              unaware that their entries were cut and we do not want people
              wasting a commute to find out they can't play. Lastly, good luck
              to everyone playing!
              <br></br>
              <br></br>
              <a href="https://drive.google.com/drive/folders/1MC4UxGsaVdUwTQiWWWcO6OrzKOm6T8Nc?usp=sharing">
                Click here for the draws!
              </a>
              <br></br>
              <br></br>
              <strong>Rules</strong> <br></br>
              Dates: <br></br>
              Saturday 9/3 (Singles & Mixed), 9AM-10PM <br></br>
              Sunday 9/4 (Doubles), 9AM-6PM <br></br>
              Check-in will begin at 8:15AM on both days. <br></br>
              <br></br>
              Events: <br></br>- Flights: A, B, C, D Singles, Doubles, Mixed
              <br></br>- Events may be combined depending on number of entries.
              <br></br>- Draws will be capped at the discretion of the
              tournament directors.<br></br>- Multiple partners are NOT allowed.
              <br></br>- Players can play a maximum of 3 events within 2
              consecutive flights (A, B, C, D) per day. For instance, this means
              that one cannot sign up for BMS, CMD, and DMD. All of your entries
              must be within two flights. In other words, keep all of your
              entries between 2 consecutive letters (AB, BC, or CD). <br></br>
              <br></br>
              Entry Fees:<br></br>- $24 for the first event, $20 for each
              additional event; maximum of 3 events per day. No more than 2
              flights per event.
              <br></br>- Entry fees will be collected in CASH on the day of the
              tournament at the check-in desk. We will NOT be taking Venmo,
              Zelle, or other online payment options. There are ATMs nearby, but
              not directly next to the Pavilion; please plan accordingly.
              <br></br>
              <br></br>
              Entry Deadline:<br></br>
              Since we are reaching capacity sooner than we expected, the sign
              up deadline is now Sunday, August 14, 2022 at 11:59PM <br></br>-
              If you are withdrawing after this deadline please notify us at
              calbadminton@gmail.com <br></br>
              Birds: <br></br>- Unlimited shuttles will be provided for A
              flights; however, people will need to supply their own shuttles
              for all other flights.<br></br>
              <br></br>
              Prizes:<br></br>- Trophies will be awarded to all 1st, 2nd, and
              consolation place finishers. 1st and 2nd place in flight A will
              also be awarded cash prizes.<br></br>
              <br></br>
              T-Shirts:<br></br>- We will be selling t-shirts at the tournament
              for $17.<br></br>- The t-shirt design will be posted a few weeks
              leading up to the tournament.<br></br>
              <br></br>
              <a href="http://bit.ly/1MskFkL">Parking:</a>
              <br></br>- Follow the link above for a map of all the parking lots
              surrounding the RSF. For reference, the RSF is located at the
              intersection of Bancroft Ave. and Dana St. <br></br>- On Saturday,
              we recommend that you park in any of the garages marked with a
              Blue "P" near Shattuck Ave. <br></br>- On Sunday, parking in the
              lots with a brown "P" will be cheaper and okay to park in.
              <br></br>
              The earlier you get here, the better the space you will get!
              <br></br>
              <br></br>
              Regulations: <br></br>
              1. The tournament will be conducted in accordance with USAB
              regulations; IN THE EVENT OF AN INCONSISTENCY, THE DECISIONS OF
              THE TOURNAMENT DIRECTORS ARE FINAL. <br></br>
              2. Players not ready to play 10 minutes after their matches are
              called will be disqualified.<br></br>
              3. Food and drink (with the exception of water and sports drinks)
              are not allowed inside the gym. Participants caught with
              food/drink will be disqualified immediately.<br></br>
              4. Main round matches will be played in the best 2 out of 3 games
              to 21 points using the BWF Rally Point Scoring System. Consolation
              matches will be played one game to 21, with the exception of
              finals.
              <br></br>
              5. Each player playing doubles must submit SEPARATE entry forms.
              Incomplete partnerships will not be guaranteed a spot in the
              draws.
              <br></br>
              6. Seeding will be conducted by the tournament directors and will
              be done according to USAB ranking and prior tournament results.
              Concerns over this process can be voiced by contacting the
              tournament directors at calbadminton@gmail.com <br></br>
              7. Players' flights may be altered at the discretion of the
              tournament directors to prevent players from playing below their
              skill level.
              <br></br>
              8. Players who make it to the semi-finals of the higher flight may
              be disqualified from the lower flight.<br></br>
              9. Women are allowed to sign up for men's flights, but men are not
              allowed to sign up for women's flights. A mixed pair may not sign
              up for any regular doubles flights.<br></br>
              10. Rest time is limited to 10 minutes There will be no lunch
              break. Please plan it according to your match time, given that
              players must be present 30 minutes prior to their match time.
              <br></br>
              <br></br>
              Feel free email us at calbadminton@gmail.com if you have any
              questions or concerns! Make sure you guys invite all your friends
              and we look forward to seeing you all!<br></br>
              <br></br>
              Golden Bear Tournament Co-directors: Bianca Tam, David Chen, Eric
              Chang, and John Le<br></br>
              <br></br>
              <a href="https://www.facebook.com/akbadmintontennis">
                Sponsor & Partner: AK Badminton & Tennis
              </a>
            </Typography>
          </Box>
        </Dialog>
      </center>
    </div>
  );
}
