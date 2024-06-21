import Cart from "./components/Cart";
import Header from "./components/Header";
import ListProduct from "./components/ListProducts";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="container">
          <Header></Header>
          <div className="row">
            <div>
              <ListProduct></ListProduct>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
