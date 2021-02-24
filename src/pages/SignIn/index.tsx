import React from "react";
import { FiLogIn } from "react-icons/fi";
import LogoSvg from "../../assets/images/logo.svg";
import { Background, Container, Content } from "./styles";

const SignIn:React.FC = () => (
  <Container>
    <Content>
      <img src={LogoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />

  </Container>
);
export default SignIn;
