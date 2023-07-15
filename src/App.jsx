import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleSign, reset } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const buttonStyles = {
    padding: "8px 1rem",
    background: "red",
    color: "#fff",
    border: "none",
    outline: "none",
    margin: "8px 5px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const loginStyles = {
    border: `5px solid ${logged ? "red" : "blue"}`,
    fontSize: "2rem",
    padding: "10px",
    width: "fit-content",
    transition: "0.3s ease-in-out",
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <button style={buttonStyles} onClick={() => dispatch(decrement(2))}>
        -
      </button>
      <button style={buttonStyles} onClick={() => dispatch(increment(5))}>
        +
      </button>
      <button
        style={{ ...buttonStyles, backgroundColor: "#012Fc1" }}
        onClick={() => dispatch(reset())}
      >
        Reset Counter Comp
      </button>
      <button
        style={{ ...buttonStyles, display: "block" }}
        onClick={() => dispatch(toggleSign())}
      >
        Toggle Login
      </button>
      <h1 style={loginStyles}>Logged In</h1>
    </>
  );
}

export default App;
