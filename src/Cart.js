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
              <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.quan}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-danger">-</button>
                  <button className="btn btn-danger">+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

function state를props화(state) {
  return {
    state: state,
  };
}

export default connect(state를props화)(Cart);
