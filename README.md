# Table Component

The React Table Component is a versatile and customizable table component for displaying tabular data in your React applications. It offers various features and options for rendering data tables.

## Prerequisites

- [react (**version ^18.2.0 or higher**)](https://react.dev/)

## Installation

You can install this component via npm:

`npm install maximez_table`

## Usage

# Import the component

`import { Table } from 'maximez_table';`

# Include the Modal componentn in your JSX

```         
            <Table itemsList={list}
                fields={fields}
                //Il est possible de customizer via des props
            />
```

# Customiwe the component by passing props

- `itemsList`: An array of data items to display in the table.
- `fields`: An array of table fields configuration.
- `allowEditDelete`: A boolean indicating whether edit and delete actions are allowed.
- `handleBinClick`: A function to handle bin icon clicks (delete action).
- `handlePencilClick`: A function to handle pencil icon clicks (edit action).
- `tableBackgroundColor`: Background color of the table.
- `oddBackgroundColor`: Background color for odd rows.
- `evenBackgroundColor`: Background color for even rows.
- `hoveredBackgroundColor`: Background color for hovered rows.
- `fontColor`: Font color for table content.
- `hoveredFontColor`: Font color for hovered rows.
- `iconBoxBackgroundColor`: Background color for icon boxes.
- `iconColor`: Color of icons.
- `highlightedBackgroundColor`: Background color for highlighted rows.
- `dropdownLabelColor`: Label color for dropdowns.
- `dropdownFocusLabelColor`: Label color for focused dropdowns.
- `dropdownBackgroundColor`: Background color for dropdowns.
- `dropdownHoveredBackgroundColor`: Background color for hovered dropdown items.
- `dropdownFontColor`: Font color for dropdown items.
- `dropdownHoveredFontColor`: Font color for hovered dropdown items.
- `dropdownBorderBottomColor`: Border bottom color for dropdowns.
- `textInputLabelColor`: Label color for text inputs.
- `textInputFocusedLabelColor`: Label color for focused text inputs.
- `textInputBoxShadowColor`: Box shadow color for text inputs.
- `textInputFontColor`: Font color for text inputs.
