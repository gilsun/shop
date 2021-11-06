

const Detail=()=>{
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0364/1976/4363/products/43c99f1bba1f2705198d5bf04f67ba65.jpg?v=1602796092"
                width="100%" alt='persimon'
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>$35.00</p>
              <button className="btn btn-danger">order</button>
            </div>
          </div>
        </div>
  )
}

export default Detail;