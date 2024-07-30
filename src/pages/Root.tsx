import { Button, Container, Dropdown, Form, InputGroup } from "react-bootstrap";
import logo from "./images/LOGO_Siyah.png";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import "./css/root.css";
import { CiSearch } from "react-icons/ci";
import HamburgerNav from "./components/HamburgerNav"
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const Root = () => {
  return (
    <>
      <Container fluid className="navbar">
        <Container className="d-flex align-items-center justify-content-between py-2">
          <div>
            <Link to={"/"}>
            <img src={logo} className="w-100" />
            </Link>
          </div>

          <div className="input d-flex align-items-center position-relative gap-md-3 gap-lg-5">
            <InputGroup>
              <Form.Control
                placeholder="Aradığınız ürünü yazınız"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <InputGroup.Text
                className="btn btn-secondary px-4"
                id="inputGroup-sizing-default"
              >
                ARA
              </InputGroup.Text>
            </InputGroup>

            <Dropdown>
              <Dropdown.Toggle
                className="text-secondary"
                variant="light"
                id="dropdown-basic"
              >
                <IoPersonOutline /> <span className="span">HESAP</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="secondary d-flex align-items-center px-3 basket-btn">
              <HamburgerNav direciton="right" size={500} />
              {/* <div className="d-flex gap-3 align-tems-center">
                <span className="basket-number">0</span>
                <MdOutlineShoppingCart className="basket-icon mt-1" />
                <span className="basket">SEPET</span>                
              </div>
              </HamburgerNav> */}
            </Button>
          </div>
        </Container>
      </Container>

      

      <div>
        <Container className="responsive-navbar">
          <div>
            <HamburgerNav direciton={"left"} size={240} />
          </div>

          <div>
            <img src={logo} />
          </div>

          <div>
            <MdOutlineShoppingCart />
          </div>
        </Container>
      </div>
      <div className="none-input mt-1">
        <CiSearch className="icon" />
        <Form.Control
          className="text-input"
          type="text"
          placeholder="ARADIĞINIZ ÜRÜNÜ YAZINIZ."
        />
      </div>
      <Menu />
      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
