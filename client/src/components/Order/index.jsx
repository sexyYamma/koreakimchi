import React from "react";

import * as S from "./style";

const Order = ({ OrderImg, OrderName }) => {
  return (
    <S.Layout>
      <S.OrderImg src={OrderImg} />
      <S.OrderName>{OrderName}</S.OrderName>
    </S.Layout>
  );
};

export default Order;
