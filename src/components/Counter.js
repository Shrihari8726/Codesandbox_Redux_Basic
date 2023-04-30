import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../ducks/reducers/counter";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleInc = () => {
    console.log("In");
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}
