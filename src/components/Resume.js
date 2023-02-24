
import { Container } from "react-bootstrap";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="row">
          <div className="col text-center">
            <p className="skill-secion">Fontend:</p>
            <ul className="skill-list text-center">
              <li className="skill-list-item">
                HTML
              </li>
              <li className="skill-list-item">
                CSS
              </li>
              <li className="skill-list-item">
                JavaScript
              </li>
              <li className="skill-list-item">
                React
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <p className="skill-secion">Backend:</p>
            <ul className="skill-list text-center">
              <li className="skill-list-item">
                Nodejs
              </li>
              <li className="skill-list-item">
                ExpressJs
              </li>
              <li className="skill-list-item">
                MongoDB
              </li>
              <li className="skill-list-item">
                MYSQL
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
