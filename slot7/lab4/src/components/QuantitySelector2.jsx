//su dung useReducer de tang giam so luong san pham trong gio hang giong nhu quantitySelector.jsx
import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
// Định nghĩa các action
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    SET_INPUT: 'set_input',
};
// Hàm reducer để xử lý các action
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, quantity: state.quantity + 1 };
        case ACTIONS.DECREMENT:
            return { ...state, quantity: Math.max(0, state.quantity - 1) };
        case ACTIONS.SET_INPUT:
            return { ...state, quantity: Math.max(0, action.payload) };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
function QuantitySelector2({ initialValue, onChange }) {
    const [state, dispatch] = useReducer(reducer, { quantity: initialValue });
    const { quantity } = state;
    const handleIncrement = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    };
    const handleDecrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    };
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        dispatch({ type: ACTIONS.SET_INPUT, payload: isNaN(value) ? 0 : value });
    }

    React.useEffect(() => {
        onChange(quantity);
    }, [quantity, onChange]);
    return (
        <ButtonGroup>
            <Button variant="secondary" onClick={handleDecrement}>
                -
            </Button>
            <Form.Control
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={0}
                className="text-center"
            />
            <Button variant="secondary" onClick={handleIncrement}>
                +
            </Button>
        </ButtonGroup>
    );
}
QuantitySelector2.propTypes = {
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
};
QuantitySelector2.defaultProps = {
    initialValue: 0,
    onChange: () => { },
};
export default QuantitySelector2;