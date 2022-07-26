import { AiOutlineShoppingCart } from "react-icons/ai";



export default function ProductText({ product, productName, productLegend }) {
  return (
    <div className="row">
      <div className="bg-img"></div>
      <div className="product-text">
        <h5>{product}</h5>
        <h1>{productName}</h1>
        <p>{productLegend}.</p>

        <div className="prices">
          <h3>
            $149.99 <del>169.99</del>
          </h3>
        </div>
        <button>
          <AiOutlineShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
