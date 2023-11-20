import React from "react";

import * as S from "./style";

import Menu from "../Menu";
import MenuData from "../../Data/Menu";

const Menus = () => {
  return (
    <>
      {MenuData.map((item, index) => {
        return (
          <Menu
            MenuImg={item.MenuImg}
            MenuName={item.MenuName}
            MenuPrice={item.MenuPrice}
            MenuCount={item.MenuCount}
          />
        );
      })}
    </>
  );
};

export default Menus;
