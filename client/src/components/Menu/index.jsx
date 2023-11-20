import React, { useState } from "react";
import * as S from "./style";

const Menu = ({ MenuImg, MenuName, MenuPrice, MenuCount }) => {
  const [border, setBorder] = useState(false);

  const handleClicked = () => {
    if (!MenuCount) {
      setBorder(!border);
    }
  };

  return (
    <>
      <S.Layout border={border} onClick={handleClicked}>
        <S.Menu>
          <S.MenuImg src={MenuImg} />
          <S.MenuName>{MenuName}</S.MenuName>
          <S.MenuPrice>{MenuPrice}</S.MenuPrice>
          {!MenuCount ? <S.SoldOut>품절</S.SoldOut> : null}
        </S.Menu>
      </S.Layout>
    </>
  );
};

export default Menu;
