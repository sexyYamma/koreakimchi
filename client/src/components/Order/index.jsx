import React from "react";

import * as S from "./style";

import 꼬깔콘 from "../../assets/Img/Menu/꼬깔콘.png";

const Order = () => {
  return (
    <S.Layout>
      <S.OrderImg src={꼬깔콘} />
      <S.OrderName>꼬깔콘</S.OrderName>
      <S.OrderCount>1</S.OrderCount>
    </S.Layout>
  );
};

export default Order;
