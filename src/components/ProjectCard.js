import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub,  } from '@fortawesome/free-brands-svg-icons';

import herokuImg from "../assets/img/heroku.png"


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-icon project-icon">
            <a href="https://github.com/chungchau92?tab=repositories">
                <FontAwesomeIcon icon={faGithub} className="hover:text-black hover:bg-white"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/chungchau92?tab=repositories">
                <img src={herokuImg} className="project-icon-heroku">
                </img>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
