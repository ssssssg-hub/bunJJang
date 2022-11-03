import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="buttomMenu">
          <ul>
            <li>
              <p>회사소개</p>
            </li>
            <li>
              <p>이용약관</p>
            </li>
            <li>
              <p>운영정책</p>
            </li>
            <li>
              <p>
                <b>개인정보처리방침</b>
              </p>
            </li>
            <li>
              <p>광고운영정책</p>
            </li>
            <li>
              <p>청소년보호정책</p>
            </li>
            <li>
              <p>위치기반서비스 이용약관</p>
            </li>
          </ul>
        </div>
        <div className="info">
          <div className="leftBox">
            <div className="businessInfo">
              <h5>번개장터(주) 사업자정보</h5>
              <p>
                대표이사 : 이재후 | 개인정보보호책임자 : 문제근
                <br />
                사업자등록번호 : 113-86-45836 | 통신판매업신고 :
                2019-서울서초-1126
                <br />
                호스팅서비스 제공자 : Amazon Web Services (AWS)
                <br />
                EMAIL : help@bunjang.co.kr | FAX : 02-598-8241
                <br />
                주소 : 서울특별시 서초구 서초대로38길 12, 타워1 1층, 타워2 7층
                지하1층
                <br />
                (서초동, 마제스타시티)
                <br />
                <u>사업자정보 확인</u>
              </p>
            </div>
            <div className="branch">
              <div>
                <p>
                  <span>번개장터(주)더현대서울점</span> | 이재후 | 365-85-01581
                  <br />
                  서울특별시 영등포구 여의대로 108, 지하2층(여의도동, 파크원)
                </p>
                <p>
                  <span>번개장터(주)코엑스점</span> | 이재후 | 142-85-27412
                  <br />
                  서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동,
                  코엑스)
                </p>
                <p>
                  <span>번개장터(주)센터필드점</span> | 이재후 | 808-85-01905
                  <br />
                  서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층
                  W124호(역삼동)(역삼동, 센터필드)
                </p>
              </div>
            </div>
          </div>
          <div className="customBox">
            <h5>고객센터</h5>
            <strong className="PhoneNumber">1670-2910</strong>
            <p className="Paragraph">
              운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 13시 - 14시)
              <br />
              <span>
                <u>공지사항</u>
              </span>
              <span>
                <u>1:1 문의하기</u>
              </span>
              <span>
                <u>자주 묻는 질문</u>
              </span>
            </p>
            <div className="Paragraph">
              <p>우리은행 채무지급보증 안내</p>
              번개장터㈜는 “BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab
              2”, “BGZT 컬렉션” 상점이 판매한 상품에 한해, 고객님이 현금 결제한
              금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
              보장하고 있습니다. 서비스 가입사실 확인 <br />
              ⒸBungaejangter. Inc All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
