import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div style={{ maxWidth: "400px" }}>
            <h3 className="mb-3">Todo List</h3>

            {/* Input + Button */}
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Nhập công việc..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button variant="primary" onClick={handleAddTask}>
                    Thêm
                </Button>
            </InputGroup>

            {/* Danh sách công việc */}
            <ListGroup>
                {tasks.map((item, index) => (
                    <ListGroup.Item
                        key={index}
                        className="d-flex justify-content-between align-items-center"
                    >
                        {item}
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDeleteTask(index)}
                        >
                            Xóa
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default TodoList;
