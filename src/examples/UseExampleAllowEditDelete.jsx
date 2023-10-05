import Table from "../lib/table/Table";
import list from "./data/exampleData.json";
import fields from "./data/exampleFields.json";

function UseExampleAllowEditDelete() {

    function handleBinClick(){
        console.log('Bin Clicked');
    }

    function handlePencilClick(){
        console.log('Pencil Clicked');
    }
    return (
        <>
            <h1>Allow Edit/Delete Example</h1>
            <Table itemsList={list}
                fields={fields}
                allowEditDelete={true}
                handleBinClick={handleBinClick}
                handlePencilClick={handlePencilClick} /></>

    )
}

export default UseExampleAllowEditDelete;