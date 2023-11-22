import styled from "styled-components";

export const Layout = styled.div`
  width: 18vw;
  background-color: white;
  border: 3px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
`;

export const OrderImg = styled.img`
  width: 4vw;
`;

export const OrderName = styled.p`
  font-weight: 600;
`;

export const OrderDelete = styled.button`
  cursor: pointer;
  border: 3px solid #dedede;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border-radius: 10px;
  margin-right: 10px;
  background-color: red;
`;
