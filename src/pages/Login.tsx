import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./css/login-register.css";

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [register, setRegister] = useState<boolean>(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <>
      <Container className="login mt-5">
        <div className="main mt-5">
          <div className="button-div">
            <Button onClick={handleLogin} variant={login ? "light" : "secondary"}>
              Giriş Yap
            </Button>
            <Button onClick={handleRegister} variant={register ? "light" : "secondary"}>
              Kayıt Ol
            </Button>
          </div>
          <div className="input-div mt-5 mb-5">
            {login ? (
              <>
                <div className="login-content">
                  <small>*E-Posta</small>
                  <Form.Control required type="email" className="login-input" />

                  <small>*Şifre</small>
                  <Form.Control
                    required
                    type="password"
                    className="login-input"
                  />
                  <small className="text-end">
                    <a href="">Şifremi Unuttum?</a>
                  </small>
                  <Button variant="dark">GİRİŞ YAP</Button>
                </div>
              </>
            ) : register ? (
              <>
                <div className="register-content">
                <div>
                  <Row>
                    <Col lg={6} sm={12}>
                      <small>ad</small>
                      <Form.Control required type="text" className="register-row-input" />
                    </Col>
                    <Col lg={6} sm={12}>
                      <small>soyad</small>
                      <Form.Control required type="text" className="register-row-input" />
                    </Col>
                  </Row>
                </div>
                <small>E-Posta</small>
                <Form.Control required type="email" className="register-input" />

                <small>Şifre</small>
                <Form.Control required type="password" className="register-input" />
                <Button variant="dark">ÜYE OL</Button>
                <small>Zaten hesabınız var mı? <a href="">Giriş Yap</a></small>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
