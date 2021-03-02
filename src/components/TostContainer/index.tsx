import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, Toast } from "./styles";
const TostContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="error" hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro...</strong>
          <p>Não foi possivel fazer login na aplicação.</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro...</strong>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro...</strong>
          <p>Não foi possivel fazer login na aplicação.</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};
export default TostContainer;
