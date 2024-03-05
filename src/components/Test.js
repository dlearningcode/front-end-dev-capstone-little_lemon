import "../css/Test.css";
import React, { useState } from "react";

export default function Test() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setSubmitted(value);
    setValue("");
  };

  return (
    <div className="text-wrapper">
      <form onSubmit={submitHandler}>
        <fieldset>
          <div className="field">
            <label htmlFor="input">
              Input
              <input
                id="input"
                value={value}
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>

      <h3>You typed: {submitted}</h3>
    </div>
  );
}
