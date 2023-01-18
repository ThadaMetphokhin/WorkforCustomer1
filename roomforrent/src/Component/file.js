<Container>
        <Card style={{ padding: "40px" }}>
          <Row>
            {DataRoom.map((data, key) => {
              return (
                <>
                  <Col
                    md={4}
                    className="d-flex justify-content-around "
                    style={{ paddingTop: "15px" }}
                  >
                    <Card
                      className="h-100"
                      border="dark"
                      style={{
                        cursor: "pointer",
                      }}
                      key={data}
                      onClick={() => Toinformation(JSON.stringify("data.id"))}
                    >
                      <Card.Img variant="top" key={data} src={data.img1} />
                      <Card.Body>
                        <Card.Title
                          className="text-center"
                          style={{ backgroundColor: "#F85454", color: "white" }}
                          key={data}
                        >
                          {data.infor.price}
                        </Card.Title>
                        <div>
                          <div
                            className="fw-bold text-wrap fs-6"
                            style={{ color: "#F8C554" }}
                            key={data}
                          >
                            {data.name}
                          </div>

                          <div key={data}>{data.infor.Local}</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Card>
      </Container>