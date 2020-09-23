import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" placeholder="Nome" icon={FiUser} />
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input name="password" placeholder="Senha" icon={FiLock} />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="#">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignUp;
