import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Insert.css';

const Insert = () => {
  const [data, setData] = useState({ roll: "", name: "", city: "", salary: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/students", data);
    navigate("/display");
  };

  return (
    <>
      <h2>Insert Student Data</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Roll No" required  onChange={(e) => setData({ ...data, roll: e.target.value })} />
        <input placeholder="Name" required  onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input placeholder="City" required  onChange={(e) => setData({ ...data, city: e.target.value })} />
        <input placeholder="Salary" required  onChange={(e) => setData({ ...data, salary: e.target.value })} />
        <button type="submit">Insert</button>
      </form>
    </>
  );
};

export default Insert;