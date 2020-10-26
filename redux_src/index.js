import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(<App store={store} />,document.getElementById("root"));

//render 不会自动渲染  需要加subscribe
store.subscribe(() => {ReactDOM.render(<App store={store} />, document.getElementById("root")); })