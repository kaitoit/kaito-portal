import React, { useState } from "react";
import axios from "axios";

const TicketForm = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://<your-api>.azurewebsites.net/api/tickets", {
      subject,
      description,
    });
    alert("Ticket submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Ticket</h2>
      <input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
