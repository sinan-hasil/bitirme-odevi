import { Col, Container, Form, Row } from "react-bootstrap"


const Contact = () => {
  return (
    <Container className="mt-5">
        <h1 className="text-center fw-bold">Bize Ulaşın</h1>
        <p className="mt-5">Bize aşağıdaki iletişim numarasından ulaşabilirsiniz.</p>

        <Row className="gap-3">
            <Row>
            <Col lg={6}>
            <Form.Control            
            type="text"  
            placeholder="İsim *" 
            className="w-100"         
          />
            </Col>

            <Col lg={6}>
            <Form.Control            
            type="text"  
            placeholder="soyad"
            className="w-100"          
          />
            </Col>
            </Row>

            <Col lg={12}>
            <Form.Control            
            type="email"  
            placeholder="E-Posta"          
          />
            </Col>

            <Col lg={12}>
            <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
            </Col>
        </Row>
    </Container>
  )
}

export default Contact