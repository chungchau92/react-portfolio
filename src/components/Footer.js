import { Container, Row } from "react-bootstrap";

import footerIcon from "../assets/img/nav-icon1.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"><img src={footerIcon} alt="Icon" /></a>
              <a href="https://github.com/chungchau92?tab=repositories">
                  <FontAwesomeIcon icon={faGithub} className="hover:text-black hover:bg-white"></FontAwesomeIcon>
              </a>
            </div>
        </Row>
      </Container>
    </footer>
  )
}
