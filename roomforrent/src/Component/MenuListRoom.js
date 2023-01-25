import Carousel from "react-bootstrap/Carousel";

 const  text =  (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img1}
            alt={props.nameroom}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default text;
