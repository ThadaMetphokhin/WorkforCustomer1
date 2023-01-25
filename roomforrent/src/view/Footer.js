import Container from "react-bootstrap/esm/Container";
const SetFooter = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          marginTop: "auto",
          padding: "8px",
        }}
      >
        <Container fluid className="text-center">
          <div className="fw-bold" style={{ color: "white" }}>
            Copy. Mr.Test
          </div>
        </Container>
      </footer>
    </>
  );
};
export default SetFooter;
