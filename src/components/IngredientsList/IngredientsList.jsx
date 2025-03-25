// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <ul>
        {props.availableIngredients.map((availableIngredient, index) => (
           <li key={index} style={{backgroundColor: availableIngredient.color}}>{availableIngredient.name}
          <button onClick={() => props.handleAddToBurger(ingredient)}>+</button>
          </li>
        ))}
        
      </ul>
    
    );
  };
  
  export default IngredientList;
  