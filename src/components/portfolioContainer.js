import React, { useState } from "react";
import  {Home}  from "./Home";
import { Projects } from "./Projects";
import Resume from "./Resume";
import { NavBar } from "./NavBar";
import {Contact} from "./Contact"
import { Footer } from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    }
    if (currentPage === "project") {
      return <Projects />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
