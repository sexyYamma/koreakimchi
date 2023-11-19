import React from "react";
import * as S from "./style";

const Main = () => {
  return (
    <S.Layout>
      <S.StudentContainer>
        <S.StudentName>1314 최성훈, 1315 추성우</S.StudentName>
        <S.Logo src="../../../Img/Logo.svg" alt="" />
      </S.StudentContainer>
    </S.Layout>
  );
};

export default Main;
