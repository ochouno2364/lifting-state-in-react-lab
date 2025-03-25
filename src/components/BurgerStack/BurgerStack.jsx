// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
    <div>
        <h1>Burger</h1>
    <ul>
        {props.stack.map((ingredient, index) => (
              <li key={index} style={{backgroundColor : ingredient.color}}>{ingredient.name}
            <button onClick={() => props.handleRemoveFromBurger(index)}>+</button>
            </li>
        ))}
    </ul>
    </div>
    );
  };
  
  export default BurgerStack;
  