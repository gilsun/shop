/* eslint-disable*/
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let history = useHistory();

  let item = props.food.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
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
