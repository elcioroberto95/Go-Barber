import styled, { css } from "styled-components";
interface ToastTypes {
  type?: "success" | "error" | "info";
  hasDescription: boolean;
}
const toastTypesVariations = {
  info: css`
    background: #ebe8ff;
    color: #3172b7;
  `,
  success: css`
    background: green;
    color: white;
  `,
  error: css`
    background: red;
    color: white;
  `,
};
export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastTypes>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  & + li {
    margin-top: 8px;
  }

  ${(props) => toastTypesVariations[props.type || "info"]}

  >svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
