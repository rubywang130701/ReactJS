import TodoRowItem from "./TodoRowItem"
// TODO This is a functional component in React that renders a table for displaying a list of todo items. The component takes in a props object that includes a todos array and a deleteTodo function.The return statement contains a JSX table element with a table header and table body. The table header contains three table cells for the todo item's number, description, and assigned person. The table body is generated using the map function to iterate over each todo item in the props.todos array. For each todo item, the map function creates a TodoRowItem component with the appropriate props, including the rowNumber, rowDescription, rowAssigned, and deleteTodo props.The key prop is also passed to each TodoRowItem component to help React efficiently update the list when changes are made. The deleteTodo prop is passed to each TodoRowItem component so that it can be called when the user clicks the delete button in a specific row.
function TodoTable(props) {
    return ( <
        table className = "table table-hover" >
        <
        thead >
        <
        tr >
        <
        th scope = 'col' > # < /th> <
        th scope = 'col' > Description < /th> <
        th scope = 'col' > Assigned < /th> <
        /tr> <
        /thead> <
        tbody > {
            props.todos.map(todo => ( <
                TodoRowItem key = { todo.rowNumber }
                rowNumber = { todo.rowNumber }
                rowDescription = { todo.rowDescription }
                rowAssigned = { todo.rowAssigned }
                deleteTodo = { props.deleteTodo }
                />
            ))
        } <
        /tbody> <
        /table>
    )
}

export default TodoTable