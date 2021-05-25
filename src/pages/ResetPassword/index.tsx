import React, { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { appInfo } from '../../configs/appInfo';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();

  const { addToast } = useToast();

  const handleSubmitForm = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        // remove all previous errors
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('A senha é obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, { abortEarly: false });
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password: data.password,
          password_confirmation: data.password_confirmation,
          token: location.search.replace('?token=', ''),
        });

        history.push('/');
      } catch (e) {
        const isValidationError = e instanceof Yup.ValidationError;

        if (isValidationError) {
          const validationErrors = getValidationErrors(e);
          formRef.current?.setErrors(validationErrors);
          return;
        }

        addToast({
          title: 'Aconteceu um erro',
          type: 'error',
          description: 'Não foi possível trocar sua senha',
        });
      }
    },
    [addToast, history, location],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={appInfo.logo} alt={appInfo.name} />

          <Form ref={formRef} onSubmit={handleSubmitForm}>
            <h1>Resetar senha</h1>

            <Input
              type="password"
              name="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <Input
              type="password"
              name="password_confirmation"
              placeholder="Confirmação de senha"
              icon={FiLock}
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
