import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imgPj1 from "../assets/img/tech-blog.png"
import imgPj2 from "../assets/img/text-editor.png"

import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Tech-blog",
      description: "Experess,MYSQL",
      imgUrl: imgPj1,
    },
    {
      title: "Text-editor",
      description: "Express,Webpack",
      imgUrl: imgPj2,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className={"animate__animated animate__fadeIn py-5"}>
                <h2 className="py-5">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
