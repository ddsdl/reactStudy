import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span onClick={() => { 따봉변경(따봉 + 1); }} >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>{" "}
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자 코트 추천";
            b(copy);
          }}
        >
          제목 변경
        </button>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            b(copy);
          }}
        >
          정렬버튼
        </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(modal == false ? true : false); // setModal(!modal)
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal b={b} 글제목={글제목} title={title} /> : null
      }

      {글제목.map((a, i) => {
        // i = 반복문 돌 때 마다 0부터 1 씩 증가하는 정수
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
            </h4>
            <span
              onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}
            >
              👍
              {따봉[i]}
            </span>
            <p>2월 17일 발행</p>
            <p>
              <button
                onClick={() => {
                  // 글제목.pop();
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  b(copy);
                }}
              >
                삭제
              </button>
            </p>
          </div>
        );
      })}
      <>
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // 글제목.push(입력값);
            let copy = [...글제목];
            copy.unshift(입력값);
            b(copy);
          }}
        >
          글발행
        </button>
      </>
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          // props.글제목[0] = "여자 코트 추천";
          let copy = [...props.글제목];
          copy[0] = "여자 코트 추천";
          props.b(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

/* const Modal = () => {
  return(

  )
}
*/
export default App;
