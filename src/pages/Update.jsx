import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ roll: "", name: "", city: "", salary: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/students/${id}`, student);
    navigate("/display");
  };

  return (
    <>
      <h2>Update Student Data</h2>
      <form onSubmit={handleUpdate}>
        <input value={student.roll} onChange={(e) => setStudent({ ...student, roll: e.target.value })} />
        <input value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
        <input value={student.city} onChange={(e) => setStudent({ ...student, city: e.target.value })} />
        <input value={student.salary} onChange={(e) => setStudent({ ...student, salary: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;