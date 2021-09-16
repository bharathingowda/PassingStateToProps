import React from "react";

export default function NavBar(props) {
  return (
    <div className="App">
      <h1> PASSING STATE TO PROPS</h1>
      <h3>
        My {props.name ? "name is Bharathi" : " full name is Bharathi Gowda"}
      </h3>
    </div>
  );
}
