import classes from './App.module.css'

import UseExampleAllowEditDelete from "./examples/UseExampleAllowEditDelete";
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleFullyCustomized from "./examples/UseExampleFullyCustomized";

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleAllowEditDelete />
      <UseExampleFullyCustomized />
    </div>
  )
}

export default App
