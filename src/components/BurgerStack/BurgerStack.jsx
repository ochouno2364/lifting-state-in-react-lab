// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (<ul>
        {props.state.map((prop, index) => {
            return <li key={index} style={{backgroundColor : prop.color}}>{prop.name}
            <button>x</button></li>
        })}
    </ul>
    );
  };
  
  export default BurgerStack;
  