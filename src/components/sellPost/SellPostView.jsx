import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __imgPost, __writePost } from "../../redux/modules/postSlice";
import "./sellPostView.css";

const SellPostView = () => {
  const [img_id, setImg_id] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [local, setLocal] = useState("");
  const [state, setState] = useState("중고상품");
  const [trade, setTrade] = useState("교환불가");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [amount, setAmount] = useState("1");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgGet = useSelector((state) => state.postReducer.list[1]);
  console.log(imgGet);

  const mediaChangeHandler = (e) => {
    const file = new FormData();
    file.append("file", e.target.files[0]);
    dispatch(__imgPost(file));
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const localChangeHandler = (e) => {
    setLocal(e.target.value);
    console.log(local);
  };
  const stateChangeHandler = (e) => {
    setState(e.target.value);
    console.log(state);
  };
  const tradeChangeHandler = (e) => {
    setTrade(e.target.value);
    console.log(trade);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  const tagChangeHandler = (e) => {
    setTag(e.target.value);
    console.log(tag);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const sellSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __writePost({
        img_id: imgGet.id,
        title,
        category,
        local,
        state,
        trade,
        price,
        content,
        tag,
        amount,
      })
    );
    alert("판매글이 작성되었습니다.");
    navigate("/");
  };
  return (
    <div>
      <div className="newContainer">
        <div className="myPrdBox">
          <div className="myPrdMenu">
            <p className="selected">상품등록</p>
            <p>상품관리</p>
            <p>구매/판매 내역</p>
          </div>
        </div>

        <div className="newPrdContent">
          <div className="title">
            기본정보 <span>*필수항목</span>
          </div>
        </div>
        <form onSubmit={sellSubmitHandler}>
          <div className="contentBox">
            <section>
              <p className="sectionTitle">
                상품이미지<span>*</span>
              </p>
              <div className="fileBox">
                <div className="fileImgBox">
                  <label htmlFor="img"></label>
                  {imgGet !== undefined
                    ? imgGet.mediaUrl && (
                        <img
                          className="prevImage"
                          src={imgGet.mediaUrl}
                          alt="preview-img"
                        />
                      )
                    : null}
                  <input id="img" type="file" onChange={mediaChangeHandler} />
                </div>
                <p>
                  <strong>
                    * 상품 이미지는 640x640에 최적화 되어 있습니다.
                  </strong>
                  <br />
                  - 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로
                  보여집니다.
                  <br />
                  - 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.
                  <br />
                  - 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.
                  <br />
                  - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                  <br />
                  - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
                  <br />
                  최대 지원 사이즈인 640 X 640으로 리사이즈 해서
                  올려주세요.(개당 이미지 최대 10M)
                </p>
              </div>
            </section>
            <section className="titleSec">
              <p>
                제목<span>*</span>
              </p>
              <div>
                <input
                  type="text"
                  maxLength="40"
                  onChange={titleChangeHandler}
                />
                1/40
              </div>
            </section>
            <section className="categorySec">
              <p>
                카테고리<span>*</span>
              </p>
              <div>
                <div className="categoryRadio">
                  <label htmlFor="여성의류">여성의류</label>
                  <input
                    type="radio"
                    id="여성의류"
                    name="카테고리"
                    value={"1"}
                    onClick={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="남성의류">남성의류</label>
                  <input
                    type="radio"
                    id="남성의류"
                    name="카테고리"
                    value={"2"}
                    onClick={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="신발">신발</label>
                  <input
                    type="radio"
                    id="신발"
                    name="카테고리"
                    value={"3"}
                    onClick={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="가방">가방</label>
                  <input
                    type="radio"
                    id="가방"
                    name="카테고리"
                    value={"4"}
                    onChange={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="시계/쥬얼리">시계/쥬얼리</label>
                  <input
                    type="radio"
                    id="시계/쥬얼리"
                    name="카테고리"
                    value={"5"}
                    onChange={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="패션 엑세서리">패션 엑세서리</label>
                  <input
                    type="radio"
                    id="패션 엑세서리"
                    name="카테고리"
                    value={"6"}
                    onChange={categoryChangeHandler}
                  />
                </div>
                <div className="categoryRadio">
                  <label htmlFor="디지털가전">디지털가전</label>
                  <input
                    type="radio"
                    id="디지털가전"
                    name="카테고리"
                    value={"7"}
                    onChange={categoryChangeHandler}
                  />
                </div>
              </div>
            </section>
            <section className="adrressBox">
              <p>
                거래지역<span>*</span>
              </p>
              <div>
                <div className="locationRadio">
                  <label htmlFor="내위치">내위치</label>
                  <input type="radio" />

                  <label htmlFor="최근지역">최근지역</label>
                  <input type="radio" />

                  <label htmlFor="주소">주소</label>
                  <input
                    type="radio"
                    id="주소"
                    name="거래지역"
                    value={"주소"}
                  />

                  <label htmlFor="지역설정안함">지역설정안함</label>
                  <input
                    type="radio"
                    id="지역설정안함"
                    name="거래지역"
                    defaultChecked
                    value={"지역설정안함"}
                  />
                </div>
                {/* <div className="selectedInfo">주소@@@@@@@@@@@@@@@@@</div> */}
                <input
                  type="text"
                  className="selectedInfo"
                  placeholder="주소를 입력하세요"
                  onChange={localChangeHandler}
                />
              </div>
            </section>
            <section className="radioBox">
              <p>
                상태<span>*</span>
              </p>
              <div>
                <input
                  defaultChecked
                  type="radio"
                  id="중고상품"
                  name="상태"
                  value={"중고상품"}
                  onChange={stateChangeHandler}
                />
                <label htmlFor="중고상품">중고상품</label>

                <input
                  type="radio"
                  id="새상품"
                  name="상태"
                  value={"새상품"}
                  onChange={stateChangeHandler}
                />
                <label htmlFor="새상품">새상품</label>
              </div>
            </section>
            <section className="radioBox">
              <p>
                교환<span>*</span>
              </p>
              <div>
                <input
                  defaultChecked
                  type="radio"
                  id="교환불가"
                  name="교환"
                  value={"교환불가"}
                  onChange={tradeChangeHandler}
                />
                <label htmlFor="교환불가">교환불가</label>

                <input
                  type="radio"
                  id="a"
                  name="교환"
                  value={"교환가능"}
                  onChange={tradeChangeHandler}
                />
                <label htmlFor="a">교환가능</label>
              </div>
            </section>
            <section className="priceSec">
              <p>
                가격<span>*</span>
              </p>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="숫자만 입력해주세요."
                    onChange={priceChangeHandler}
                  />
                </div>
                <span>원</span>
              </div>
            </section>
            <section className="contentSec">
              <p>
                설명<span>*</span>
              </p>
              <div>
                <textarea
                  type="text"
                  rows="6"
                  placeholder="여러 장의 상품 사진 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요."
                  onChange={contentChangeHandler}
                />
              </div>
            </section>
            <section className="tagSec">
              <p>태그</p>
              <div>
                <input
                  type="text"
                  placeholder="연관태그를 입력해주세요."
                  onChange={tagChangeHandler}
                />
              </div>
              <p className="tagInfo">
                <br />
                - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.
                <br />
                - 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을
                보장하지는 않습니다.
                <br />
                - 검색 광고는 태그정보를 기준으로 노출됩니다.
                <br />- 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성
                키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수
                있습니다.
              </p>
            </section>
            <section className="countSec">
              <p>수량</p>
              <div>
                <div>
                  <input
                    type="text"
                    defaultValue={1}
                    onChange={amountChangeHandler}
                  />
                </div>
                <span>개</span>
              </div>
            </section>
          </div>
          <div className="newPrdFooter">
            <div>
              <button>등록하기</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPostView;
