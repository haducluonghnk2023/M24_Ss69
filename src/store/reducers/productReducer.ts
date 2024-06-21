import { Producta } from "../interface/interface";

const initialProduct: Producta[] = JSON.parse(
  localStorage.getItem("product") || "[]"
);
// let initialProduct: Producta[] = [
//   {
//     id: Math.ceil(Math.random() * 1000000000),
//     name: "Pizza",
//     titles:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!",
//     price: 30,
//     image:"../src/image/pizza.jpg",
//     stock:5
//   },
//   {
//     id: Math.ceil(Math.random() * 1000000000),
//     name: "Hamburger",
//     titles:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!",
//     price: 15,
//     image:"../src/image/Hamburger.jpg",
//     stock:5
//   },
//   {
//     id: Math.ceil(Math.random() * 1000000000),
//     name: "Bread",
//     titles:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!",
//     price: 20,
//     image:"../src/image/Bread.jpg",
//     stock:5
//   },
//   {
//     id: Math.ceil(Math.random() * 1000000000),
//     name: "Cake",
//     titles:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!",
//     price: 10,
//     image:"../src/image/Cake.jpg",
//     stock:5
//   },
// ];
localStorage.setItem("product", JSON.stringify(initialProduct));

const productReducer = (state = initialProduct, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productToAdd = action.payload;
      const existingProductIndex = state.findIndex(
        (product) => product.id === productToAdd.id
      );

      if (existingProductIndex !== -1) {
        const updatedState = state.map((product, index) =>
          index === existingProductIndex
            ?  { ...product, quantity: product.quantity - 1  }
            : product
        );
        localStorage.setItem("product", JSON.stringify(updatedState));
        return updatedState;
      } else {
        if (productToAdd.quantity > productToAdd.stock) {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
          return state; 
        } else {
          const newState = [...state, { ...productToAdd, quantity: 1 }];
          localStorage.setItem("product", JSON.stringify(newState));
          return newState;
        }
      }
    case "UPDATE_QUANTITY":
      const updatedState = state.map((product, index) =>
        index === action.payload.index
          ? { ...product, quantity: Math.max(action.payload.quantity, 1) }
          : product
      );
      localStorage.setItem("product", JSON.stringify(updatedState));
      return updatedState;
    
    default:
      return state;
  }
};
export default productReducer;
