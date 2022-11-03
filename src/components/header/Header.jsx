import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import appImg from "../img/appimg.svg";
import startImg from "../img/starimg.svg";
import headerIcon1 from "../img/headerIcon1.png";
import headerIcon2 from "../img/headerIcon2.png";
import headerIcon3 from "../img/headerIcon3.png";
import logo from "../img/Logo.svg";
import searchBtn from "../img/searchBtn.png";
import sellerCenter from "../img/go.png";
import menu from "../img/menu.svg";
import instance from "../../shared/request";

const Header = () => {
  const email = localStorage.getItem("email");
  // 로그인 여부는 로그인했을 때 이메일을 로컬에 저장해서 불러옴
  const navigate = useNavigate();

  const onClickLogoutHandler = (event) => {
    event.preventDefault();
    const data = instance
      .post("bunjang/logout", { withCredentials: true })
      .then((res) => {
        console.log(res);
        var deleteCookie = function (name) {
          document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
        };
        deleteCookie("token");
        deleteCookie("refreshToken");
        localStorage.removeItem("email");
        window.location.reload();
        // 리로드 어떻게하는지 모르겠음
      });
  };
  return (
    <>
      <div className="headerWrap">
        <div className="miniMenuBar">
          <div className="miniMenu">
            <div className="leftMenu">
              <p>
                <img src={appImg} alt="app" />
                앱다운로드
              </p>
              <p>
                <img src={startImg} alt="star" />
                즐겨찾기
              </p>
            </div>
            <div className="rightMenu">
              <div className="login">
                {email ? (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={onClickLogoutHandler}
                    >
                      <p>로그아웃</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      <p>로그인/회원가입</p>
                    </button>
                  </>
                )}
                {email ? (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        navigate("/mypage");
                      }}
                    >
                      <p>내상점</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        alert("로그인을 해야 이용할 수 있습니다!");
                        navigate("/login");
                      }}
                    >
                      <p>내상점</p>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <header id="header">
          <div className="headerContainer">
            <div className="headerContent">
              <div>
                <button
                  className="mypagebutton"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <p>
                    <img src={logo} alt="app" />
                  </p>
                </button>
              </div>
              <div className="searchBar">
                <div className="searchBarCon">
                  <input
                    type="search"
                    placeholder="상품명,지역명,@상점명 입력"
                  />
                  <button className="searchBtn">
                    <img src={searchBtn} alt="" />
                  </button>
                </div>
              </div>
              <div className="myMenu">
                {email ? (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        navigate("/posts");
                        window.location.reload();
                      }}
                    >
                      <p>
                        <img src={headerIcon1} alt="" />
                        판매하기
                      </p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        alert("로그인을 해야 이용할 수 있습니다!");
                        navigate("/login");
                      }}
                    >
                      <p>
                        <img src={headerIcon1} alt="" />
                        판매하기
                      </p>
                    </button>
                  </>
                )}
                {email ? (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        navigate("/mypage");
                      }}
                    >
                      <p>
                        <img src={headerIcon2} alt="" />
                        내상점
                      </p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mypagebutton"
                      onClick={() => {
                        alert("로그인을 해야 이용할 수 있습니다!");
                        navigate("/login");
                      }}
                    >
                      <p>
                        <img src={headerIcon2} alt="" />
                        내상점
                      </p>
                    </button>
                  </>
                )}
                <p className="last">
                  <img src={headerIcon3} alt="" />
                  번개톡
                </p>
              </div>
            </div>
            <div className="catagory">
              <button className="menu">
                <img src={menu} alt="" />
              </button>
              <p className="myStore">
                번개장터 판매자센터 <img src={sellerCenter} alt="" />
              </p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
