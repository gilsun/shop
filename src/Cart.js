import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import "./Cart.scss";
const Cart = (props) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>

            <th>price</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quan}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {props.aler열렸니 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={()=>{
            props.dispatch({type:"알림닫기"})
          }}>닫기</button>
        </div>
      ) : null}
    </div>
  );
};

function state를props화(state) {
  return {
    state: state.reducer,
    aler열렸니: state.reducer2,
  };
}

export default connect(state를props화)(Cart);
