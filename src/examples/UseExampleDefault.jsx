import Table from "../lib/table/Table";
import list from "./data/exampleData.json";
import fields from "./data/exampleFields.json";

function UseExampleDefault() {

  return (
    <>
      <h1>Default example</h1>
      <Table itemsList={list}
        fields={fields} />
    </>
  )
}

export default UseExampleDefault;
