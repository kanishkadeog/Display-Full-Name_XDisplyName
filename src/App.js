import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFullName(`${firstName} ${lastName}`.trim());
  // };

  const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission
  if (!firstName || !lastName) return; // Optional extra check
  // setFullName(`${firstName} ${lastName}`);
  setFullName(`${firstName} ${lastName}`.trim());
};

  return (
    <div
    style={{
      marginLeft: "20px"
    }}
    >
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}
        style={{ display: "flex",
                flexDirection: "column",
                 gap: "12px",
                 marginTop: "20px",
                marginLeft: "20px"  // Add space from the left
                 }}
      >
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <label htmlFor="firstName">First Name:</label>
    <input
      id="firstName"
      type="text"
      placeholder="Enter First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
      style={{ width: "200px" }}
    />
  </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <label htmlFor="lastName">Last Name:</label>
    <input
      id="lastName"
      type="text"
      placeholder="Enter Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
      style={{ width: "200px" }}
    />
  </div>

        <button type="submit" 
        // style={{ width: "100px" }}
        style={{ padding: "4px 12px", fontSize: "14px", width: "80px" }}
        >
          Submit
        </button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
