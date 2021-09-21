import classes from "./App.module.css";
import ItemsList from "./components/ItemsList/ItemsList";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/ItemsList/Cart/Cart";
import { useSelector } from "react-redux";
function App() {
  const toggleCart = useSelector((state) => state.cartToggle.isToggle);
  return (
    <div className={classes.App}>
      <NavBar></NavBar>
      {toggleCart && <Cart></Cart>}

      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
