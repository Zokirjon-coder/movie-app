import styled from "styled-components";

export const Container = styled.div`
  &:hover {
    img {
      filter: brightness(0.7);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    margin-top: 10px;
  }
  margin-bottom: 15px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    font-weight: 600;
    font-size: 14px;
  }
`;
