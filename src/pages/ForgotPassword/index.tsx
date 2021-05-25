import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { appInfo } from '../../configs/appInfo';

interface ForgotPasswordFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmitForm = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        // remove all previous errors
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Informe um e-mail válido'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Acesse seu email para confirmar a recuperação de senha.',
        });
      } catch (e) {
        const isValidationError = e instanceof Yup.ValidationError;

        if (isValidationError) {
          const validationErrors = getValidationErrors(e);
          formRef.current?.setErrors(validationErrors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao recuperar senha',
          description: 'Ocorreu um erro ao recuperar sua senha',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={appInfo.logo} alt={appInfo.name} />

          <Form ref={formRef} onSubmit={handleSubmitForm}>
            <h1>Recuperar senha</h1>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
