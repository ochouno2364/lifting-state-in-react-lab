import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientsList/IngredientsList';

const App = (props) => {



  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];


  const [stack, setStack] = useState([]);

  const handleAddToBurger = (ingredient) => {
  console.log(ingredient);
  const myBurger = [ingredient, ...stack];
  setStack([...myBurger])
  };

  const handleRemoveFromBurger = (index) => {
 const newBurger = stack.filter((ingredient, i) => i !== index);
 setStack(newBurger)
  };



  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
         availableIngredients={availableIngredients}
         handleAddToBurger={handleAddToBurger}/>
        <BurgerStack 
        stack={stack} 
        handleRemoveFromBurger={handleRemoveFromBurger}/>
      
      </section>
    </main>
  );
};

export default App;