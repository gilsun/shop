import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

let Box = styled.div`
  padding: 30px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

const Detail = (props) => {
  const [창보기, 창설정] = useState(true);
  const [input, setInput] = useState("");
  const [누른탭, 누른탭변경] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      창설정(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(timeout);
    };
  }, [창보기]);

  let { id } = useParams();
  let history = useHistory();

  let item = props.food.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <Box>
        <Title className="red"> Detail</Title>
      </Box>

      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

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
          <Info 재고={props.재고} />

          <button
            className="btn btn-danger order"
            onClick={() => {
              props.재고변경([9, 11, 12]);
            }}
          >
            order
          </button>
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition>
        <TabContent 누른탭={누른탭} />
      </CSSTransition>
    </div>
  );
};

const TabContent = (props) => {
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다.</div>;
  } else if (props.누른탭 === 2) {
    return <div>에러입니다.</div>;
  }
};

const Info = (props) => {
  return <p> 재고 : {props.재고[0]} </p>;
};

export default Detail;
