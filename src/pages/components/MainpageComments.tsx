import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../css/main-page-comments.css";

const MainpageComments = () => {
  const comments = [
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      subtitle:
        `Ürün gayet güzel ama ekşiliği bi
         süreden sonra bayabiliyor insanı
          teşekkürler.`,
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      subtitle:
        `Ürün gayet güzel ama ekşiliği bi
         süreden sonra bayabiliyor insanı
          teşekkürler.`,
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      subtitle:
        `Ürün gayet güzel ama ekşiliği bi
         süreden sonra bayabiliyor insanı
          teşekkürler.`,
    },
    {
      date: "03/05/24",
      title: "Beğendim gayet güzeldi",
      subtitle:
        `Ürün gayet güzel ama ekşiliği bi
         süreden sonra bayabiliyor insanı
          teşekkürler.`,
    },
  ];
  return (
    <>
      <div className="mt-5">
        <Container className="title">
          <h5>GERÇEK MÜŞTERİ YORUMLARI</h5>
          <div className="main-comments">
            <div>234</div>
            <div>198453 Yorum</div>
            <div>
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
          </div>
        </Container>

        <Container className="mt-4">
          <Row className="d-flex">
            {comments.map((comment, index) => {
              return (
                <Col sm={12} md={6} lg={3} key={index} className="comment-map">
                  <small>{comment.date}</small>
                  <h5>{comment.title}</h5>
                  <small className="subtitle">{comment.subtitle}</small>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainpageComments;
