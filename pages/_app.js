import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import App from "next/app";
import Cookie from "js-cookie";
import AppContext from "../context/AppContext";

const getTotal = (items) => {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

class MyApp extends App {
  state = {
    cart: { items: [], total: 0 },
  };

  componentDidMount() {
    //Cookie.remove("cart");
    const cart = Cookie.get("cart");
    //if items in cart, set items and total from cookie
    console.log(cart);

    if (typeof cart === "string" && cart !== "undefined") {
      console.log("foyd");
      JSON.parse(cart).forEach((item) => {
        this.setState({
          cart: { items: JSON.parse(cart), total: item.price * item.quantity },
        });
      });
    }
    
  }

  
  
  addItem = (item) => {
    if(item.price === null || item.price === undefined) {
      alert("Ce Produit n'a pas de prix listé. Contactez Nous via notre page contact pour plus the details.\nMerci");
      return;
    }
    let { items } = this.state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    const newItem = items.find((i) => i.id === item.id && i.name === item.name && i.category === item.category);
    // if item is not new, add to cart, set quantity to 1
    if (!newItem) {
      //set quantity property to 1
      item.quantity = item.sentQuantity;
      console.log(this.state.cart.total, item.price);
      var newList = [...items, item]
      this.setState(
        {
          cart: {
            items: [...items, item],
            total: getTotal(newList), // this.state.cart.total + item.price * item.sentQuantity,
          },
        },
        () => Cookie.set("cart", newList)
      );
    } else {
      var newList = []
      for (var i = 0; i < items.length; i++){
        newList[i] = items[i];
        if(items[i].id === item.id && items[i].name === item.name && items[i].category === item.category){
          newList[i].quantity = items[i].quantity + item.sentQuantity;
        }        
      }
      
      /* this.state.cart.items.map((item) =>
        (newItem.id === item.id && newItem.name === item.name && newItem.category === item.category)
          ? Object.assign({}, item, { quantity: item.quantity + item.sentQuantity })
          : item
      ) */
      this.setState(
        {
          cart: {
            items: newList,
            total: getTotal(newList), //this.state.cart.total + item.price* item.sentQuantity,
          },
        },
        () => Cookie.set("cart", newList)
      );
    }
  };

  increaseItem = (item) => {
    let { items } = this.state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    const newItem = items.find((i) => i.id === item.id && i.name === item.name && i.category === item.category);

    var newList = []
      for (var i = 0; i < items.length; i++){
        newList[i] = items[i];
        if(items[i].id === item.id && items[i].name === item.name && items[i].category === item.category){
          newList[i].quantity = items[i].quantity + 1;
        }        
      }
    /* var newList = this.state.cart.items.map((item) =>
        (newItem.id === item.id && newItem.name === item.name && newItem.category === item.category)
          ? Object.assign({}, item, { quantity: item.quantity + 1 })
          : item
      ) */
      this.setState(
        {
          cart: {
            items: newList,
            total: getTotal(newList), //this.state.cart.total + item.price* item.sentQuantity,
          },
        },
      () => Cookie.set("cart", newList)
    );
  };

  decreaseItem = (item) => {
    let { items } = this.state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    const newItem = items.find((i) => i.id === item.id && i.name === item.name && i.category === item.category);
    if (newItem.quantity > 1) {
      var newList = this.state.cart.items.map((item) =>
        item.id === newItem.id
          ? Object.assign({}, item, { quantity: item.quantity - 1 })
          : item
      )
      this.setState(
        {
          cart: {
            items: newList,
            total: getTotal(newList), 
          },
        },
        () => Cookie.set("cart", this.newList)
      );
    } else {
      const items = [...this.state.cart.items];
      const index = items.findIndex((i) => i.id === item.id && i.name === item.name && i.category === item.category);

      items.splice(index, 1);
      this.setState(
        { cart: { items: items, total: getTotal(items)/* this.state.cart.total - item.price*item.quantity */ } },
        () => Cookie.set("cart", this.state.items)
      );
    }
  };

  

  deleteItem = (item) => {
    const items = [...this.state.cart.items];
      const index = items.findIndex((i) => i.id === item.id && i.name === item.name && i.category === item.category);

      items.splice(index, 1);
      this.setState(
        { cart: { items: items, total: getTotal(items)/* this.state.cart.total - item.price*item.quantity */ } },
        () => Cookie.set("cart", this.state.items)
      );
  };


  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          cart: this.state.cart,
          addItem: this.addItem,
          increaseItem: this.increaseItem,
          decreaseItem: this.decreaseItem,
          deleteItem: this.deleteItem,
        }}
      >
          <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;

/* import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
 */