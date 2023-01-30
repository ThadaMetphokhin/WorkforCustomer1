
import { useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Maps from "../Component/Mapsrooms";
import Menu from "../Component/MenuListRoom";
import Senddata from "../Component/Senddata"
const Informationroom =  () => {
  
  const [data,setData] =  useState([])
  const [searchParams] =  useSearchParams();
  const numroomid =  searchParams.get("room");
  const id =  numroomid
  //ยิงขอข้อมุลจาก API BackEnd
  useEffect(() => {
     fetch("http://localhost:4000/DataRoom?idroom="+id)
    .then(res=>res.json())
    .then(getdata=>{ setData(getdata[0])})
  }, [id])
  return (
    <>
      <Navbar />
      <br></br>
      <Container>
        <div>หน้ารายละเอียด</div>
        <br></br>
        <Card>
          <Card.Title style={{ padding: "15px" }}>
              <Form.Label className="float-start">{data.Name}</Form.Label>
              <Form className="float-end">
                <Senddata roomid={id} roomname={data.Name}/>
              </Form>
              <br></br>
              <br></br>
              <Tabs
                defaultActiveKey="Image"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Image" title="รูปภาพ">
                  <Menu  img1={data.Img} nameroom={data.Name}/>
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
