import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Login = () => {

    const [login, setLogin] = useState<boolean>(false);
    const [register, setRegister] = useState<boolean>(false);

    const handleLogin = () => {
        setLogin(true);
        setRegister(false);
    }

    const handleRegister = () => {
        setLogin(false);
        setRegister(true);
    }

  return (
    <>
      <Container>
        <div className="main">
          <div className="button-div">
            <Button onClick={handleLogin} variant="light">Giriş Yap</Button>
            <Button onClick={handleRegister} variant="secondary">Kayıt Ol</Button>
          </div>
          <div className="input-div">
            {login ? (
                <>
                </>
            ): register ? (
                <></>
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
