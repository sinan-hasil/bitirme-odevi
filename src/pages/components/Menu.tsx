import { Container } from "react-bootstrap"
import "../css/menu.css"
import { Link } from "react-router-dom"


const Menu = () => {
  return (
    <div className="bg-dark menu">
        <Container>
            <ul className="d-flex flex-row justify-content-between py-2 fw-light text-white">
                <li><Link className="link" to={"/allProducts"}>PROTEİN</Link></li>
                <li>SPOR GIDALARI</li>
                <li>SAĞLIK</li>
                <li>GIDA</li>
                <li>VİTAMİN</li>
                <li>TÜM ÜRÜNLER</li>
            </ul>
        </Container>
    </div>
  )
}

export default Menu