// su dung useReducer de quan li modal giong nhu ProcessOrderModal.jsx
import React, { useReducer } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// Định nghĩa các action
const ACTIONS = {
    OPEN_MODAL: 'open_modal',
    CLOSE_MODAL: 'close_modal',
    CONFIRM_ORDER: 'confirm_order',
};
// Hàm reducer để xử lý các action
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.OPEN_MODAL:
            return { ...state, isShowModal: true };
        case ACTIONS.CLOSE_MODAL:
            return { ...state, isShowModal: false };
        case ACTIONS.CONFIRM_ORDER:
            alert("Duyệt đơn hàng thành công!");
            return { ...state, isShowModal: false };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
function ProcessOrderModal2() {
    const [state, dispatch] = useReducer(reducer, { isShowModal: false });
    const { isShowModal } = state;
    const handleOpen = () => {
        dispatch({ type: ACTIONS.OPEN_MODAL });
    };
    const handleClose = () => {
        dispatch({ type: ACTIONS.CLOSE_MODAL });
    };
    const handleConfirm = () => {
        dispatch({ type: ACTIONS.CONFIRM_ORDER });
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
export default ProcessOrderModal2;