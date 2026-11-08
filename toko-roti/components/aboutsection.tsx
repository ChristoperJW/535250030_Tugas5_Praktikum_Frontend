import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutSection = () => (
  <section id="tentang" className="py-5">
    <Container>
      <Row className="align-items-center g-4">
        <Col md={6}>
          <img src="/images/roti_tawar.jpg" alt="Toko roti" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold">Tentang Kami</h2>
          <p className="text-muted">
            Roti Hangat berdiri sejak 2020 dengan satu tujuan: menghadirkan roti
            berkualitas yang dibuat dengan cinta. Semua produk kami dipanggang
            fresh setiap hari tanpa pengawet.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;