import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import courtLayout from "./courtLayout.png";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function LayoutModal() {
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
        <Button
          variant="outlined"
          sx={{ p: 1, m: 1 }}
          onClick={handleClickOpen}
        >
          Tournament Court Layout
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Typography
            variant="h6"
            sx={{ m: 0, p: 2, fontWeight: "bold", color: "#FFFFFF" }}
            style={{ background: "#003262" }}
          >
            Tournament Court Layout
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <img src={courtLayout} alt="" width={550} height={1000}></img>
          </DialogContent>
        </BootstrapDialog>
      </center>
    </div>
  );
}
