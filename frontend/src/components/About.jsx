import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                Hello, I'm Mohamed Yaseer, a passionate Junior DevOps Engineer with hands-on experience in cloud platforms, containerization, CI/CD pipelines, and infrastructure automation. I specialize in building scalable, resilient systems that bridge development and operations.
              </p>

              <h4 className="mt-4">My Journey</h4>
              <p>
                I began my DevOps journey by mastering Linux fundamentals and gradually progressed to advanced cloud-native technologies. Through personal projects, online courses, and community challenges like #100DaysOfDevOps, #KodeKloud I've developed practical skills in automating deployment processes and optimizing infrastructure.
              </p>
              <p>
                Currently, I'm focused on deepening my expertise in Kubernetes orchestration, Terraform for Infrastructure as Code, and implementing robust monitoring solutions to ensure system reliability and performance.
              </p>

              <h4 className="mt-4">DevOps Philosophy</h4>
              <p>
                I believe true DevOps is about culture first, then tools. It's the practice of breaking down silos between teams, fostering collaboration, and creating feedback loops that enable continuous improvement. Automation isn't just about saving time—it's about reducing errors and enabling innovation.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I believe in growing together as a community. On <a href="https://linkedin.com/in/mhdyaseer" target="_blank" rel="noopener noreferrer"><u>LinkedIn</u></a>, I regularly share insights on DevOps trends, career advice for newcomers, and practical tips from my hands-on experience. I'm also active on technical forums, participating in discussions about cloud architecture, automation best practices, and troubleshooting complex infrastructure challenges.
              </p>

              <h4 className="mt-4">Beyond Technology</h4>
              <p>
                When I'm not automating deployments or troubleshooting infrastructure, I enjoy exploring new technologies, participating in hackathons, and staying current with industry trends. I'm passionate about open-source contributions and believe in giving back to the community that has helped me grow.
              </p>

              <h4 className="mt-4">Let's Connect</h4>
              <p>
                I'm always open to discussing DevOps practices, collaboration opportunities, or potential roles. Feel free to reach out via email at <a href="yaseermhdofficial01@gmail.com">yaseermhdofficial01@gmail.com</a> or connect with me on LinkedIn. Let's build better systems together!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;