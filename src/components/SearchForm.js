import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SearchForm = ({search}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(dayjs("2023-06-12"));
  const [arrival, setArrival] = useState(dayjs("2023-06-10"));
  const [duration, setDuration] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
       from, 
       to,
       departure,
       arrival,
       duration,
    }
    search(data);

    setFrom('');
    setTo('');
    setDeparture('');
    setArrival('');
    setDuration('');

  }
  const countries = [
    { code: "CZ", label: "Prague"},
    { code: "FR", label: "Paris"},
    { code: "IT", label: "Rome"},
    { code: "GB", label: "London" },
    { code: "ES", label: "Barcelona"},
    { code: "DE", label: "Berlin" },
    { code: "AT", label: "Vienna" },
    { code: "PT", label: "Lisbon"},
    { code: "GR", label: "Athens"},
    { code: "ES", label: "Madrid"},
    { code: "NL", label: "Amsterdam"},

  ];

  const marksDuration = [
    {
      value: 0,
      label: "1h",
    },
    {
      value: 20,
      label: "2h",
    },
    {
      value: 30,
      label: "3h",
    },
    {
      value: 100,
      label: "10h",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <form className="formAdd">
      <Autocomplete
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
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Přidat letiště"
            value={from}
            onChange={(newValue) => setFrom(newValue)}
          />
        )}
      />
      <Autocomplete
        label="Přílet do"
        className="autocomplete"
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
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Přílet do"
            value={to}
            onChange={(newValue) => setTo(newValue)}
          />
        )}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker label="Datum odletu" defaultValue={dayjs("2023-06-10")} 
             value={departure}
             onChange={(newValue) => setDeparture(newValue)}
          />
          <DatePicker
            label="Datum návratu"
            value={arrival}
            onChange={(newValue) => setArrival(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>

      <Box sx={{ width: 1000, marginBottom: "20px" }}>
        <p className="textLabel">Delka letů</p>
        <Slider
          className="slider"
          aria-label="Custom marks"
          getAriaValueText={valuetext}
          marks={marksDuration}
          value={duration}
          onChange={(newValue) => setDuration(newValue)}
        />
      </Box>
      <Button variant="outlined" className="myBtn" onClick={handleClick}>
        Vyhledat{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-zoom-in"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
          <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
          <path
            fill-rule="evenodd"
            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </Button>
    </form>
  );
};

export default SearchForm;
