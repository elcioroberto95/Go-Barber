import { Form } from "@unform/web";
import React from "react";
import {
  FiArrowLeft, FiLock, FiMail, FiUser
} from "react-icons/fi";
import LogoSvg from "../../assets/images/logo.svg";
import Button from "../../components/button";
import Input from "../../components/input";
import { Background, Container, Content } from "./styles";

const SignUp:React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
    console.log('vai se fuder')
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoSvg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>

    </Container>
  );
};
export default SignUp;
