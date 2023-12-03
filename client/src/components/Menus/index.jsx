import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./style";

import Menu from "../Menu";

import 꼬깔콘 from "../../assets/Img/Menu/꼬깔콘.png";
import 도리토스 from "../../assets/Img/Menu/도리토스.png";
import 밀키스 from "../../assets/Img/Menu/밀키스.png";
import 새우깡 from "../../assets/Img/Menu/새우깡.png";
import 신짱 from "../../assets/Img/Menu/신짱.png";
import 양파링 from "../../assets/Img/Menu/양파링.png";
import 칠성사이다 from "../../assets/Img/Menu/칠성사이다.png";
import 코카콜라 from "../../assets/Img/Menu/코카콜라.png";
import 파워에이드 from "../../assets/Img/Menu/파워에이드.png";
import 포카리스웨트 from "../../assets/Img/Menu/포카리스웨트.png";

const Menus = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.129.57.197:5000/snacks");
        const data = response.data;

        const menuData = data.map((item, index) => ({
          MenuCount: item.MenuCount,
          MenuId: item.MenuId,
          MenuName: item.MenuName,
          MenuPrice: item.MenuPrice,
          MenuImg: getMenuImg(index),
        }));

        setMenuData(menuData);
      } catch (error) {
        console.error("데이터를 가져오는 도중 오류가 발생했습니다:", error);
        setMenuData([]);
      }
    };

    fetchData();
  }, []);

  const getMenuImg = (index) => {
    switch (index) {
      case 0:
        return 새우깡;
      case 1:
        return 꼬깔콘;
      case 2:
        return 도리토스;
      case 3:
        return 양파링;
      case 4:
        return 신짱;
      case 5:
        return 포카리스웨트;
      case 6:
        return 파워에이드;
      case 7:
        return 코카콜라;
      case 8:
        return 칠성사이다;
      case 9:
        return 밀키스;
      default:
        return null;
    }
  };

  return (
    <S.Layout>
      {menuData.map((item, index) => (
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
