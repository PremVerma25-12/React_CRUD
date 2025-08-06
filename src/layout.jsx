import { Link, Outlet } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        | <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/service">Service</Link> |
        <Link to="/insert">Insert</Link> |
        <Link to="/display">Display</Link> |
      </nav>
      <hr />
      <Outlet />
      <hr />
      <footer>© www.mycompany.com - All Rights Reserved</footer>
    </>
  );
};

export default Layout;