import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Main from "./Pages/Main";

const App = () => {
  useEffect(() => {
    fetch("/users")
      .then(
        // response 객체의 json() 이용하여 json 데이터를 객체로 변화
        (res) => res.json()
      )
      .then(
        // 데이터를 콘솔에 출력
        (data) => console.log(data)
      );
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
