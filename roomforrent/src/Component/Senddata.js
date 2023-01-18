import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar"; //ดึง Calender มาใช้งาน
import "react-calendar/dist/Calendar.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
const Send = (props) => {
  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form validate
  const [validated, setValidated] = useState(false);

  //Calender เลือกวันที่
  var day
  const [value, onChange] = useState(new Date());

  //หากมีการกด Submit Form ฟังก์ชันนี้จะทำงาน
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  const showdata = () => {
    if (value.getMonth() == "0") {
      var day =
        value.getDate() +
        "/" +
        value.getMonth() +
        1 +
        "/" +
        value.getFullYear();
      console.log(day);
    } else {
      var day =
        value.getDate() +
        "/" +
        0 +
        value.getMonth() +
        "/" +
        value.getFullYear();
      console.log(day);
    }
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        จองห้องพัก
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>จองห้องพัก {props.id}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <br></br>
            <div className="col-md-7 mx-auto">
              <Calendar onChange={onChange} value={value} />
            </div>
            <br></br>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control required type="text"></Form.Control>
                <Form.Control.Feedback>กรุณากรอกชื่อ</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control required type="text"></Form.Control>
                <Form.Control.Feedback>กรุณากรอกนามสกุล</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <Row>
            <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text"></Form.Control>
                <Form.Control.Feedback>กรุณากรอกชื่อ</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control required type="text"></Form.Control>
                <Form.Control.Feedback>กรุณากรอกนามสกุล</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="float-end">
              <br></br>
              <Button variant="primary" type="button" onClick={showdata}>
                ส่งข้อมูล
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Send;
