import Table from "../lib/table/Table";
import list from "./data/exampleData.json";
import fields from "./data/exampleFields.json";

function UseExampleCustomized() {

    const colorPalette= {
        "primaryColor": "#121212",
        "secondaryColor": "#000000",
        "tertiaryColor": "rgb(255,255,255)",
        "quarternaryColor": "rgb(220,220,220)",
        "quinaryColor": "#999",
        "senaryColor": "rgba(68, 68, 68, 0.6)"
    }
    
  return (
    <>
      <h1>Customized Example (dark mode)</h1>
      <Table itemsList={list}
                fields={fields}
                tableBackgroundColor={colorPalette.secondaryColor}
                oddBackgroundColor={colorPalette.primaryColor}
                evenBackgroundColor={colorPalette.secondaryColor}
                hoveredBackgroundColor={colorPalette.quarternaryColor}
                fontColor={colorPalette.tertiaryColor}
                hoveredFontColor={colorPalette.secondaryColor}
                iconBoxBackgroundColor={colorPalette.secondaryColor}
                iconColor={colorPalette.tertiaryColor}
                highlightedBackgroundColor={colorPalette.senaryColor}
                
                dropdownLabelColor={colorPalette.quinaryColor}
                dropdownFocusedLabelColor={colorPalette.tertiaryColor}
                dropdownBackgroundColor={colorPalette.secondaryColor}
                dropdownHoveredBackgroundColor={colorPalette.primaryColor}
                dropdownFontColor={colorPalette.tertiaryColor}
                dropdownHoveredFontColor={colorPalette.tertiaryColor}
                dropdownBorderBottomColor={colorPalette.senaryColor}
                
                textInputLabelColor={colorPalette.quinaryColor}
                textInputFocusedLabelColor={colorPalette.tertiaryColor}
                textInputBoxShadowColor={colorPalette.senaryColor}
                textInputFontColor={colorPalette.tertiaryColor}/>
    </>
  )
}

export default UseExampleCustomized;