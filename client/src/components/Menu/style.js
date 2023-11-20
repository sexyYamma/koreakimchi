import styled from "styled-components";

export const Layout = styled.div`
  background-color: white;
  cursor: pointer;
  border: 5px solid ${(props) => (props.border ? "#6327FE" : "#D8D8D8")};
  width: 10vw;
  height: 30vh;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 60px 40px 60px;
  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SoldOut = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #ff0000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(51, 51, 51, 0.75);
`;

export const MenuImg = styled.img`
  width: 160px;
`;

export const MenuName = styled.p`
  margin: 0;
  font-weight: 600;
`;
export const MenuPrice = styled.p`
  margin: 0;
  border-radius: 30px;
  color: white;
  background-color: #6327fe;
  width: 5vw;
  padding: 1px;
  text-align: center;
`;
