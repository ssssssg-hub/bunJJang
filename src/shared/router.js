import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";

import SellPost from "../pages/SellPost";
import MyPage from "../pages/Mypage";
import ViewPost from "../pages/ViewPost";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />

        <Route path="/posts" element={<SellPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/posts/get/:id" element={<ViewPost />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
