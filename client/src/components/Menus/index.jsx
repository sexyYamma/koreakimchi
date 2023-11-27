import React, { useState } from "react";

import * as S from "./style";

import Menu from "../Menu";
import MenuData from "../../Data/Menu";

const Menus = () => {
  return (
    <S.Layout>
      {MenuData.map((item, index) => (
        <Menu
          key={index}
          MenuImg={item.MenuImg}
          MenuName={item.MenuName}
          MenuPrice={item.MenuPrice}
          MenuCount={item.MenuCount}
        />
      ))}
    </S.Layout>
  );
};

export default Menus;
