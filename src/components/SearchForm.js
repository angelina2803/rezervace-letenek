import React, { useContext } from "react";
import dayjs from "dayjs";
import { GlobalContext } from "../context/GlobalContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const countries = [
  { code: "CZ", label: "Prague" },
  { code: "FR", label: "Paris" },
  { code: "IT", label: "Rome" },
  { code: "GB", label: "London" },
  { code: "ES", label: "Barcelona" },
  { code: "DE", label: "Berlin" },
  { code: "AT", label: "Vienna" },
  { code: "PT", label: "Lisbon" },
  { code: "GR", label: "Athens" },
  { code: "ES", label: "Madrid" },
  { code: "NL", label: "Amsterdam" },
];

const SearchForm = () => {
  const {
    flights,
    setFilteredFlights,
    from,
    setFrom,
    to,
    setTo,
    departure,
    setDeparture,
    arrival,
    setArrival,
    duration,
    setDuration,
  } = useContext(GlobalContext);

  const search = (e) => {
    e.preventDefault();
    let result = flights;
    if (from) result = result.filter((flight) => flight.from === from?.label);
    if (to) result = result.filter((flight) => flight.to === to?.label);
    if (departure)
      result = result.filter((flight) =>
        dayjs(flight.departure).isSame(departure, "day")
      );
    if (arrival)
      result = result.filter((flight) =>
        dayjs(flight.arrival).isSame(arrival, "day")
      );
    if (duration)
      result = result.filter((flight) => flight.duration === `${duration}h`);
    setFilteredFlights(result);
  };

  return (
    <form className="formAdd">
      <Autocomplete
        value={from}
        onChange={(event, newValue) => setFrom(newValue)}
        id="country-select-demo"
        sx={{ width: 1000, heigh: 40 }}
        options={countries}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Přidat letiště" />
        )}
      />
      <Autocomplete
        label="Přílet do"
        className="autocomplete"
        id="country-select-demo"
        sx={{ width: 1000, heigh: 40 }}
        value={to}
        onChange={(event, newValue) => setTo(newValue)}
        options={countries}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Přílet do" />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Datum odletu"
            value={departure}
            onChange={(newValue) => setDeparture(newValue?.toDate())}
          />
          <DatePicker
            label="Datum návratu"
            value={arrival}
            onChange={(newValue) => setArrival(newValue?.toDate())}
          />
        </DemoContainer>
      </LocalizationProvider>

      <Box sx={{ minWidth: 120, marginTop: "20px", marginBottom: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Delka letů</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={duration}
            label="Delka letů"
            onChange={(event) => setDuration(event.target.value)}
          >
            <MenuItem value={1}>1h</MenuItem>
            <MenuItem value={2}>2h</MenuItem>
            <MenuItem value={3}>3h</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button variant="outlined" className="myBtn" onClick={search}>
        Vyhledat{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-zoom-in"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
          <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
          <path
            fillRule="evenodd"
            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </Button>
    </form>
  );
};

export default SearchForm;
