import React from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import LogoSvg from "../../assets/images/logo.svg";
import Button from "../../components/button";
import Input from "../../components/input";
import { Background, Container, Content } from "./styles";

const SignIn:React.FC = () => (
  <Container>
    <Content>
      <img src={LogoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button>Entrar</Button>
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
