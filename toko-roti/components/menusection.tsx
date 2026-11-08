import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const items = [
  { name: "Roti Tawar", price: "Rp 18.000", img: "/images/roti_tawar.jpg" },
  { name: "Croissant", price: "Rp 15.000", img: "/images/croissant.jpg" },
  { name: "Donat Cokelat", price: "Rp 8.000", img: "/images/donat.jpg" },
];

const MenuSection = () => (
  <section id="menu" className="py-5 bg-light">
    <Container>
      <h2 className="fw-bold text-center mb-4">Menu Favorit</h2>
      <Row className="g-4">
        {items.map((item) => (
          <Col key={item.name} xs={12} sm={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.img} style={{ height: 220, objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-muted">{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default MenuSection;