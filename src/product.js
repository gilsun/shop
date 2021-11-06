const product = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={props.item.url}
        alt="angus meat"
        width="100%"
      />
      <h4 className='title'>{props.item.title}</h4>
      <p className='description'>
        {props.item.content}   <br/>${props.item.price}
      </p>
    </div>
  );
};

export default product; 
