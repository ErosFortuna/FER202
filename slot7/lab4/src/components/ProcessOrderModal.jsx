import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProcessOrderModal() {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleOpen = () => {
        setIsShowModal(true);
    };

    const handleClose = () => {
        setIsShowModal(false);
    };

    const handleConfirm = () => {
        alert("Duyệt đơn hàng thành công!");
        setIsShowModal(false);
    };

    return (
        <>
            {/* Nút xử lý đơn hàng */}
            <Button variant="primary" onClick={handleOpen}>
                Xử lý đơn hàng
            </Button>

            {/* Modal xác nhận */}
            <Modal show={isShowModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="success" onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProcessOrderModal;
