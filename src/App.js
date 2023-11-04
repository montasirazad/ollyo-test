import { useRef, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import { mainData } from './Data/dataMain';



function App() {


  const [allData, setAllData] = useState(mainData)
  const [cart, setCart] = useState([]);


  let dragItem = useRef();
  let dragOverItem = useRef();






  const startDrag = (index) => {        /**Start drag function for controlling the starting of dragging process of the element*/
    dragItem.current = index;           /**storing the value of index for dragged element */
  };


  const dragEnter = (index) => {        /**Enter drag function for controlling the dragging process of the element*/
    dragOverItem.current = index;      /**storing the value of index for moved element */

  };


  const handleDragEnd = () => {       /**Handle drag end function for controlling end of dragging of the element*/
    const copiedArray = [...allData];
    const dragItemContent = copiedArray[dragItem.current];
    copiedArray.splice(dragItem.current, 1)
    copiedArray.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null;
    dragOverItem.current = null;
    setAllData(copiedArray)
  };




  const handleCheck = (e) => {                   /**Function for handle check box   */
    const isChecked = e.target.checked;
    const itemId = e.target.value;
    if (isChecked) {
      const newArray = [...cart, itemId];
      setCart(newArray)

      console.log(e.target.value);
    } if (!isChecked) {
      const updatedCart = cart.filter(item => item !== itemId)
      setCart(updatedCart)
    }

  }



  return (
    <div className='App'>

      <div style={{ padding: '5px', borderBottom: '1px dotted gray', borderTop: '1px dotted gray', margin: '5px' }}>
        <h4>Gallery</h4>
      </div>

      {
        cart.length ? <Header cart={cart} /> : null
      }

      <div className='app-container '>


        {
          allData.map((data, index) => (
            <Card
              key={data.id}
              data={data}
              index={index}
              startDrag={startDrag}
              dragEnter={dragEnter}
              handleDragEnd={handleDragEnd}
              handleCheck={handleCheck}
            />
          ))
        }

      </div>
    </div>
  );
}

export default App;


