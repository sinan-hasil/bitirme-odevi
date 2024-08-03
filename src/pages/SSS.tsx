import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Delevery from "./components/Delevery";
import "./css/sss.css";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";

const SSS = () => {
  const [genel, setGenel] = useState<boolean>(true);
  const [products, setProducts] = useState<boolean>(false);
  const [delevery, setDelevery] = useState<boolean>(false);

  return (
    <>
      <Delevery />

      <Container className="mt-5">
        <div className="button-div">
          <Button
            onClick={() => {
              setGenel(true);
              setProducts(false);
              setDelevery(false);
            }}
            variant={genel ? "dark" : "light"}
          >
            Genel
          </Button>
          <Button
            onClick={() => {
              setProducts(true);
              setDelevery(false);
              setGenel(false);
            }}
            variant={products ? "dark" : "light"}
          >
            Ürünler
          </Button>
          <Button
            onClick={() => {
              setDelevery(true);
              setGenel(false);
              setProducts(false);
            }}
            variant={delevery ? "dark" : "light"}
          >
            Kargo
          </Button>

          <p>
            {genel ? (
              <>
                <CiCreditCard1 /> Genel
              </>
            ) : products ? (
              <>
                <MdOutlineProductionQuantityLimits /> Ürünler
              </>
            ) : delevery ? (
              <>
                <GiCargoCrate /> Kargo
              </>
            ) : null}
          </p>
        </div>
      </Container>

      <Container className="accordion-body mt-5 mb-5 px-2 py-2 d-flex flex-column gap-2">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            OJS Nutrition ürünlerinin menşei neresi?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Hangi sertifikalarınız var?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            OJS Nutrition ürünleri nerede satılıyor?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Taksit seçeneği neden yok?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Taksit seçeneği neden yok?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Siparişimi nasıl iptal edebilirim?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sattığınız ürünler ilaç mıdır?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Siparişimi teslim alırken nelere dikkat etmeliyim ?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Kapıda ödeme hizmetiniz var mı?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sipariş takibimi nasıl yapabilirim ?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            İptal ve İade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır ?
          </AccordionSummary>
          <AccordionDetails>
            <p>asd</p>
          </AccordionDetails>
        </Accordion>
      </Container>

      <Container className="contact-form mb-5">
        <p>Bize aşağıdaki iletişim formundan ulaşabilirsiniz.</p>
        <Row>
          <Col lg={6} sm={12}>
            <Form.Control
              required
              type="text"
              placeholder="İsim *"
              className="register-row-input"
            />
          </Col>
          <Col lg={6} sm={12}>
            <Form.Control
              required
              type="text"
              placeholder="Soyad"
              className="register-row-input"
            />
          </Col>
        </Row>

        <Form.Control
          required
          type="email"
          placeholder="E-Posta"
          className="register-input"
        />
        <Form.Control
          as="textarea"
          placeholder="Mesaj"
          style={{ height: "170px" }}
        />
      </Container>
    </>
  );
};

export default SSS;