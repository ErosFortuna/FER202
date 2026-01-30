//dung useReducer de lam giong nhu TodoList.jsx

import React, { useReducer, useState } from 'react';
import { Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
// Định nghĩa các action
const ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
};
// Hàm reducer để xử lý các action
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [...state, { id: Date.now(), text: action.text }];
        case ACTIONS.DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}
function ToDoList2() {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, dispatch] = useReducer(reducer, []);
    const [validated, setValidated] = useState(false);
    const handleAddTask = () => {
        if (taskInput.trim() === "") {
            setValidated(true);
            return;
        }
        dispatch({ type: ACTIONS.ADD_TASK, text: taskInput });
        setTaskInput('');
    };
    const handleDeleteTask = (id) => {
        dispatch({ type: ACTIONS.DELETE_TASK, id });
    };
    return (
        <div style={{ maxWidth: '400px' }}>
            <h3 className="mb-3">Todo List</h3>
            {/* Input + Button */}
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Nhập công việc..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    isInvalid={validated && taskInput.trim() === ""}
                />
                <Form.Control.Feedback type="invalid">
                    Công việc không được để trống
                </Form.Control.Feedback>
                <Button variant="primary" onClick={handleAddTask}>
                    Thêm
                </Button>
            </InputGroup>
            {/* Danh sách công việc */}
            <ListGroup>
                {tasks.map((task) => (
                    <ListGroup.Item
                        key={task.id}
                        className="d-flex justify-content-between align-items-center"
                    >
                        {task.text}
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Xóa
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
export default ToDoList2;