import axios from "axios";

let MenuData = [{}];
const fetchData = async () => {
  try {
    const data = await axios.get("http://10.129.57.197:5000/snacks");

    MenuData = [
      {
        MenuCount: data[0].MenuCount,
        MenuId: data[0].MenuId,
        MenuName: data[0].MenuName,
        MenuPrice: data[0].MenuPrice,
      },
      {
        MenuCount: data[1].MenuCount,
        MenuId: data[1].MenuId,
        MenuName: data[1].MenuName,
        MenuPrice: data[1].MenuPrice,
      },
      {
        MenuCount: data[2].MenuCount,
        MenuId: data[2].MenuId,
        MenuName: data[2].MenuName,
        MenuPrice: data[2].MenuPrice,
      },
      {
        MenuCount: data[3].MenuCount,
        MenuId: data[3].MenuId,
        MenuName: data[3].MenuName,
        MenuPrice: data[3].MenuPrice,
      },
      {
        MenuCount: data[4].MenuCount,
        MenuId: data[4].MenuId,
        MenuName: data[4].MenuName,
        MenuPrice: data[4].MenuPrice,
      },
      {
        MenuCount: data[5].MenuCount,
        MenuId: data[5].MenuId,
        MenuName: data[5].MenuName,
        MenuPrice: data[5].MenuPrice,
      },
      {
        MenuCount: data[6].MenuCount,
        MenuId: data[6].MenuId,
        MenuName: data[6].MenuName,
        MenuPrice: data[6].MenuPrice,
      },
      {
        MenuCount: data[7].MenuCount,
        MenuId: data[7].MenuId,
        MenuName: data[7].MenuName,
        MenuPrice: data[7].MenuPrice,
      },
      {
        MenuCount: data[8].MenuCount,
        MenuId: data[8].MenuId,
        MenuName: data[8].MenuName,
        MenuPrice: data[8].MenuPrice,
      },
      {
        MenuCount: data[9].MenuCount,
        MenuId: data[9].MenuId,
        MenuName: data[9].MenuName,
        MenuPrice: data[9].MenuPrice,
      },
    ];

    return MenuData;
  } catch (error) {
    console.error("데이터를 가져오는 도중 오류가 발생했습니다:", error);
    return [];
  }
  fetchData();
};

export default MenuData;
