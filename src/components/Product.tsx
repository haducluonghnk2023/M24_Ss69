import { useDispatch, useSelector } from "react-redux";
import { ProductB, Producta } from "../store/interface/interface";
import { useEffect } from "react";
import productReducer from "../store/reducers/productReducer";
import { RootState } from "../store/store";

export default function Product() {
  // const [product, setProduct] = useState<Producta[]>([]);

  const state = useSelector((state: RootState) => {
    return state.productReducer;
  });
  console.log(state);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Producta) => {
    if (product.quantity > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    } else {
      alert("Sản phẩm đã hết hàng");
    }
  };

  return (
    <div>
      <div>
        {state.map((item: Producta, index: number) => {
          return (
            <div key={item.id} className="media product">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={item.image} alt="pizza" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Hamburger</h4>
                <p>{item.titles}</p>
                <input
                  name={`quantity-product-${index}`}
                  type="number"
                  defaultValue={item.quantity}
                />
                <a onClick={() => handleAddToCart(item)} className="price">
                  {item.price} USD{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
