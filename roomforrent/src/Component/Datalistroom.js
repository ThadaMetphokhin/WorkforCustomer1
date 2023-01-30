import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import React, { useEffect, useState } from "react";

const Toinformation = (data) => {
  //
  const url = "/Information?room=" + data;
  window.location.href = url;
};
function Data() {
  const [dataquery, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/DataRoom")
    .then(res=>res.json())
    .then(data=>{setdata(data)})  
    .catch((er)=>{
      console.log('Error ไม่สามารถดึงข้อมุลได้ '+er)
    })
  }, [])
  const DataRoom1 =  dataquery;
  const listItem =  DataRoom1.map((dataquery, index) => (
    <Col
      md={4}
      className="d-flex justify-content-around "
      style={{ paddingTop: "15px" }}
      key={index}
    >
      <Card
        className="h-100"
        border="dark"
        style={{
          cursor: "pointer",
        }}
        key={dataquery.ID + index}
        onClick={() => Toinformation(JSON.stringify(dataquery.ID))}
      >
        <Card.Img variant="top" key={dataquery.Img + index} src={dataquery.Img} />
        <Card.Title
            className="text-center"
            style={{ backgroundColor: "#F85454", color: "white" }}
            key={dataquery.Price + index}
          >
            {dataquery.Price+" บาท"}
          </Card.Title>
        <Card.Body>
          
            <div
              className="fw-bold text-wrap fs-6"
              style={{ color: "#F8C554" }}
              key={dataquery.Name+index}
            >
              {dataquery.Name}
            </div>
            <div>
              การจองห้อง:
              <br></br>
              การยืมอุปกรณ์:
            </div>
            
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Container>
        <Card style={{ padding: "40px" }}>
          <Row>{listItem} </Row>
        </Card>
      </Container>
    </div>
  );
}


export default Data;
