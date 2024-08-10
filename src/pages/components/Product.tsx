/* eslint-disable react-refresh/only-export-components */
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/product.css";
import { nanoid } from "nanoid";

export interface ProductType{
  id: string;
  name: string;
  short_explanation: string;
  price_info: {
    profit: boolean;
    total_price: number;
    discounted_price: boolean;
    price_per_servings: number;
    discount_percentage: boolean;
  };
  photo_src: string;
  comment_count: number;
  average_star: number; 
}

interface ExportProductProps {
  bestSellersData: ProductType[];
}

const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";

export const fetchbestSellers = async() => {
  const response = await fetch(`${BASE_URL}/products/best-sellers`);
  const bestSellersData = await response.json();
  return bestSellersData.data;
}

const ExportProduct = ({ bestSellersData }: ExportProductProps) => {
const bestSellersMap = bestSellersData.map((item) => ({...item, id: nanoid().slice(0, 3)}));

  return (
    <Container className="mt-5">
      <h2 className="text-center">ÇOK SATANLAR</h2>
      <Row>
        {bestSellersMap.map((item) => (
          <Col sm={6} md={4} lg={2} key={item.id} className="d-flex justify-content-center">
            <Nav.Link as={Link} to={`products/${item.id}`}>
              <div className="product">
                <img src={`https://fe1111.projects.academy.onlyjs.com/${item.photo_src}`} className="prod-img" />
                <h5 className="prod-name">{item.name}</h5>
                <small className="prod-explanation">{item.short_explanation}</small>
                <p>Score: {item.average_star}</p>
                <small>{item.comment_count}</small>
                <h6>{item.price_info.total_price} TL</h6>
              </div>
            </Nav.Link>
          </Col>
        ))}
      </Row>

      
    </Container>
  );
};

export default ExportProduct;