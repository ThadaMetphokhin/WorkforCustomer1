import Carousel from 'react-bootstrap/Carousel';
const text =()=>{
    return(<>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://bcdn.renthub.in.th/listing_picture/201904/20190424/ReMjuEvHp5EWpVVnt9w9.jpg?class=doptimized"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://bcdn.renthub.in.th/listing_picture/201904/20190424/wCKgWdHBqm1NY9uuKgzw.jpg?class=doptimized"
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://bcdn.renthub.in.th/listing_picture/201904/20190424/ReMjuEvHp5EWpVVnt9w9.jpg?class=doptimized"
            alt="Third slide"
            />

        </Carousel.Item>
        </Carousel>
    </>)
}
export default text;