import { Col, Container, Row } from "react-bootstrap"
import img from "./images/5-htp_ 1.png"

const ProductDetail = () => {
  return (
    <Container>
        <Row>
          <Col>
            <img src={img} />
          </Col>

          <Col>
            <h5>WHEY PROTEIN</h5>
            <p>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</p>
            <p className="comment">10869 Yorum</p>
            <div>
              <button>VEJETARYEN</button>
              <button>GLUTENSİZ</button>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default ProductDetail