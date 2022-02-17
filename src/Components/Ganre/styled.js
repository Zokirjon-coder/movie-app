import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 25px;
`;

export const Button = styled.button`
all: unset;
box-sizing: border-box;
border-radius: 15px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 35px;
font-size: 16px;
color: ${({active})=>active?'#fff':'#333'};
background: ${({active})=>active?'#219ebc':'#8ecae6'};
:hover{
    background: #219ebc;
    color: #fff;
}

@media screen and (max-width: 450px) {
    padding: 8px 25px;
    font-size: 14px;
}
`;