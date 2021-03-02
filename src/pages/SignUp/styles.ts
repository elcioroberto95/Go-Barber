import { shade } from "polished";
import styled from "styled-components";
import SignInBackground from "../../assets/images/room-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f3ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      &:hover {
        color: ${shade(0.2, "#F3EDE8")};
      }
    }
  }
  > a {
    color: #fff;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;
  }
  svg {
    margin-right: 16px;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;
