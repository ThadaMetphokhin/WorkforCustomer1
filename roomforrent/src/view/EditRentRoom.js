import Container from "react-bootstrap/esm/Container";
import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

//comonent day
import Dayfetch from "../Component/Dayfetch"
import Month from "../Component/Month"

function Tableset(props) {
  const [show, setShow] = useState(false);

  //เก็บชื่อ,นามสกุล,email,เบอร์โทร,ยืมของ
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState([]);
  const [status, setStatus] = useState(false);
  const year = new Date();

  const updatedata = (e, index) => {
    
    const totalday =
      document.getElementById("day11").value +
      "/" +
      document.getElementById("month11").value +
      "/" +
      document.getElementById("year11").value;

    const fill = item.filter((e) => e !== "" && e !== null).toString();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      const data1 = { index, name, lname, email, phone, fill,totalday  };
      fetch("http://localhost:4000/Userupdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data1),
      });
    }
  };

  const deletedata = (index) => {
    console.log("delete" + index);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form validate
  const [validated, setValidated] = useState(false);

  const index = props.index;
  const data = props.value;

  const setd = data.Day
  return (
    <>
      <td key={data.ID + index}>{data.ID}</td>
      <td key={data.Roomname + index}>{data.Roomname}</td>
      <td key={data.Name + index}>
        {data.Name}-{data.LastName}
      </td>
      <td key={data.Phone + index}>{data.Phone}</td>
      <td key={data.BorrowItems + index}>{data.BorrowItems}</td>
      <td key={data.Day + index}>{data.Day}</td>
      <td>
        <Button
          variant={"warning"}
          onClick={handleShow}
          key={data.Name+index}
        >
          แก้ไข
        </Button>{" "}
        <Button
          variant={"danger"}
          key={data.ID+index}
          onClick={(e) => deletedata(data.ID)}
        >
          ลบ
        </Button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>จองห้องประชุม {props.roomid}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <br></br>

            <br></br>
            <Row className=" d-flex align-content-center">
              <Form.Group required className="col-auto mx-auto">
                <Form.Label>เลือกวันที่</Form.Label>
                <Row>
                  <Col className="col-auto">
                    <Form.Select id="day11">
                      <Dayfetch  dayset={setd} />
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select id="month11">
                      <Month/>
                    </Form.Select>
                  </Col>
                  <Col className="col-3">
                    <Form.Control
                      id="year11"
                      readOnly
                      type="text"
                      defaultValue={year.getFullYear()}
                    ></Form.Control>
                  </Col>
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
                <div>
                  <div className="d-flex justify-content-around">
                    {[
                      "เครื่องปริ้น",
                      "โปรเจคเตอร์",
                      "ไมค์",
                      "ลำโพง",
                      "ขาตั้งไมค์",
                    ].map((type, index) => (
                      <div key={`${type + index}`}>
                        <Form.Group as={Col}>
                          <Form.Check
                            type={"checkbox"}
                            name={type}
                            id={`default-${type + index}`}
                            label={`${type}`}
                            onChange={(e) => {
                              if (e.target.checked == false) {
                                item[index] = null;
                                return;
                              }
                              item[index] = type;
                            }}
                          />
                        </Form.Group>
                      </div>
                    ))}
                  </div>
                </div>
              </Form.Group>
            </Row>

            <br></br>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ปิด
              </Button>
              <Button variant="primary" type="button" key={data.ID+index} onClick={(e)=>updatedata(e,data.ID)}>
                ส่งข้อมูล
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function EditRentRoom() {
  const [cookies, setCookie] = useCookies(["name"]);
  const [data, setData] = useState([]);
  const name = cookies;
  useEffect(() => {
    fetch("http://localhost:4000/UserEditRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((getdata) => setData(getdata));
  }, []);
  const TableQuery = data.map((value, index) => (
    <Tableset key={value + index} value={value} index={index} />
  ));
  return (
    <>
      <Navbar />
      <Container>
        <br></br>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>ลำดับที่</th>
              <th>ชื่อห้องที่จอง</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์</th>
              <th>การยืมของ</th>
              <th>วันที่จอง</th>
              <th>แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            <tr>{TableQuery}</tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default EditRentRoom;
