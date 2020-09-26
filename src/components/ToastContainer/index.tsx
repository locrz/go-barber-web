import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Titulo legal</strong>
          <p>Ops aqui vai uma mensagem legal</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast hasDescription={false} type="error">
        <FiAlertCircle />
        <div>
          <strong>Titulo legal</strong>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast hasDescription type="success">
        <FiAlertCircle />
        <div>
          <strong>Titulo legal</strong>
          <p>Ops aqui vai uma mensagem legal</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
