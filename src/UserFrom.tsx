import React, { useState } from "react";

const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ margin: "0.5rem" }}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ margin: "0.5rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Submit</button>
      </form>

      {submittedData && (
        <div style={{ background: "#f4f4f4", padding: "1rem", borderRadius: "5px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
