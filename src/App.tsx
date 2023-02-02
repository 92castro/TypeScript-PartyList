import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import CreateDish from './Components/CreateDish';
import {IDish} from "./Interfaces"

const App: FC = () => {
  
  const [dish, setDish] = useState<string>("")
  const [guest, setGuest] = useState<string>("")
  const [dishList, setDishList] = useState<IDish[]>([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    if (e.target.name === "dish"){
      setDish(e.target.value)
    }else{
      setGuest(e.target.value)
    }
  }

  const addDish = (): void => {
    const newDish = {dishName: dish, guest:guest};
    setDishList([...dishList, newDish])
    setDish("");
    setGuest("");
  }

  const removeDish = (dishNameToDelete:string): void=>{
    setDishList(dishList.filter((dish)=> {
    return dish.dishName != dishNameToDelete
  }))
  }
  
  return (
  <div className="App">
    <h1>SuperBowl Party</h1>
      <div className='header'>
        <div className='inputContainer'>
        <input type="text" placeholder='Dish...' name='dish' value={dish} onChange={handleChange} />
        <input type="text" placeholder='Guest Name' onChange={handleChange} name='guest' value={guest} />
        </div>
        <button onClick={addDish}>Add Dish</button>
      </div>
      <div className='dishList'>
        {dishList.map((dish: IDish, key:number)=> {
        return <CreateDish key={key} dish={dish} removeDish={removeDish}/>;
})}
      </div>
    </div>
  );
}

export default App;
