import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import * as Yup from 'yup';
import LogoSvg from "../../assets/images/logo.svg";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from "./styles";

interface SignInFormData {
  email:string;
  password:string;
}


const SignIn:React.FC = () => {
const {user,signIn} = useAuth();
console.log(user);


  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: SignInFormData) => {

    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email valido'),
        password: Yup.string().min(6,'Minimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly:false,
      });
      signIn({
        email:data.email,
        password:data.password
      });
    }
    catch(err){

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors); }

  },[signIn]);


  return (
  <Container>
    <Content>
      <img src={LogoSvg} alt="GoBarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />

  </Container>
)
};
export default SignIn;
