import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AvatarInput } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);
          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast],
  );

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        // remove all previous errors
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Informe um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/home');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description: 'Suas informações foram atualizadas com sucesso!',
        });
      } catch (e) {
        const isValidationError = e instanceof Yup.ValidationError;

        if (isValidationError) {
          const validationErrors = getValidationErrors(e);
          formRef.current?.setErrors(validationErrors);
          return;
        }

        addToast({
          title: 'Erro ao atualizar perfil',
          type: 'error',
          description: 'Não foi possível atualizar seu perfil',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/home">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: user.name,
            email: user.email,
          }}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input
            name="name"
            defaultValue={user.name}
            placeholder="Nome"
            icon={FiUser}
          />
          <Input
            defaultValue={user.email}
            name="email"
            placeholder="E-mail"
            icon={FiMail}
          />
          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
          />
          <Input
            name="password"
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
          />
          <Input
            name="password_confirmation"
            placeholder="Confirmar senha"
            type="password"
            icon={FiLock}
          />

          <Button type="submit">Confirmar mudanças</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
