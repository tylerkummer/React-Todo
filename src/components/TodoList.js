// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from '../components/Todo';

const TodoList = props => {
    return(
        <div>
            {props.tasks.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button onClick={props.clearCompleted}>Delete Checked</button>
        </div>
    )
}

export default TodoList