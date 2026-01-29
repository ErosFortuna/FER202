import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ProductForm() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dữ liệu form:", form);
        alert("Thêm sản phẩm thành công!");
    };

    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
            {/* Tên sản phẩm */}
            <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nhập tên sản phẩm"
                    required
                />
            </Form.Group>

            {/* Giá */}
            <Form.Group className="mb-3">
                <Form.Label>Giá</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Nhập giá"
                    min={0}
                    required
                />
            </Form.Group>

            {/* Danh mục */}
            <Form.Group className="mb-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Chọn danh mục --</option>
                    <option value="phone">Điện thoại</option>
                    <option value="laptop">Laptop</option>
                    <option value="accessory">Phụ kiện</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Lưu sản phẩm
            </Button>
        </Form>
    );
}

export default ProductForm;
