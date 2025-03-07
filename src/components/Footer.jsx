import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
        <Col className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} PixelCart. All rights reserved.</p>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;