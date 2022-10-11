import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Website from "./Website";
import {BrowserRouter} from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
 <Website/>
    </BrowserRouter>
 
  );
}

export default App;
