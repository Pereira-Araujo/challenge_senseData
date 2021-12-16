import styled from "styled-components";
import notFoundImage from "../../assets/not_found.png";
export const NotFound = styled.main`
  width: auto;
  height: 100vh;
  background-image: url(${notFoundImage});

  @media (max-width: 1100px) {
    background-size: 100vw 100vh;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 610px) {
    background-size: 100% auto;

    background-repeat: repeat;
  }
`;
