import React from "react";
import Header from "./Header";
import Form from "./Form";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <Header /> : <Form />}
    </div>
  );
}

export default App;
