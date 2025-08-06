import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;