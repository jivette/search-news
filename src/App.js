import React from "react";
import "./App.css";
import Form from "./components/Form";

const styles = {
  App: {
    background: "darkseagreen",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
};

function App() {
  return (
    <div className="App" style={styles.App}>
      <Form />
    </div>
  );
}

export default App;
