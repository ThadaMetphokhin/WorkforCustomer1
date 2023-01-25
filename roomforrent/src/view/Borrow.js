import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import Navbar from "./Navbar";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";


import SetFooter from "./Footer";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "การยืมของ",
    },
    layout: {
      padding: 20,
    },
  },
};
const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'ห้องที่ยืมมากที่สุด',
    },
  },
};
const Borrowitem = [
  { id: 1, name: "โปรเจคเตอร์", value: "2" },
  { id: 2, name: "เครื่องปริ้น", value: "5" },
  { id: 3, name: "ไมค์", value: "3" },
  { id: 4, name: "ลำโพง", value: "1" },
];
const Borrowitemdb = [
  { id: 1, name: "ห้องที่ 1", value: "2" },
  { id: 2, name: "ห้องที่ 2", value: "5" },
  { id: 3, name: "ห้องที่ 3", value: "3" },
  { id: 4, name: "ห้องที่ 4", value: "1" },
];
const data = {
  labels: Borrowitem.map((value) => value.name),
  datasets: [
    {
      label: "จำนวนที่ถูกยืม",
      data: Borrowitem.map((value) => value.value),
      backgroundColor: [
        "rgba(252, 176, 159)",
        "rgba(118, 248, 152)",
        "rgba(244, 245, 133)",
        "rgba(155, 171, 249)",
      ],
      borderColor: [
        "rgba(252, 176, 159)",
        "rgba(118, 248, 152)",
        "rgba(244, 245, 133)",
        "rgba(155, 171, 249)",
      ],
    },
  ],
};
const data1 = {
  labels: Borrowitemdb.map((value) => value.name),
  datasets: [
    {
      label: "ห้อง",
      data: Borrowitemdb.map((value) => value.value),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Borrow = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <br></br>
        <div>หน้ายืมของ</div>
        <Card style={{ padding: "15px" }}>
          <div className="row d-flex justify-content-center">
            <div className="col-4" style={{ right: "35px" }}>
              <Doughnut options={options} data={data} />
            </div>
            <div className="col-7">
              <Bar options={options1} data={data1} />
            </div>
          </div>
          <br></br>

          <br></br>
          <Form.Select aria-label="Default select example">
            <option>เลือกอุปกรณ์ที่ต้องการยืม</option>
            <option value="1">โปรเจคเตอร์</option>
            <option value="2">เครื่องเสียง</option>
            <option value="3">เครื่องพิมพ์</option>
          </Form.Select>
        </Card>
      </Container>
      <SetFooter/>
    </>
  );
};
export default Borrow;
