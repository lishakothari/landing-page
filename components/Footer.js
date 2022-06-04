import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  
  let year = new Date().getFullYear();

  return (
    <section className="footer section">
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">{year} © Designed by Lisha Kothari</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;