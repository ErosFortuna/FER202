//hay dung useReducer de lam Product form giong nhu ProductForm.jsx
//hay dung form control feedback tu react-bootstrap de validation cac  form nhap vao

import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
// Định nghĩa các action
const ACTIONS = {
    CHANGE_INPUT: 'change_input',
    RESET_FORM: 'reset_form',
};
// Giá trị mặc định của form
const DEFAULT_FORM_STATE = {
    productName: '',
    price: '',
    category: 'Electronics',
};
// Hàm reducer để xử lý các action
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.CHANGE_INPUT:
            return { ...state, [action.field]: action.value };
        case ACTIONS.RESET_FORM:
            return DEFAULT_FORM_STATE;
        default:
            return state;
    }
}
function ProductForm2() {
    const [state, dispatch] = useReducer(reducer, DEFAULT_FORM_STATE);
    const { productName, price, category } = state;
    const [validated, setValidated] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: ACTIONS.CHANGE_INPUT, field: name, value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // validate logic
        if (productName.trim() === "" || price <= 0) {
            setValidated(true);
            return;
        }
        alert(`Thông tin sản phẩm:\nTên: ${productName}\nGiá: ${price}\nDanh mục: ${category}`);
        dispatch({ type: ACTIONS.RESET_FORM });
    };
    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
            <h3 className="mb-3">Product Form</h3>
            <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={handleInputChange}
                    placeholder="Nhập tên sản phẩm..."
                    isInvalid={validated && productName.trim() === ""}
                />
                <Form.Control.Feedback type="invalid">
                    Tên sản phẩm không được để trống
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Giá</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                    placeholder="Nhập giá sản phẩm..."
                    isInvalid={validated && price <= 0}
                />
                <Form.Control.Feedback type="invalid">
                    Giá phải lớn hơn 0
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                >
                    <option value="Electronics">Điện tử</option>
                    <option value="Clothing">Quần áo</option>
                    <option value="Books">Sách</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default ProductForm2;