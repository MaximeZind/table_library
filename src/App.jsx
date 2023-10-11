import classes from './App.module.css'

import UseExampleAllowEditDelete from "./examples/UseExampleAllowEditDelete";
import UseExampleCustomized from './examples/UseExampleCustomized';
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleFullyCustomized from "./examples/UseExampleFullyCustomized";

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleAllowEditDelete />
      <UseExampleCustomized />
      <UseExampleFullyCustomized />
    </div>
  )
}

export default App
