import { useEffect, useState } from "react";
import { ProductB, Producta } from "../store/interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Cart() {
  const cartData = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState<Producta[]>([]);

  useEffect(() => {
    setData(cartData);
  }, [cartData]);
  // console.log(data);

  const handleQuantityChange = (index: number, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { index, quantity },
    });
  };

  const getTotalItems = () =>
    data.reduce((total: number, item: any) => total + (item.quantity || 0), 0);

  const getTotalPrice = () =>
    data.reduce(
      (total: number, item: any) => total + item.price * (item.quantity || 0),
      0
    );

  return (
    <div>
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          {data.length === 0 ? (
            <p>Empty product in your cart</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: "4%" }}>STT</th>
                  <th>Name</th>
                  <th style={{ width: "15%" }}>Price</th>
                  <th style={{ width: "4%" }}>Quantity</th>
                  <th style={{ width: "25%" }}>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {data.map((item: Producta, index: number) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          name={`cart-item-quantity-${index}`}
                          type="number"
                          defaultValue={15}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              parseInt(e.target.value, 10)
                            )
                          }
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot id="my-cart-footer">
                <tr>
                  <td colSpan={4}>
                    There are <b>{getTotalItems()}</b> items in your shopping
                    cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {getTotalPrice()} USD
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
      <div className="alert alert-success" role="alert" id="mnotification">
        Add to cart successfully
      </div>
    </div>
  );
}
