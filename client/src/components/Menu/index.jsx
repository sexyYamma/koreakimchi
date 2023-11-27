import React, { useState } from "react";
import * as S from "./style";
const Menu = ({ MenuImg, MenuName, MenuPrice, MenuCount }) => {
  const [border, setBorder] = useState(false);

  const handleClicked = () => {
    handleOrderSubmit();
    setBorder(!border);
  };

  function handleOrderSubmit() {
    let orderData = JSON.parse(localStorage.getItem("orders") || "[]");
    if (!border) {
      orderData.push({ MenuImg, MenuName, MenuPrice, MenuCount });
    } else {
      orderData = orderData.filter((item) => item.MenuName !== MenuName);
    }
    localStorage.setItem("orders", JSON.stringify(orderData));
  }

  return (
    <S.Layout border={border} onClick={handleClicked}>
      <S.Menu>
        <S.MenuImg src={MenuImg} />
        <S.MenuName>{MenuName}</S.MenuName>
        <S.MenuPrice>{MenuPrice}원</S.MenuPrice>
        {!MenuCount && <S.SoldOut>품절</S.SoldOut>}
      </S.Menu>
    </S.Layout>
  );
};

export default Menu;
