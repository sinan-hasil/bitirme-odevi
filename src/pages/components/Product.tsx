import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import prod4 from "../images/prod4.png";
import prod5 from "../images/prod5.png";
import prod6 from "../images/prod6.png";
import "../css/product.css";

interface Products {
  id: string;
  src: string;
  name: string;
  explanation: string;
  score: number;
  comments: string;
  price: string;
}

const ExportProduct = () => {
  const prodArr: Products[] = [
    {
      id: nanoid(10).slice(0, 3),
      src: prod1,
      name: "WHEY PROTEIN",
      explanation: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod2,
      name: "FITNESS PAKETİ",
      explanation: "EN POPÜLER ÜRÜNLER BİR ARADA",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod3,
      name: "GÜNLÜK VİTAMİN PAKETİ",
      explanation: "EN SIK TÜKETİLEN TAKVİYELER",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod4,
      name: "PRE-WORKOUT SUPREME",
      explanation: "ANTRENMAN ÖNCESİ TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod5,
      name: "CREAM OF RICE",
      explanation: "EN LEZZETLİ PİRİNÇ KREMASI",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod6,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center">ÇOK SATANLAR</h2>
      <Row>
        {prodArr.map((product, index) => (
          <Col sm={6} md={4} lg={2} key={index} className="d-flex- justfy-content-center">
            <Nav.Link as={Link} to={`products/${product.id}`}>
              <div className="product">
                <img src={product.src} alt={product.name} className="prod-img" />
                <h5 className="prod-name">{product.name}</h5>
                <small className="prod-explanation">{product.explanation}</small>
                <p>Score: {product.score}</p>
                <small>{product.comments}</small>
                <h6>{product.price}</h6>
              </div>
            </Nav.Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExportProduct;
