import React from "react";

import "./loginForm.css";
import useInput from "../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import instance from "../../shared/request";
import { useCookies } from "react-cookie";
import { addMemberThunk } from "../../redux/modules/loginSlice";

const LoginForm = () => {
  const [email, setEmail, onChangeLoginEmailHandler] = useInput("");
  const [pw, setPw, onChangeLoginPwHandler] = useInput("");
  const [signEmail, setSignEmail, onChangeSignEmailHandler] = useInput("");
  const [signPw, setSignPw, onChangeSignPwHandler] = useInput("");
  const [signPwC, setSignPwC, onChangeSignPwCHandler] = useInput("");
  // hook 사용해 input 관리
  const [isModal, setIsModal] = useState(false);
  // 모달창 관리
  const [cookie, setCookie, removeCookie] = useCookies();
  //쿠키 저장
  const dispatch = useDispatch();
  // 리덕스 보내기
  const navigate = useNavigate();

  // 1번 버튼에 핸들러 붙여서 비우기
  const signInit = {
    signEmail: "",
    signPw: "",
    signPwC: "",
  };
  const [signEmpty, setSignEmpty] = useState(signInit);
  const signEmptyHandler = (e) => {
    setSignEmpty(signInit);
  };


  const showModal = () => {
    setIsModal(!isModal);
  };


  // 3번 모달 나갈 때 form에 제출하지 않고 비우기 함수만 호출
  const exitModal = (e) => {
    e.stopPropagation();
    signEmptyHandler();
    setIsModal(isModal);
  };

  //모달창 보이기 끄기

  const onSubmitLoginHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      alert("이메일을 입력해 주세요!");
      return;
    }
    if (pw.trim() === "") {
      alert("비밀번호를 입력해 주세요!");
      return;
    }
    // 이메일 비번입력안하면 알럿창
    const LoginValue = {
      email: email,
      pw: pw,
    };
    // 서버로 보내줄 로그인값
    const data = instance.post("bunjang/login", LoginValue).then((res) => {
      // console.log(res)
      // console.log(res.data.data)
      // console.log(res.data.data.email)
      // console.log(res.data.statusMsg)
      // console.log(res.data.statusCode)
      setCookie("refreshToken", res.request.getResponseHeader("refresh-token"));
      setCookie("token", res.request.getResponseHeader("authorization"));
      if (res.data.statusCode == 0) {
        localStorage.setItem("email", res.data.data.email);
        navigate("/");
        window.location.reload();
        // 리로드 어떻게하는지 모르겠음.
      } else {
        alert(res.data.statusMsg);
      }
    });
  };
  // 서버로 데이터를 보내서 응답을 받으면 토큰을 꺼내 쿠키에 저장
  // res 확인후 조건문달아서

  const onSubmitSignUpHandler = (event) => {
    event.preventDefault();
    // 서버단 처리 if(signPw != signPwC) alert("비밀번호와 확인란의 입력 값이 동일하지 않습니다!")
    dispatch(
      addMemberThunk({
        email: signEmail,
        pw: signPw,
        pwConfirm: signPwC,
      })
    );
    setSignEmpty(signInit);
    // 2번 제출할 때 비우기
    setIsModal(false);
  };

  // 서버로 성크 사용해서 이메일 비번 비번확인 보내주기

  return (
    <div>
      {isModal ? (
        <div className="modal-background">
          <div className="wrapModal">
            <div className="wrap-top">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://m.bunjang.co.kr/pc-static/resource/56db3dd43075482b1d31.png"
                    style={{ width: 30 }}
                  />
                </Link>
                <div>홈페이지로 이동</div>
                {/* 버튼 링크 누르면 홈페이지로 이동 */}
                <h3>번개장터로 중고거래 시작하기</h3>
                <b>간편하게 가입하고 상품을 확인하세요</b>
              </div>
              <form className="form-boxModal" onSubmit={onSubmitSignUpHandler}>
                <div className="input-box">
                  <span>Email </span>
                  <input
                    className="input-form"
                    type="text"
                    name="email"
                    value={signEmail}
                    placeholder=" E-mail"
                    onChange={onChangeSignEmailHandler}
                  />
                </div>
                <div className="input-box">
                  <span> P W </span>
                  <input
                    className="input-form"
                    type="password"
                    name="Password"
                    value={signPw}
                    placeholder=" Password"
                    onChange={onChangeSignPwHandler}
                  />
                </div>
                <div className="input-box">
                  <span> PW 확인 </span>
                  <input
                    className="input-form"
                    type="password"
                    name="Password"
                    value={signPwC}
                    placeholder=" Password 확인"
                    onChange={onChangeSignPwCHandler}
                  />
                </div>
                <div className="button-container">
                  <div className="how-loginDiv">
                    <span className="how-login">이미 가입하셨나요? </span>
                    <button
                      className="button-text"
                      type="button"
                      onClick={exitModal}
                    >
                      로그인
                    </button>
                  </div>
                  <button
                    className="button-go"
                    type="submit"
                    onClick={signEmptyHandler}
                  >
                    회원가입
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="wrap-bottom">
              <div className="reference">
                도움이 필요하면 kkjh9960@gmail.com로 문의 부탁드립니다.
              </div>
              <div className="reference">
                메일 확인 시간 : 9시~18시(점심시간 12~13시, 주말공휴일 제외)
              </div>
            </div>
          </div>
        </div>
      ) : (
        // 위쪽 모달창 클릭했을때 회원가입 구현
        // 아래쪽 로그인창 구현
        <div className="wrap-login">
          <div className="wrap-top">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://m.bunjang.co.kr/pc-static/resource/56db3dd43075482b1d31.png"
                  style={{ width: 30 }}
                />
              </Link>
              <div>홈페이지로 이동</div>
              {/* 버튼 링크 누르면 홈페이지로 이동 */}
              <h3>번개장터로 중고거래 시작하기</h3>
              <b>간편하게 가입하고 상품을 확인하세요</b>
            </div>
            <form className="form-box">
              <div className="input-box">
                <span>Email </span>
                <input
                  className="input-form"
                  type="text"
                  name="email"
                  value={email}
                  placeholder=" E-mail"
                  onChange={onChangeLoginEmailHandler}
                />
              </div>
              <div className="input-box">
                <span> P W </span>
                <input
                  className="input-form"
                  type="password"
                  name="Password"
                  value={pw}
                  placeholder=" Password"
                  onChange={onChangeLoginPwHandler}
                />
              </div>
              <div className="button-container">
                <button className="button-go" onClick={showModal}>
                  회원가입
                </button>
                <button className="kakao"></button>
                <button className="button-go" onClick={onSubmitLoginHandler}>
                  로그인
                </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="wrap-bottom">
            <div className="reference">
              도움이 필요하면 kkjh9960@gmail.com로 문의 부탁드립니다.
            </div>
            <div className="reference">
              메일 확인 시간 : 9시~18시(점심시간 12~13시, 주말공휴일 제외)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
