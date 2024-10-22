"use client";

import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validatePhoneNumber = (e) => {
    e.preventDefault();

    const phoneNumberObject = parsePhoneNumberFromString(phoneNumber, "GB"); // GB for UK
    if (phoneNumberObject && phoneNumberObject.isValid()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        color: "white",
        backgroundColor: "#111",
        minHeight: "100vh",
      }}
    >
      <h1>UK Phone Number Validator</h1>
      <form onSubmit={validatePhoneNumber}>
        <div>
          <label htmlFor="phone">Enter Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+447123456789"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "#fff", // Make input background white
              color: "#000", // Set input text color to black
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{ marginTop: "20px", padding: "10px", width: "100%" }}
        >
          Validate
        </button>
      </form>

      {isValid !== null && (
        <div style={{ marginTop: "20px", padding: "10px" }}>
          {isValid ? (
            <p style={{ color: "green" }}>The phone number is valid!</p>
          ) : (
            <p style={{ color: "red" }}>The phone number is invalid.</p>
          )}
        </div>
      )}
    </div>
  );
}
