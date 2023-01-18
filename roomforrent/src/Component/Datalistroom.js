import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import React from "react";
const DataRoom = [
  {
    id: "1",
    name: "รุ่งอรุณแมนชั่น",
    img1: "https://bcdn.renthub.in.th/listing_picture/201708/20170801/iv1R28F5J8xCUc1WMwvT.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201708/20170801/RUwZZmebNWvwkfDnbs88.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "35 ตรม.",
      price: "11,000 บาท",
      Local: "ซ.นภาศัพท์ 2 ถ.สุขุมวิท 36 คลองตัน คลองเตย กรุงเทพมหานคร",
    },
  },
  {
    id: "2",
    name: "เคเจเอส แมนชั่น ( K.J.S. Mansion)",
    img1: "https://bcdn.renthub.in.th/listing_picture/201710/20171003/8iBwaRdEdYC17FN7PY19.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201710/20171003/hoF6ufCWkRDwdCQBXikZ.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "25 ตรม.",
      price: "5,500 บาท",
      Local: "ซ.หมอเหล็ง ถ.ราชปรารภ มักกะสัน ราชเทวี กรุงเทพมหานคร",
    },
  },
  {
    id: "3",
    name: "สบายเพลส",
    img1: "https://bcdn.renthub.in.th/listing_picture/201904/20190424/wCKgWdHBqm1NY9uuKgzw.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201904/20190424/s8XzqesTcXRJ2kBuqaa4.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "24 ตรม.",
      price: "4,500 บาท",
      Local: "ถ.ฉลองกรุง ลำปลาทิว ลาดกระบัง กรุงเทพมหานคร",
    },
  },
  {
    id: "4",
    name: "S.A. Apartment Ratchada (เอส เอ อพาร์ทเมนท์ รัชดา)",
    img1: "https://bcdn.renthub.in.th/listing_picture/201409/20140903/GJn5ivEqQvm6ABm3fMNV.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201409/20140903/DfYbhYdgVmeh729ikNux.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "27 ตรม.",
      price: "7,000 บาท",
      Local:
        "ซ.สุทธิพร (รัชดา3 ข้างสถานฑูตจีน) ถ.ประชาสงเคราะห์ ดินแดง กรุงเทพมหานคร",
    },
  },
  {
    id: "5",
    name: "หอพัก บาวาน่า สุรวงศ์-สีลม",
    img1: "https://bcdn.renthub.in.th/listing_picture/201706/20170630/Va41e4QxhKXHLtrfQK6s.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201706/20170630/zKiGpJtpGfWxSHZuBvWy.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "30 ตรม.",
      price: "9,000 บาท",
      Local: "ซ.ธนิยะ2 ถ.สุรวงศ์ สุริยวงศ์ บางรัก กรุงเทพมหานคร",
    },
  },
  {
    id: "6",
    name: "วอร่าวิลล์ อพาร์ทเม้นท์ อุดมสุข (Wora ville Apartment Udomsuk)",
    img1: "https://bcdn.renthub.in.th/listing_picture/201409/20140925/qu7EpAEoGF1zGqbAs1HR.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201409/20140925/o7qyjALP9roqeepuS53g.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "25 ตรม.",
      price: "6,500 บาท",
      Local: "ซ.อุดมสุข 37 ถ.สุขุมวิท 103 บางจาก พระโขนง กรุงเทพมหานคร",
    },
  },
  {
    id: "7",
    name: "The Enrich Sathorn",
    img1: "https://bcdn.renthub.in.th/listing_picture/201402/20140213/VrgRK59FMrJXby74EgBB.jpg?class=doptimized",
    img2: "https://bcdn.renthub.in.th/listing_picture/201402/20140213/RAcY9LJWTkyhHMaTsEBn.jpg?class=doptimized",
    infor: {
      name: "1 Bedroom",
      typeroom: "1 ห้องนอน",
      size: "28 ตรม.",
      price: "7,500 บาท",
      Local:
        "ซ.กรุงธนบุรี 6 (เชิงสะพานสาทร) ถ.กรุงธนบุรี บางลำภูล่าง คลองสาน กรุงเทพมหานคร",
    },
  },
];

const Toinformation = (data) => {
  //btoa เข้ารหัสแบบ Base64
  const url = "/Information?room=" + btoa(data);
  window.location.href = url;
};
function Data(props) {
  const DataRoom1 = props.DataRoom;
  const listItem = DataRoom1.map((data,index) => (
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
          key={data.id + index}
          onClick={() => Toinformation(JSON.stringify(data.id))}
        >
          <Card.Img variant="top" key={data.img1 + index} src={data.img1} />
          <Card.Body>
            <Card.Title
              className="text-center"
              style={{ backgroundColor: "#F85454", color: "white" }}
              key={data.infor.price + index}
            >
              {data.infor.price}
            </Card.Title>
            <div>
              <div
                className="fw-bold text-wrap fs-6"
                style={{ color: "#F8C554" }}
                key={data.name + index}
              >
                {data.name}
              </div>

              <div key={data.infor.Local + index}>{data.infor.Local}</div>
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

const DataListItemRoom = () => {
  //Set State default is false
  return (
    <>
      <Data DataRoom={DataRoom} />
    </>
  );
};

export default DataListItemRoom;
