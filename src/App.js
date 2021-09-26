import classes from "./App.module.css";
import React, { useEffect } from "react";
import ItemsList from "./components/ItemsList/ItemsList";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/ItemsList/Cart/Cart";
import { fetchItemsList } from "./components/Store/Items";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.cartToggle.isToggle);
  useEffect(() => {
    dispatch(fetchItemsList());
  }, []);
  return (
    <div className={classes.App}>
      <NavBar></NavBar>
      {toggleCart && <Cart></Cart>}

      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
