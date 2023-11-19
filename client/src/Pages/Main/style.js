import styled from "styled-components";

export const Layout = styled.div`
  background-color: #eae8fe;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const StudentContainer = styled.div`
  display: flex;
`;

export const StudentName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const Logo = styled.img`
  width: 25vw;
  height: max-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;
