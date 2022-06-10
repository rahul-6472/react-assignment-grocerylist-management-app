import GroceryInput from "./GroceryInput"
import GroceryList from "./GroceryList"
const Grocery = ({groceryList,handleAdd,handleDelete}) => {
  return (
    <div>
      <GroceryInput handleAdd = {handleAdd}/>
      <GroceryList groceryList = {groceryList} handleDelete = {handleDelete}/>
    </div>
  )
}

export default Grocery
