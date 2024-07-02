import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./CreateSlice";
import plantsArray from "./plantsArray";





function PlantList(){

const dispatch = useDispatch()
const[disablePlants, setDisabledPlants] = useState([])
function handleAddToCart(plant){
 dispatch(addItemToCart(plant))
 setDisabledPlants([...disablePlants, plant.id])
}
const [plantList, setPlantList] = useState(plantsArray)
    return (
        <>
        <div className="product-grid">
            {
        plantList.map((category, index)=>(
          <div key={index}>
          <div className="header"><h1>{category.category}</h1></div>
          <div className='container'>
            <div className='row'>
            {category.plants.map((plant, index)=>(
              <div key = {index} className = "col-4">
                <div className='box'>
                  <div className='name'>{plant.name}</div>
                  <div className='plant'><img src={plant.imageUrl}/></div>
                  <div className='price'>${plant.price}</div>
                  <p>{plant.description}</p>
                  <div className="add-to-cart">
                    <button 
                      className='add-to-cart-btn' 
                      onClick={()=>handleAddToCart(plant)}
                      disabled = {disablePlants.includes(plant.id)}
                     > 
                      Add to cart 
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
          </div>
          </div>
          
        ))
      }
      </div>
    </>
  )
}
        
    
export default PlantList