/* eslint-disable react-refresh/only-export-components */
import { Container, Row } from "react-bootstrap";
import "./css/product.css";

const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";

export const fetchAllProducts =  async () => {
  const response = await fetch(`${BASE_URL}/products?limit=20&offset=0`);
  const allProductsData = await response.json();
  console.log(allProductsData.data.results);
  return allProductsData.data.results;
}

const AllProducts = () => {

  return (
    <>
      <Container className="mt-5 mb-3">
        <h1 className="text-center">PROTEİN</h1>

        <Row>
          {/* {prodArr.map((prod) => {
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
          })} */}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
