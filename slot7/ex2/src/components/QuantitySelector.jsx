import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function QuantitySelector({ initialValue = 0, onChange }) {
    const [quantity, setQuantity] = useState(initialValue);

    const updateQuantity = (value) => {
        const newValue = Math.max(0, value); // đảm bảo >= 0
        setQuantity(newValue);
        if (onChange) onChange(newValue);
    };

    const handleMinus = () => {
        updateQuantity(quantity - 1);
    };

    const handlePlus = () => {
        updateQuantity(quantity + 1);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        updateQuantity(isNaN(value) ? 0 : value);
    };

    return (
        <InputGroup style={{ maxWidth: "150px" }}>
            <Button variant="outline-secondary" onClick={handleMinus}>
                −
            </Button>

            <Form.Control
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={0}
                className="text-center"
            />

            <Button variant="outline-secondary" onClick={handlePlus}>
                +
            </Button>
        </InputGroup>
    );
}

export default QuantitySelector;
