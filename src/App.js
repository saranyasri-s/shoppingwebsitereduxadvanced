import classes from "./App.module.css";
import ItemsList from "./components/ItemsList/ItemsList";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/ItemsList/Cart/Cart";
function App() {
  return (
    <div className={classes.App}>
      <NavBar></NavBar>
      <Cart></Cart>
      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
