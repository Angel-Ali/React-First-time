import Item from "./item";
import "./catalog.css";

const Catalog = () => {
  return (
    <div className="catalog-page">
      <h3>Check out our amazing snacks!!</h3>

      <div className="item-container">
        <Item title="blah"></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
};

export default Catalog;
