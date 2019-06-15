import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Add a new task</h2>
      <Form />
    </div>
    <div className="col-md-3 offset-md-2">
      <h2>Fetched tasks</h2>
      <Tasks />
    </div>
  </div>
);

export default App;