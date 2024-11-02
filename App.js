import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import Home from "./Service/Home";
import About from "./Service/About";
import WashingMachine from "./Service/WashingMachine";
import FridgeService from "./Service/FridgeService";
import TvService from "./Service/TvService";
import AcService from "./Service/AcService";
import MicroWaveOven from "./Service/MicroWaveOven";
import WaterHeater from "./Service/WaterHeaterService";
import WaterPurifier from "./Service/WaterPurifierService";
import Contact from "./Service/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const closeNav = () => setIsNavCollapsed(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={closeNav}>
                    HOME APPLIANCE SERVICE
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse justify-content-end`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNav}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" onClick={closeNav}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/WashingMachine" onClick={closeNav}>
                                        Washing Machine
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/FridgeService" onClick={closeNav}>
                                        Fridge
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/AcService" onClick={closeNav}>
                                        AC
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/TvService" onClick={closeNav}>
                                        TV
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/MicroWaveOven" onClick={closeNav}>
                                        Microwave Oven
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/WaterHeaterService" onClick={closeNav}>
                                        Water Heater
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/WaterPurifierService" onClick={closeNav}>
                                        Water Purifier
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" onClick={closeNav}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
         {/* Main content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/WashingMachine" element={<WashingMachine />} />
            <Route path="/FridgeService" element={<FridgeService />} />
            <Route path="/TvService" element={<TvService />} />
            <Route path="/AcService" element={<AcService />} />
            <Route path="/MicroWaveOven" element={<MicroWaveOven />} />
            <Route path="/WaterHeaterService" element={<WaterHeater />} />
            <Route path="/WaterPurifierService" element={<WaterPurifier />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

       
        <footer
          id="footer"
          className="text-light text-center text-lg-start mt-auto pt-4"
        >
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  HOME APPLIANCE SERVICE
                </h6>
                <p>
                  We provide reliable home appliance repair services including
                  washing machines, ACs, fridges, TVs, microwaves, and more.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Our Services</h6>
                <p>
                  <Link to="/WashingMachine" className="text-light">
                    Washing Machine Service
                  </Link>
                </p>
                <p>
                  <Link to="/AcService" className="text-light">
                    AC Service
                  </Link>
                </p>
                <p>
                  <Link to="/FridgeService" className="text-light">
                    Fridge Service
                  </Link>
                </p>
                <p>
                  <Link to="/TvService" className="text-light">
                    TV Service
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <p>
                  <i className="fas fa-home mr-3"></i>No.8, Sarvodaya 4th
                  Street, New Ellis Nagar, Madurai-625016
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  info@homeapplianceservice.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +919943562170
                </p>
              </div>
            </div>
          </div>
          <div className="text-center p-3 bg-dark">
            © 2024 All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
