import styled from "styled-components";

export const Layout = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 25vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  flex-direction: column;
`;

export const Ordered = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #eae8fe;
  width: 21vw;
  height: 55vh;
  border-radius: 15px;
  margin: 10px 10px 5px 10px;
  overflow-y: auto;
`;

export const OrderTotal = styled.p`
  font-weight: 600;
  margin-left: 180px;
  margin-top: 5px;
`;

export const OrderButton = styled.button`
  background-color: #6327fe;
  color: white;
  border-radius: 10px;
  border: none;
  width: 7vw;
  height: 10vh;
  font-size: 17px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 25px;
  cursor: pointer;
`;
