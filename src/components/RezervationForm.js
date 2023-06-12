import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const RezervationForm = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  //   Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showAlert, setShowAlert] = useState(false);

  const openAlertForm = () => {
    const inputValueName = document.getElementById(
      "input-with-icon-adornment"
    ).value;
    const inputValueSurname = document.getElementById(
      "input-with-icon-textfield"
    ).value;
    const inputValueSeats = document.getElementById("input-list-seat").value;
    if (
      inputValueSurname === "" ||
      inputValueName === "" ||
      inputValueSeats === ""
    ) {
      alert("Vyplňte prosím vstupní pole.");
    } else {
      setShowAlert(true);
      var outputElement = document.getElementById("output");
      outputElement.innerHTML =
        "Jmeno cestujícího: " +
        inputValueName +
        "<br>Příjmení cestujícího: " +
        inputValueSurname +
        "<br>Místo: " +
        inputValueSeats;
    }
  };

  return (
    <div className="containerModal">
      <Button variant="outlined" onClick={handleOpen}>
        Vybrat
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text2">Rezervace</h3>
          <p className="text3">
            Jméno a příjmení uveďte ve stejném tvaru, v jakém je uvedeno na
            cestovním dokladu.
          </p>
          <Box sx={{ "& > :not(style)": { m: 1 } }} className="UserInfo">
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">Jméno</InputLabel>
              <Input
                className="UserInfo"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              className="UserInfo"
              id="input-with-icon-textfield"
              label="Prijmení"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>

          {/* další pole pro údaje o cestujícím */}
          <p className="text2">Vyberte si místo v letadle</p>
          <List
            id="input-list-seat"
            dense
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              marginBottom: "30px",
            }}
          >
            {["A1", "A2", "B1", "B2"].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Button onClick={openAlertForm} variant="outlined" type="submit">
            Rezervovat
          </Button>
          {showAlert && (
            <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>Úspěšná rezervace</AlertTitle>
                Vaše rezervace byla úspěšně dokončena. Děkujeme za váš zájem o
                naše služby.
                <div id="output" class="outpitBlock"></div>
              </Alert>
            </Stack>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default RezervationForm;
