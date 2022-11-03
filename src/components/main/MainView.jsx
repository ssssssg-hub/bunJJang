import React from "react";
import bunjangQR from "../img/bunjangQR.png";
import bunjangImg from "../img/bunjangImg.jpeg";
import "./mainView.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __mainGet } from "../../redux/modules/postSlice";
import { useNavigate } from "react-router";
const MainView = () => {
  const mainpost = useSelector((state) => state.postReducer.list.data);
  console.log(mainpost);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__mainGet());
  }, [dispatch]);

  return (
    <div>
      <div className="qrContainer">
        <img src={bunjangImg} className="bunjangImg"></img>
        <img src={bunjangQR} className="bunjangQR"></img>
      </div>
      <div className="prdListContainer">
        <div className="todayRec">
          <div className="title">오늘의 상품 추천</div>
        </div>
        <div className="prdContent">
          {mainpost &&
            mainpost.map((main) => (
              <div
                className="item"
                key={main.id}
                onClick={() => {
                  navigate(`/posts/get/${main.id}`);
                }}
              >
                <div className="thumb">
                  <img src={main.mediaUrl} />
                </div>
                <div className="prdInfo">
                  <p className="prdTitle">{main.title}</p>
                  <p className="price">
                    {main.price}
                    <span>원</span>
                    <span className="time"></span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainView;
