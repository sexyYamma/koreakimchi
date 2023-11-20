import React from "react";

import * as S from "./style";

import Order from "../Order";
import OrderData from "../../Data/Order";

const Orders = () => {
  return (
    <S.Layout>
      <S.Ordered>선택한 간식</S.Ordered>
      <S.Order>
        {OrderData.map((item, index) => (
          <Order
            OrderImg={item.OrderImg}
            OrderName={item.OrderName}
            OrderCount={item.OrderCount}
          />
        ))}
      </S.Order>
      <S.OrderTotal>총금액: 4,000원</S.OrderTotal>
      <S.OrderButton>결제</S.OrderButton>
    </S.Layout>
  );
};

export default Orders;
