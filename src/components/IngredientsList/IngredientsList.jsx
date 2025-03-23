// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <ul>
        {props.availableIngredients.map((availableIngredient, index) => {
          return <li key={index} style={{backgroundColor: availableIngredient.color}}>{availableIngredient.name}
          <button>+</button></li>
        })}
        
      </ul>
    
    );
  };
  
  export default IngredientList;
  