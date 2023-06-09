import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from '@mui/material/Button';
import MyInput from "./UI/input/MyInput";

const SearchForm = ({ create }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [duration, setDuration] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      from,
      to,
      value,
      duration,
      //   selectedDate: formatSelectedDate(selectedDate.toISOString()),
    };
    create(newPost);
    setFrom("");
    setTo("");
    setValue("");
    setDuration("");
  };

  return (
    <form className="formAdd">
      <MyInput 
        id="myInput"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        type="text"
        placeholder="Přidat letiště"
      ></MyInput>
      <MyInput
        value={to}
        onChange={(e) => setTo(e.target.value)}
        type="text"
        placeholder="Přílet do"
      ></MyInput>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker label="Datum odletu" defaultValue={dayjs("2022-04-17")} />
          <DatePicker
            label="Datum návratu"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <MyInput
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        type="text"
        placeholder="Délka letů"
      ></MyInput>
      <Button variant="outlined" className="myBtn" onClick={addNewPost}>
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
