import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
      <input
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        type="text"
        placeholder="Přidat letiště"
      ></input>
      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        type="text"
        placeholder="Přílet do"
      ></input>
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
      <input
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        type="text"
        placeholder="Délka letů"
      ></input>
      <button onClick={addNewPost}>Hledat</button>
    </form>
  );
};

export default SearchForm;
