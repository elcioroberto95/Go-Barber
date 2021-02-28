import { FormHandles } from '@unform/core';
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import {
  FiArrowLeft, FiLock, FiMail, FiUser
} from "react-icons/fi";
import * as Yup from 'yup';
import LogoSvg from "../../assets/images/logo.svg";
import Button from "../../components/button";
import Input from "../../components/input";
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from "./styles";


const SignUp:React.FC = () => {

  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: object) => {

    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string().required('Email obrigatório').email('Digite um email valido'),
        password: Yup.string().min(6,'Minimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly:false,
      });

    }
    catch(err){

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors); }

  },[])
  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoSvg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input  name="name" icon={FiUser} placeholder="Nome" />
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
