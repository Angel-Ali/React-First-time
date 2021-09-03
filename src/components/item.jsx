import QuantityPicker from "./quantityPicker";
import "./item.css";





const Item = (props) => {
  const handleAdd = () => {
    console.log("Adding to cart");
  };

  const handleQuantityChange = (quantity) => {
    console.log("quantity change", quantity);
  };

const getControls = () => {
    return (
    <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to cart
        </button>
      </div>

    );
};

const getTotal = () => {
    let price = 10;
    return 10 * 2;
};

  return (
    <div className="item">
      <img src="https://picsum.photos/200/300"
        alt=""></img>
      <h5>{props.title}</h5>


      <label>$ {getTotal}</label>
      <label>$ price</label>

      {getControls()}
    </div>
  );
};

export default Item;
