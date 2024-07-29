import { Col, Container, Row } from "react-bootstrap";
import prod1 from "./images/prod1.png";
import prod2 from "./images/prod2.png";
import prod3 from "./images/prod3.png";
import prod4 from "./images/prod4.png";
import prod5 from "./images/prod5.png";
import prod6 from "./images/prod6.png";
import prod7 from "./images/prod7.png";
import prod8 from "./images/prod8.png";
import prod9 from "./images/prod9.png";
import prod10 from "./images/prod10.png";
import prod11 from "./images/prod11.png";
import prod12 from "./images/prod12.png";
import { nanoid } from "nanoid";
import "./css/product.css";

interface Products {
  id: string;
  src: string;
  name: string;
  explanation: string;
  score: number;
  comments: string;
  price: string;
}

const AllProducts = () => {
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
    {
      id: nanoid(10).slice(0, 3),
      src: prod7,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod8,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod9,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod10,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod11,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
    {
      id: nanoid(10).slice(0, 3),
      src: prod12,
      name: "CREATINE",
      explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      score: 5,
      comments: "10869 Yorum",
      price: "549 TL",
    },
  ];

  return (
    <>
      <Container className="mt-5 mb-3">
        <h1 className="text-center">PROTEİN</h1>

        <Row>
          {prodArr.map((prod) => {
            return (
              <Col key={prod.id} md={4} lg={3}>
                <div className="product mb-3">
                  <img src={prod.src} alt={prod.name} className="img-fluid" />
                  <h5 className="prod-name">{prod.name}</h5>
                  <small className="prod-explanation">{prod.explanation}</small>
                  <p>Score: {prod.score}</p>
                  <small>{prod.comments}</small>
                  <h6>{prod.price}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
