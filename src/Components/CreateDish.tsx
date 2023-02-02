import React from 'react'
import {IDish} from "../Interfaces"

interface Props {
    dish: IDish;
    removeDish(dishNameToDelete:string):void;
}

const CreateDish = ({dish, removeDish}: Props) => {
  return (
    <div className='dish'>
        <div className='content'>
            <span>{dish.dishName}</span>
            <span>{dish.guest}</span>
        </div>
        <button onClick={()=> {removeDish(dish.dishName)}}>X</button>
    </div>
  )
}

export default CreateDish