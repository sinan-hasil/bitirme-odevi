/* eslint-disable react-refresh/only-export-components */
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import "./css/product.css";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

interface AllProductsType {
  id: number;
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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchAllProducts = async (offset: any) => {
  const response = await fetch(
    `${BASE_URL}/products?limit=12&offset=${offset}`
  );
  const allProductsData = await response.json(); 
  return allProductsData.data.results;
};

const AllProducts = () => {
  const initialProducts = useLoaderData() as AllProductsType[];

  const [product, setProduct] = useState<AllProductsType[]>(initialProducts);
  const [page, setPage] = useState<number>(0);

  const fetchStep = async (newPage: number) => {
    const offset = newPage * 12;
    const pageProducts = await fetchAllProducts(offset);
    setProduct(pageProducts);
    setPage(newPage);
  };

  const nextPage = () => {
    fetchStep(page + 1);
  };

  const beforePage = () => {
    if (page > 0) {
      fetchStep(page - 1);
    }
  };

  return (
    <>
      <Container className="mt-5 mb-3">
        <h1 className="text-center mb-5">PROTEİN</h1>

        <Row>
          {product.map((prod) => {
            return (
              <Col key={prod.id} md={4} lg={3}>
                <Nav.Link as={Link} to={`${prod.id}`}>
                  <div className="product mb-3">
                    <img
                      src={`https://fe1111.projects.academy.onlyjs.com/${prod.photo_src}`}
                      alt={prod.name}
                      className="img-fluid"
                    />
                    <h5 className="prod-name">{prod.name}</h5>
                    <small className="prod-explanation">
                      {prod.short_explanation}
                    </small>
                    <p>Score: {prod.average_star}</p>
                    <small>{prod.comment_count}</small>
                    <h6>{prod.price_info.total_price}</h6>                    
                  </div>
                </Nav.Link>
              </Col>
            );
          })}

          <div className="d-flex justify-content-center gap-3 mt-4 mb-5">
            {page === 0 ? null : (
              <Button variant="light" onClick={beforePage}>
                <MdKeyboardDoubleArrowLeft /> önceki sayfa
              </Button>
            )}
            <Button variant="light" onClick={nextPage}>
              sonraki sayfa <MdKeyboardDoubleArrowRight />
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
