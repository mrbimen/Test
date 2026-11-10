import { useState } from "react";

function AddStudent({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) return;

    onAdd(name, Number(age));

    setName("");
    setAge("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={handleNameChange}
      />

      <input
        type="number"
        placeholder="Student age"
        value={age}
        onChange={handleAgeChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
