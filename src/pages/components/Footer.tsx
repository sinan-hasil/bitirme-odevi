import { Col, Container, Nav, Row } from "react-bootstrap";
import footerLogo from "../images/footer-logo.png";
import "../css/footer.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <Container className="footer-block">
        <Row>
          <Col>
            <div className="first-list">
              <div>
                <img src={footerLogo} />
              </div>
              <div><Nav.Link as={Link} to={"/contact"}>İletişim</Nav.Link></div>
              <div>Hakkımızda</div>
              <div>Sıkça Sorulan Sorular</div>
              <div>KVKK</div>
              <div>Çalışma İlkelerimiz</div>
              <div>Satış Sözleşmesi</div>
              <div>Garanti ve İade Koşulları</div>
              <div>Gerçek Müşteri Yorumları</div>
              <div>Blog</div>
            </div>
          </Col>

          <Col>
            <div className="second-list">
              <div>
                <h5>Kategoriler</h5>
              </div>
              <div>Protein</div>
              <div>Spor Gıdaları</div>
              <div>Sağlık</div>
              <div>Gıda</div>
              <div>Vitamin</div>
              <div>Aksesuar</div>
              <div>Tüm Ürünler</div>
              <div>Paketler</div>
              <div>Lansmana Özel Fırsatlar</div>
            </div>
          </Col>

          <Col>
            <div className="third-list">
              <div>
                <h5>Popüler Ürünler</h5>
              </div>
              <div>Whey Protein</div>
              <div>Cream of Rice</div>
              <div>Creatine</div>
              <div>BCAA+</div>
              <div>Pre-Workout</div>
              <div>Fitness Paketi</div>
              <div>Collagen</div>
              <div>Günlük Vitamin Paketi</div>
              <div>ZMA</div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="akordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="bg-dark text-white"
          >
            OJS Nutrition
          </AccordionSummary>
          <AccordionDetails className="bg-dark text-white">
            <div className="first-list">
              <div>İletişim</div>
              <div>Hakkımızda</div>
              <div>Sıkça Sorulan Sorular</div>
              <div>KVKK</div>
              <div>Çalışma İlkelerimiz</div>
              <div>Satış Sözleşmesi</div>
              <div>Garanti ve İade Koşulları</div>
              <div>Gerçek Müşteri Yorumları</div>
              <div>Blog</div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="bg-dark text-white"
          >
            Kategoriler
          </AccordionSummary>
          <AccordionDetails className="bg-dark text-white">
            <div className="second-list">
              
              <div>Protein</div>
              <div>Spor Gıdaları</div>
              <div>Sağlık</div>
              <div>Gıda</div>
              <div>Vitamin</div>
              <div>Aksesuar</div>
              <div>Tüm Ürünler</div>
              <div>Paketler</div>
              <div>Lansmana Özel Fırsatlar</div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="bg-dark text-white"
          >
            Popüler Ürünler
          </AccordionSummary>
          <AccordionDetails className="bg-dark">
            <div className="third-list">
              
              <div>Whey Protein</div>
              <div>Cream of Rice</div>
              <div>Creatine</div>
              <div>BCAA+</div>
              <div>Pre-Workout</div>
              <div>Fitness Paketi</div>
              <div>Collagen</div>
              <div>Günlük Vitamin Paketi</div>
              <div>ZMA</div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Footer;
