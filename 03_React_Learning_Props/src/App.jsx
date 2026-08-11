import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="main">
      <Cards user="Gaurav" age={21}/>
      <Cards user="Gaurav Srivastava" age={22}/>
      <Cards user="Virat Kholi" age={31}/>
      <Cards user="Bitu Srivastava" age={52}/>
      
    </div>
  );
};

export default App;
