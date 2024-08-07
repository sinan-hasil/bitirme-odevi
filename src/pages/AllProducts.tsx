/* eslint-disable react-refresh/only-export-components */
import { Container, Row, Col } from "react-bootstrap";
import "./css/product.css";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

interface AllProductsType{
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

const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";

export const fetchAllProducts =  async () => {
  const response = await fetch(`${BASE_URL}/products?limit=12&offset=36`);
  const allProductsData = await response.json();
  console.log(allProductsData.data.results);
  return allProductsData.data.results;
}

const AllProducts = () => {
const allProductsData = useLoaderData() as AllProductsType[];
const allProductsMap = allProductsData.map((item) => ({...item, id: nanoid().slice(0, 3)}));
  return (
    <>
      <Container className="mt-5 mb-3">
        <h1 className="text-center mb-5">PROTEİN</h1>

        <Row>
            {allProductsMap.map((prod) => {
            return (
              <Col key={prod.id} md={4} lg={3}>
                <div className="product mb-3">
                  <img src={`https://fe1111.projects.academy.onlyjs.com/${prod.photo_src}`} alt={prod.name} className="img-fluid" />
                  <h5 className="prod-name">{prod.name}</h5>
                  <small className="prod-explanation">{prod.short_explanation}</small>
                  <p>Score: {prod.average_star}</p>
                  <small>{prod.comment_count}</small>
                  <h6>{prod.price_info.total_price}</h6>
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
