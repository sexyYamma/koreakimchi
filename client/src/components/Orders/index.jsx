import React, { useEffect, useState } from "react";
import * as S from "./style";
import Order from "../Order/index";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    localStorage.removeItem("orders");
  }, []);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, [orders]);

  useEffect(() => {
    let total = 0;
    orders.forEach((item) => {
      total += item.MenuPrice;
    });
    setOrderTotal(total);
  }, [orders]);

  return (
    <S.Layout>
      <S.Ordered>선택한 간식</S.Ordered>
      <S.Order>
        {orders.map((item, index) => (
          <Order
            key={index}
            OrderImg={item.MenuImg}
            OrderName={item.MenuName}
            OrderCount={item.MenuCount}
          />
        ))}
      </S.Order>
      <S.OrderTotal>총금액: {orderTotal}원</S.OrderTotal>
      <S.OrderButton>결제</S.OrderButton>
    </S.Layout>
  );
};

export default Orders;
