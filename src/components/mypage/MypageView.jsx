import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __mypageGet } from "../../redux/modules/postSlice";
import "./mypageView.css";

const MyPageView = () => {
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const mypage = useSelector((state) =>
    state.postReducer.list
      ? state.postReducer.list.mypagePosts
      : state.postReducer.list
  );
  console.log(mypage);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
  };
  useEffect(() => {
    dispatch(__mypageGet());
  }, []);

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "black";
        current.style.borderBottom = "2px solid";
        current.style.borderBlockColor = "gray";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#bebcbc";
        prev.style.borderBottom = "none";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div className="wrap-mypage">
      <div className="my-info">
        <div className="info-top">
          <div className="square-info">
            <div className="square-email">{email}</div>
            <div className="info-email">{email} 님의 개인 페이지 입니다.</div>
          </div>
        </div>
        <div className="info-bottom">
          <div className="button-info">
            <button className="InFoButton" id="case1" onClick={GetClick}>
              상품
            </button>
            <button className="InFoButton" id="case2" onClick={GetClick}>
              상점후기
            </button>
            <button className="InFoButton" id="case3" onClick={GetClick}>
              찜
            </button>
            <button className="InFoButton" id="case4" onClick={GetClick}>
              팔로잉
            </button>
            <button className="InFoButton" id="case5" onClick={GetClick}>
              팔로워
            </button>
          </div>
          <div className="my-sell-list">
            {mypage &&
              mypage.map((mypage1) => (
                <div className="item" key={mypage1.id}>
                  <div className="thumb">
                    <img src={mypage1.media.mediaUrl} alt="" />
                  </div>
                  <div className="prdInfo">
                    <p className="prdTitle">{mypage1.title}</p>
                    <p className="price">
                      {mypage1.price}
                      <span>원</span>
                      <span className="location">{mypage1.local}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageView;
