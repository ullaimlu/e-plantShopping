import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./CreateSlice";
import plantsArray from "./plantsArray";
import './../ProductList.css'



function PlantList(){

const dispatch = useDispatch()



const[disablePlants, setDisabledPlants] = useState([])
function handleAddToCart(plant){
 dispatch(addItemToCart(plant))
 setDisabledPlants([...disablePlants, plant.name])
}



const [plantList, setPlantList] = useState(plantsArray)
    return (
        <>
        <div className="product-grid">
        {plantsArray.map((category, index) => (
        <div key={index}>
            <h1><div>{category.category}</div></h1>
            <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">{plant.cost}</div>
                <button className="product-button1" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
            </div>
        </div>
        ))}
        </div>
        
       
    </>
  )
}
        
    
export default PlantList