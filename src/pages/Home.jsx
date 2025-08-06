import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple student management system built with React and JSON Server.</p>
      <p>You can add, search, update, and delete student records with ease.</p>
      
      <Link to="/insert">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
