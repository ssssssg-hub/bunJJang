import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __viewGet } from "../../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router";
import "./viewPostView.css";

const ViewPostView = () => {
  const navigate = useNavigate();
  const view = useSelector((state) =>
    state.postReducer.list
      ? state.postReducer.list.data
      : state.postReducer.list
  );
  const viewId = [view];
  console.log(viewId);

  console.log(view);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const viewId = view?.find((view) => view.id === id);
  // console.log(viewId);
  useEffect(() => {
    dispatch(__viewGet(id.toString()));
  }, [dispatch]);

  const changeClickHandler = () => {};
  const deleteClickHandler = () => {
    dispatch(__deletePost(id));
    alert("삭제되었습니다.");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {viewId !== undefined
        ? viewId.map((viewId) => (
            <div className="DetailMainContainer" key={id}>
              <div className="SellInfo">
                <div className="ImgBox">
                  <img src={viewId.mediaUrl} width="400px" height="400px"></img>
                </div>
                <div className="InfoBox">
                  <div className="ProductContentsBox">
                    <div className="ViewTitle">
                      <h2>{viewId.title}</h2>
                    </div>
                    <div className="PriceBox">
                      <p>
                        <span>{viewId.price}</span>원
                      </p>
                    </div>
                    <div className="IconsBox"></div>
                    <div className="PrdP">
                      <span>상품상태</span>
                      <p>{viewId.state}</p>
                    </div>
                    <div className="PrdP">
                      <span>교환여부</span>
                      <p>{viewId.trade}</p>
                    </div>
                    <div className="PrdP">
                      <span>거래지역</span>
                      <p>{viewId.local}</p>
                    </div>
                  </div>
                  <div className="ButtonBox">
                    <button
                      className="ChangeButton"
                      onClick={changeClickHandler}
                    >
                      수정하기
                    </button>
                    <button
                      className="DeleteButton"
                      onClick={deleteClickHandler}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              </div>
              <div className="WrapInfo">
                <div className="SelectInfoBar">
                  <button className="ProductInfoButton"></button>
                </div>
                <div className="WrapSelectInfo">
                  <div className="ProductInfo">
                    <p>상품정보</p>

                    <br></br>
                    <br></br>
                    <div>{viewId.content}</div>
                  </div>
                  <div className="PrdInfo">
                    <div className="PrdLocal">
                      <div>
                        <img src=""></img>
                        <p>거래지역</p>
                      </div>
                      <div>{viewId.local}</div>
                    </div>
                    <div className="PrdCategory">
                      <div>
                        <img src=""></img>
                        <p>카테고리</p>
                      </div>
                      <div>{viewId.category}</div>
                    </div>
                    <div className="PrdTag">
                      <div>
                        <img src=""></img>
                        <p>상품태그</p>
                      </div>
                      <div>{viewId.tag}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ViewPostView;
