import Product from "./Product";

export default function ListProducts() {
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  );
}
