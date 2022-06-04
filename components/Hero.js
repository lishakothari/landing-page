import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../data/Hero.json';
const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="content-hero">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">{data.heading}</p>
              <h1>{data.text} <span className="text-primary font-weight-medium">Name</span></h1>
              <p>{data.paragraph}</p>
              <button> Learn More </button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src={data.image} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;