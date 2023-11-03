import { useRef, useState } from 'react';
import './App.css';
import { mainData } from './Data/dataMain';



function App() {


  const [allData, setAllData] = useState(mainData)
  const [cart, setCart] = useState([]);

  let dragItem = useRef();
  let dragOverItem = useRef()

  const startDrag = (index) => {
    dragItem.current = index
    //console.log(dragItem);
  };

  const dragEnter = (index) => {
    dragOverItem.current = index;

  }
  const handleDragEnd = () => {
    const copiedArray = [...allData];
    const dragItemContent = copiedArray[dragItem.current];
    copiedArray.splice(dragItem.current, 1)
    copiedArray.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null;
    dragOverItem.current = null;
    setAllData(copiedArray)
    //console.log('drag item content', dragItemContent);
  }




  const handleCheck = (e) => {
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
      <h3>Hello</h3>

      {cart.length ? <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <h2>item added:{cart.length}</h2>
        <button onClick={() => { window.location.reload() }}>Delete items</button>
      </div> : null}

      <div style={{ display: 'flex', flexWrap: 'wrap', transition: 'all 1s ease-in-out' }}>

        {
          allData.map((data, index) =>
          (
            <div
              ref={dragOverItem}
              style={index === 0 ? { width: '180px', flexGrow: '3', height: '180px', border: '1px solid green', margin: '10px', cursor: 'move', transition: 'all .2s ease-in-out' } :
                { width: '80px', height: '80px', border: '1px solid red', margin: '10px', cursor: 'move', transition: 'all .2s ease-in-out' }
              }
              key={data.id}
              draggable

              onDragStart={() => startDrag(index)}
              onDragEnter={() => dragEnter(index)}
              onDragEnd={() => handleDragEnd()}
            >
              <label style={{ cursor: 'pointer' }}>
                <input type="checkbox" name="" id="" value={data.id} onClick={(e) => handleCheck(e, data)} />Select
              </label>
              <img src={data.image} alt="" style={index === 0 ? { width: '140px', height: '140px' } : { width: '50px', height: '50px' }} />
            </div>)
          )
        }
      </div>
    </div>
  );
}

export default App;
