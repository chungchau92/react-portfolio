import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



export const NavBar = ({currentPage, handlePageChange}) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <div className="logo">
            <a className="logo-link">Chung</a>  
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={currentPage === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handlePageChange('home')}>Home</Nav.Link>
              <Nav.Link className={currentPage === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => handlePageChange('project')}>Projects</Nav.Link>
              <Nav.Link className={currentPage === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => handlePageChange('contact')}>Contact</Nav.Link>
              <Nav.Link className={currentPage === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => handlePageChange('resume')}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
