import BigCard from "./components/BigCard";
import Delevery from "./components/Delevery";
import Footer from "./components/Footer";
import MainpageComments from "./components/MainpageComments";
import Menu from "./components/Menu";
import ExportProduct from "./components/Product";
import bigImg from "./images/OJS nutrition slider banner 2.png";
import sport from "./images/sport.png";
import { Col, Container, Row } from "react-bootstrap";
import "./css/footer.css"

const Mainpage = () => {
  return (
    <>
      <Menu />
      <Delevery />

      <div>
        <img src={bigImg} className="img-fluid w-100" />
      </div>

      <BigCard />
      <ExportProduct />

      <Container fluid className="sport mt-4" style={{ position: "relative" }}>
        <img src={sport} className="img-fluid w-100" />
      </Container>

      <MainpageComments />

      <div className="top-footer bg-dark py-4 text-white mt-5">
        <Container>
          <div>SCORE - (140.000+)</div>

          <Row>
            <Col>
              <h2>
                LABORATUVAR TESTLİ ÜRÜNLER
                <br />
                AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET GARANTİSİ
              </h2>
            </Col>
            <Col>
              <p className="text-secondary">
                200.000'den fazla ürün yorumumuza dayanarak,
                <br />
                ürünlerimizi seveceğinize eminiz. Eğer herhangi
                <br />
                bir sebeple memnun kalmazsan, bizimle iletişime
                <br />
                geçtiğinde çözüme kavuşturacağız.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Mainpage;