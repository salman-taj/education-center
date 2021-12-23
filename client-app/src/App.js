import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./app/layout/Header";
import Login from "./features/auth/Login";
import Home from "./features/dashboard/Home";
import Application from "./features/admission/Application";
import Enrollment from "./features/admission/Enrollment";
import Footer from "./app/layout/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/applications" element={<Application />} />
          <Route exact path="/enrollments" element={<Enrollment />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
