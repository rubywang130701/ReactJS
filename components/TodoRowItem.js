// TODO This is a functional component in React that renders a table row for a single todo item. The component takes in several props, including rowNumber, rowDescription, rowAssigned, and deleteTodo.The return statement contains a JSX table row element with three table cells. The first cell contains the rowNumber prop, which is used to display the todo item's number in the list. The second and third cells display the rowDescription and rowAssigned props, respectively.The onClick event handler is attached to the entire row and calls the deleteTodo function when clicked, passing in the rowNumber prop as an argument. Presumably, the deleteTodo function is defined in the parent component and is responsible for removing the todo item from the list.
function TodoRowItem(props) {

    return ( <
        tr onClick = {
            () => props.deleteTodo(props.rowNumber) } >
        <
        th scope = "row" > { props.rowNumber } < /th> <
        td > { props.rowDescription } < /td> <
        td > { props.rowAssigned } < /td> <
        /tr>
    )
}

export default TodoRowItem