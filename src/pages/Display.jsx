import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Display.css';

const Display = () => {
  const [students, setStudents] = useState([]);
  const [originalStudents, setOriginalStudents] = useState([]); // For resetting after search
  const [searchQuery, setSearchQuery] = useState(""); // For search input

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/students");
    setStudents(res.data);
    setOriginalStudents(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    fetchData();
  };

const handleSearch = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);

  const filtered = originalStudents.filter((student) =>
    Object.values(student).some((value) =>
      String(value).toLowerCase().includes(query)
    )
  );

  setStudents(filtered);
};

return (
  <>
    <h1>Student Management System</h1>
    <input
      type="search"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search by data..."
    />

    {students.length > 0 ? (
      <table border="1">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>City</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.roll}</td>
              <td>{stu.name}</td>
              <td>{stu.city}</td>
              <td>{stu.salary}</td>
              <td>
                <Link to={`/update/${stu.id}`}>Edit</Link> |{" "}
                <button onClick={() => handleDelete(stu.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h1>No data found.</h1>
    )}
  </>
);
};

export default Display;
