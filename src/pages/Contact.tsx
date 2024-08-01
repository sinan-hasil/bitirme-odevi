import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./css/contact.css"

const Contact = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center fw-bold">Bize Ulaşın</h1>
      <p className="mt-5">
        Bize aşağıdaki iletişim numarasından ulaşabilirsiniz.
      </p>

      <Row className="mb-3">
        <Col sm={12}>
          <Form.Control type="text" placeholder="isim" />
        </Col>

        <Col sm={12}>
          <Form.Control type="text" placeholder="soyad" />
        </Col>
      </Row>

      <Row className="gap-3">
        <Col lg={12}>
          <Form.Control type="email" placeholder="E-Posta" />
        </Col>

        <Col lg={12}>
          <Form.Control
            as="textarea"
            placeholder="Mesaj"
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
      <div className="d-flex flex-column align-items-center mt-4">
      <Button variant="dark" style={{ height: "50px" }}>GÖNDER</Button>
      <p className="mt-4 text-center">*Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar verilen siparişler icin geçerlidir. <br />
      Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.</p>
      <p className="mt-4 text-center mb-5">Telefon ile <b>0850 303 29 89</b> numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi saat <br />
      <b>09:00-17:00</b> arasında dönüş sağlanmaktadır.</p>
      </div>
    </Container>
  );
};

export default Contact;
