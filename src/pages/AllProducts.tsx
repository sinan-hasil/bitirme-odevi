/* eslint-disable react-refresh/only-export-components */
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/product.css";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import { useState } from "react";

interface AllProductsType {
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

export const fetchAllProducts = async (offset: number) => {
  const response = await fetch(`${BASE_URL}/products?limit=12&offset=${offset}`);
  const allProductsData = await response.json();
  return allProductsData.data.results;
}

const AllProducts = () => {
  const initialProducts = useLoaderData() as AllProductsType[];

  const [product, setProduct] = useState<AllProductsType[]>(initialProducts);
  const [page, setPage] = useState<number>(0);

  const fetchStep = async (newPage: number) => {
    const offset = newPage * 12;
    const pageProducts = await fetchAllProducts(offset);
    setProduct(pageProducts);
    setPage(newPage);
  }

  const nextPage = () => {
    fetchStep(page + 1);
  };

  const beforePage = () => {
    if(page > 0){
      fetchStep(page - 1);
    }
  };

  const allProductsMap = product.map((item) => ({...item, id: nanoid().slice(0, 3)}));

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

          <Button onClick={nextPage}>sonraki sayfa</Button>
          {page < 0 ? (
            null
          ) : (
            <Button onClick={beforePage}>önceki sayfa</Button>
          )}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
