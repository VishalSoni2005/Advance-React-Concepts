import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => dispatch({ type: "INCREMENT" });
    const decrement = () => dispatch({ type: "DECREMENT" });

    return(

        <div className="bg-red-700 p-5 rounded m-5 flex flex-col items-center gap-5">
            <div>Count: {state.count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    );
}