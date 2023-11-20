import React from "react";

import * as S from "./style";

import 꼬깔콘 from "../../assets/Img/Menu/꼬깔콘.png";

const Order = ({ OrderImg, OrderName, OrderCount }) => {
  return (
    <S.Layout>
      <S.OrderImg src={OrderImg} />
      <S.OrderName>{OrderName}</S.OrderName>
      <S.OrderCount type="number" />
    </S.Layout>
  );
};

export default Order;
