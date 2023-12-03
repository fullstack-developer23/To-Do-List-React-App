import { useState } from 'react'
import './App.css';

const App = () => {
  // useState Hooks
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
 
  const addItem = () => {
    // Write the add item by copying the state array using
    let listCopy = [...items];
    // a spread operator
    listCopy.push(inputText);
    // the set the state back
    setItems(listCopy);
  };
 
  const deleteItem = (selectedIndex) => {
    // Write the delete functionality to copy the state array
    let listCopy = [...items];
    // remove the item with index 'selectedIndex' (SPLICE)
    listCopy.splice(selectedIndex, 1);
    // set it back to state array
    setItems(listCopy);
  };
 
  const crossItem = inputText => {
    setToggle(!toggle);    
 
    if (inputText.target.parentElement.style.textDecoration === "line-through") {
      inputText.target.parentElement.style.setProperty(`text-decoration`, "none");
    } else {
      inputText.target.parentElement.style.setProperty('text-decoration', 'line-through');
    }
  }
return (
      <div className="App">
      <h1>Grocery Shopping</h1>
      <div className="items">
          {items.map((item, index) => {
 
            return (
              <div className="eachItem">
                <h4 key={index}>{item}</h4>
                <button className="button done" onClick={crossItem}>Done?</button>
                <button className="button remove" onClick={() => deleteItem(index)}>Remove</button>
              </div>
            )
           
          })}
      </div>
      
      <div className="addItem">
        <input className="inputBox" type="text" placeholder='Add to list' value={inputText} onChange={(event) => setInputText(event.target.value)} ></input>
        <button className="addButton" onClick={addItem}>Add</button>
      </div>
 
    </div>
)
  // return (
 
  //   <div className="App">
  //     <h1>Brian's ToDo List</h1>
     
  //     <div className="addItem">
  //       <input className="inputBox" type="text" placeholder='Add to list' value={inputText} onChange={(event) => setInputText(event.target.value)} ></input>
  //       <button className="addButton" onClick={addItem}>Add</button>
  //     </div>
 
  //     <div className="items">
  //         {items.map((item, index) => {
 
  //           return (
  //             <div className="eachItem">
  //               <h4 key={index}>{item}</h4>
  //               <button className="button" onClick={crossItem}>Done?</button>
  //               <button className="button" onClick={() => deleteItem(index)}>Remove</button>
  //             </div>
  //           )
           
  //         })}
  //     </div>
 
  //   </div>
   
  // )
 
}
 
export default App;
