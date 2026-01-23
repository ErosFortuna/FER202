import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function DemoForm() {
    return (
        <Container className="booking-form mt-4">

            <h2 className="form-title">Form đặt vé máy bay</h2>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className="input-icon">
                            <i className="bi bi-person"></i>
                        </InputGroup.Text>
                        <Form.Control placeholder="Họ tên" />
                        <InputGroup.Text className="input-suffix">
                            vnd
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="help-text">
                        Phải nhập 5 ký tự, in hoa...
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control placeholder="Địa chỉ" />
                    <Form.Text className="help-text">
                        Phải nhập 5 ký tự, in hoa...
                    </Form.Text>
                </Form.Group>

                <Row className="mb-3">
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Đi từ</Form.Label>
                            <Form.Select>
                                <option>Hà Nội</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Đến</Form.Label>
                            <Form.Select>
                                <option>Hà Nội</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-4">
                    <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
                    <div >
                        <Form.Check label="Đi" />
                        <Form.Check label="Về" />
                    </div>
                </Form.Group>

                <Button className="submit-btn" type="submit">
                    Đặt vé
                </Button>
            </Form>
        </Container>

    );
}

export default DemoForm;
