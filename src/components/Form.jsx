import React from "react";
import Input from "./Input";
import Submit from "./Submit";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Submit/>
    </form>
  );
}

export default Form;
