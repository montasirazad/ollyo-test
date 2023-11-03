import { useRef, useState } from 'react';
import './App.css';
import { mainData } from './Data/dataMain';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';



function App() {


  const [allData, setAllData] = useState(mainData)
  const [cart, setCart] = useState([]);

  let dragItem = useRef();
  let dragOverItem = useRef();

  /**Start drag function for controlling the starting of dragging process of the element*/
  const startDrag = (index) => {
    dragItem.current = index;           /**storing the value of index for dragged element */
  };

  /**Enter drag function for controlling the dragging process of the element*/
  const dragEnter = (index) => {
    dragOverItem.current = index;      /**storing the value of index for moved element */

  };

  /**Handle drag end function for controlling end of dragging of the element*/
  const handleDragEnd = () => {
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
      

      {
        cart.length ?
          <Header cart={cart} />
          : null
      }

      <div style={{ display: 'flex', flexWrap: 'wrap', transition: 'all 1s ease-in-out' }}>

        {
          allData.map((data, index) =>
          (<Card
            key={data.id}
            data={data}
            index={index}
            startDrag={startDrag}
            dragEnter={dragEnter}
            handleDragEnd={handleDragEnd}
            handleCheck={handleCheck}
          />)
          )
        }
      </div>
    </div>
  );
}

export default App;
