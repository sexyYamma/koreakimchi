import React from "react";

import * as S from "./style";

import Logo from "../../assets/Img/Logo.svg";
import Menus from "../../components/Menus";
import Orders from "../../components/Orders";

const Main = () => {
  return (
    <S.Layout>
      <S.StudentContainer>
        <S.StudentName>1314 최성훈, 1315 추성우</S.StudentName>
        <S.Logo src={Logo} alt="" />
      </S.StudentContainer>
      <S.Main>
        <Menus />
        <Orders />
      </S.Main>
    </S.Layout>
  );
};

export default Main;
