import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { ItemDetails } from "./ItemDetails";
import { Form1 } from "./Form";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

// const initialInputs = {
//   title: "",
//   description: "",
//   price: "",
//   category: "",
//   image: "",
// };

export const App = () => {
  // const [input, setInput] = useState(initialInputs);
  const [itemDetails, setItemDetails] = useState(null);
  const [items, setItems] = useState([]);
  const [isAddingItems, setIsAddingItems] = useState(false);

  //gets one item
  const fetchItem = async (id) => {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const data = await response.json();
      setItemDetails(data);
      // console.log(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };
  //gets all items
  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);
  console.log(items);

  return (
    <main>
      {isAddingItems ? (
        <Form1 setIsAddingItems={setIsAddingItems} fetchItems={fetchItems}/>
      ) : itemDetails ? (
        <ItemDetails item={itemDetails} setItemDetails={setItemDetails} />
      ) : (
        <>
          <h1>Inventory App</h1>
          <h2>Products</h2>
          <ItemList items={items} fetchItem={fetchItem} />
          <Button variant="primary" onClick={() => setIsAddingItems(true)}>
            Add new item{" "}
          </Button>
        </>
      )}
    </main>
  );
};
