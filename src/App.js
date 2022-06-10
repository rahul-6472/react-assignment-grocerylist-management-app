import Grocery from "./components/Grocery";

import { useState } from "react";
function App() {
  const [groceryList, setGroceryList] = useState([]);

  const handleAdd = (item, qty) => {
    let id;
    if (groceryList.length === 0) {
      id = 1;
    } else {
      id = groceryList[groceryList.length - 1].id + 1;
    }
    const grocery = {
      item: item,
      qty: qty,
      id: id,
    };

    setGroceryList([...groceryList, grocery]);
    console.log(groceryList);
  };

  const handleDelete = (id) => {
    setGroceryList(groceryList.filter((grocery) => grocery.id !== id));
  };

  return (
    <div className="App">
      <Grocery
        groceryList={groceryList}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
