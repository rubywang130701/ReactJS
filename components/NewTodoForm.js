import React, {useState} from 'react';
// TODO  This is a functional component in React that renders a form for creating a new todo item. The component uses the useState hook to manage the state of two variables, description and assigned.The submitTodo function is called when the user clicks the "Add Todo" button. If both description and assigned are not empty strings, it calls the addTodo function that is passed to the component as a prop (presumably by the parent component), passing description and assigned as arguments. It then resets the description and assigned variables to empty strings.The return statement contains the JSX for the form. It includes two input fields, one for the todo item description and one for the person it is assigned to. The onChange event handlers are used to update the description and assigned variables as the user types. The value attributes are used to set the current value of the input fields to the corresponding state variables. The button's onClick event handler calls the submitTodo function when clicked.
function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary mt-3' 
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}


export default NewTodoForm