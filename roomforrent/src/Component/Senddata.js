import Modal from "react-bootstrap/Modal";

import Day from "./Day";
import Month from "./Month"
import Year from "./Year"

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

  //เก็บชื่อ,นามสกุล,email,เบอร์โทร,ยืมของ
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState("");

  const year = new Date()
  //หากมีการกด Submit Form ฟังก์ชันนี้จะทำงาน
  const handleSubmit = (event) => {
    const roomid = props.roomid
    const totalday = document.getElementById("day11").value+"/"+document.getElementById("month11").value+"/"+document.getElementById("year11").value
    console.log(totalday)
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      const data1 = { roomid,name, lname, email, phone, item,totalday };
      fetch("http://localhost:4000/InsertRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data1),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data === "Success") {
            alert("จองสำเร็จ");
            window.location.reload();
          } else {
            alert("ไม่สามารถจองได้");
          }
        });
    } else {
      event.preventDefault();

      event.stopPropagation();
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
            <div>จองห้องพัก {props.roomid}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <br></br>

            <br></br>
            <Row className=" d-flex align-content-center">
              <Form.Group required className="col-auto mx-auto" >
                <Form.Label>เลือกวันที่</Form.Label>
                <Row>
                  <Col className="col-auto"><Form.Select id="day11"><Day /></Form.Select></Col>
                  <Col ><Form.Select id="month11"><Month /></Form.Select></Col>
                  <Col className="col-3"><Form.Control id="year11" readOnly type="text" defaultValue={year.getFullYear()}></Form.Control></Col>
                </Row>
                
                
              </Form.Group>
            </Row>
            <br></br>
            <Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setName(e.currentTarget.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="lname">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setlName(e.currentTarget.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="phone">
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setPhone(e.currentTarget.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <Row>
              <Form.Group as={Col} controlId="borrowitem">
                <Form.Label>ยืมอุปกรณ์</Form.Label>
                <Form.Select
                  
                  aria-label="การยิมของ"
                  onChange={(e) => setItem(e.currentTarget.value)}
                >
                  <option></option>
                  <option value="โปรเจคเตอร์">โปรเจคเตอร์</option>
                  <option value="เครืองปริ้น">เครืองปริ้น</option>
                  <option value="เครื่องเสียง">เครื่องเสียง</option>
                </Form.Select>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="float-end">
              <br></br>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ปิด
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={(e) => handleSubmit(e)}
              >
                ส่งข้อมูล
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Send;
