import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Maps from "../Component/Mapsrooms";
import Menu from "../Component/MenuListRoom";
import Senddata from "../Component/Senddata"

const Informationroom = () => {
  const [searchParams] = useSearchParams();
  //atoa ถอดรหัสแบบ Base64
  const id = atob(searchParams.get("room")).replace('"', "").replace('"', " ");
  //ยิงขอข้อมุลจาก API BackEnd

  
  return (
    <>
      <Navbar />
      <br></br>
      <Container>
        <div>หน้ารายละเอียด {id}</div>
        <br></br>
        <Card>
          <Card.Title style={{ padding: "15px" }}>
              <Form.Label className="float-start">ชื่อห้อง</Form.Label>
              <Form className="float-end">
                <Senddata roomid={id}/>
              </Form>
              <br></br>
              <br></br>
              <Form.Label className="fs-6 text">ที่อยู่</Form.Label>
              <Tabs
                defaultActiveKey="Image"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Image" title="รูปภาพ">
                  <Menu />
                </Tab>
                <Tab eventKey="Maps" title="แผนที่">
                  <Maps />
                </Tab>
              </Tabs>
          </Card.Title>
          <Container>
            <div className="fs-4">รายละเอียด</div>
            <Row>
              <Col>
                <Form.Label className="text-wrap">
                  ข้อมูลเพิ่มเติม สบายเพลส (www.sabaiplace.com) ห้องเช่า
                  สบายเพลส เป็น ห้องพักตั้งอยู่ที่ ซอย ฉลองกรุง 31/1
                  หน้านิคมอุตสาหกรรมลาดกระบัง ใกล้พระจอมเกล้าลาดกระบัง และ
                  สนามบิน สุวรรณภูมิ เป็นที่พักในอุดมคติสำหรับ คนทำงานที่
                  นิคมลาดกระบัง นักเรียน นักศึกษา เทคโน พระจอมเกล้าลาดกระบัง
                  คนทำงานที่สนามบิน สุวรรณภูมิ ติดต่อจองห้องได้ที่เว็ป
                </Form.Label>
              </Col>
              <Col>
                <Card
                  className="h-auto"
                  style={{ padding: "20px", backgroundColor: "#F8F6F1" }}
                >
                    <Row>
                      <Col>รายเดือน:</Col>
                      <Col>4,500 บาท/เดือน</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>รายวัน:</Col>
                      <Col>600 บาท/วัน</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>เงินมัดจำ:</Col>
                      <Col>1 เดือน</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>จ่ายล่วงหน้า:</Col>
                      <Col>1 เดือน</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>ค่าไฟ:</Col>
                      <Col>8 บาท/ยูนิต</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>ค่าน้ำ:</Col>
                      <Col>15 บาท/ยูนิต ขั้นต่ำ 100 บาท/เดือน</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>ค่าบริการอื่นๆ:</Col>
                      <Col>โทรสอบถาม</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>ค่าโทรศัพท์:</Col>
                      <Col>ไม่มีโทรศัพท์</Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>อินเทอร์เน็ต:</Col>
                      <Col>โทรสอบถาม</Col>
                    </Row>
                </Card>
              </Col>
            </Row>
          </Container>
          <br></br>
        </Card>
      </Container>
      <br></br>
    </>
  );
};
export default Informationroom;
