import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { GlobalContext } from "../context/GlobalContext";

const ReservationForm = () => {
  const { selectedFlight, setSelectedFlight } = useContext(GlobalContext);

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [selectedSeat, setSelectedSeat] = useState();

  //   Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid grey",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showAlert, setShowAlert] = useState(false);

  const openAlertForm = () => {
    setShowAlert(true);
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
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="standard"
            >
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
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
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
          <Box sx={{ minWidth: 110, marginTop: "20px", marginBottom: "20px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Vyberte si místo v letadle
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Vyberte si místo v letadle"
                value={selectedSeat}
                onChange={(event) => setSelectedSeat(event.target.value)}
              >
                {selectedFlight?.seats.map((item) => (
                 <MenuItem
                 disabled={!item.available}
                 key={item.id}
                 value={item.id}
               >
                 {item.number} 
               </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button variant="outlined" type="submit" onClick={openAlertForm}>
            Rezervovat
          </Button>

          {showAlert && (
            <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>Úspěšná rezervace</AlertTitle>
                Vaše rezervace byla úspěšně dokončena. Děkujeme za váš zájem o
                naše služby. <br />
                Jmeno cestujícího: {name}
                <br />
                Prijmení cestujícího: {surname}
                <br />
                Místo v letadle: {selectedFlight?.seats.find((seat) => seat.id === selectedSeat)?.number} 
                <br />
                Odletové místo: {selectedFlight.from} <br />
                Cílové destinace: {selectedFlight.to} <br />
                Datum odletu:{selectedFlight.departure} <br />
                Datum návratu:{selectedFlight.arrival} <br />
                Delka letů:{selectedFlight.duration} <br />
                Cena letů:{selectedFlight.price}
              </Alert>
            </Stack>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ReservationForm;
