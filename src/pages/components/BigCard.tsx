import { Col, Container, Row } from "react-bootstrap"
import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import card5 from "../images/card5.png"
import card6 from "../images/card6.png"

const BigCard = () => {
  return (
    <>
        <Container className="mt-5">
            <Row className="d-flex">
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card1} />
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card2} />
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card3} />
                </Col>
            </Row>

            <Row className="mt-3">
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card4} />
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card5} />
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-3 d-flex justify-content-center">
                    <img src={card6} />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default BigCard
