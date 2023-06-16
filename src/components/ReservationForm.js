import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
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
import { Troubleshoot } from "@mui/icons-material";

const ReservationForm = () => {
  const { selectedFlight, setSelectedFlight } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [selectedSeat, setSelectedSeat] = useState();

  const onSubmit = (data) => {
    console.log(data);
    openAlertForm();
  };

  const validationRules = {
    required: "Toto pole je povinné.",
    minLength: {
      value: 3,
      message: "Toto pole musí mít nejméně 3 znaky.",
    },
  };

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
    if (name && surname) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ "& > :not(style)": { m: 1 } }} className="UserInfo">
              <FormControl
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
              >
                <InputLabel htmlFor="name-input">Jméno</InputLabel>
                <Input
                  className="UserInfo"
                  id="name-input"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  {...register("name", { ...validationRules })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </FormControl>
              <TextField
                {...register("surname", { ...validationRules })}
                variant="standard"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="UserInfo"
                id="input-surname"
                label="Prijmení"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.surname && <p>{errors.surname.message}</p>}
            </Box>
            {/* další pole pro údaje o cestujícím */}
            <p className="text2">Vyberte si místo v letadle</p>
            <Box
              sx={{ minWidth: 110, marginTop: "20px", marginBottom: "20px" }}
            >
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
          </form>
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
                Místo v letadle:{" "}
                {
                  selectedFlight?.seats.find((seat) => seat.id === selectedSeat)
                    ?.number
                }
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
