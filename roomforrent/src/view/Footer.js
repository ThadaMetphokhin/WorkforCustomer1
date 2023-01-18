import Container from "react-bootstrap/esm/Container";
const SetFooter = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "green",
          paddingBottom: "15px",
          marginTop: "auto",
        }}
      >
        <Container fluid className="text-center">
          <div className="fw-bold" style={{ color: "white" }}>
            Copy. Mr.ChangThai
          </div>
        </Container>
      </Container>
    </>
  );
};
export default SetFooter;
