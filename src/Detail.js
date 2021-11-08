import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 30px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

const Detail = (props) => {
  const [창보기, 창설정] = useState(true);
  const [input,setInput]=useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      창설정(false);
    }, 2000);
    console.log('안녕')
    return () => {
      clearTimeout(timeout);
    };
   
  },[창보기]);

  let { id } = useParams();
  let history = useHistory();

  let item = props.food.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 className="red"> Detail</제목>
      </박스>

      <input onChange={(e)=>{setInput(e.target.value)}}/>

      <h3>{input}</h3>
      {창보기 === true && (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다. </p>
        </div>
      )}

      <div className="row">
        <div className="col-md-6">
          <img src={item.url} width="100%" alt={item.title} />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>${item.price}</p>
          <button className="btn btn-danger order">order</button>
          <button
            className="btn btn-danger goback"
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
