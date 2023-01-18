import Iframe from 'react-iframe'
import Ratio from 'react-bootstrap/Ratio';
const Maps = () => {
  return (
    <>
     <Ratio aspectRatio="16x9">
      <Iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121205.07593098447!2d99.33083387972096!3d18.317213378337048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96b2a25df8803%3A0xfeb8f8754e6b580a!2z4LmB4Liq4LiZ4Liq4Lia4Liy4LiiIOC5gOC4nuC4peC4qg!5e0!3m2!1sth!2sth!4v1673426648958!5m2!1sth!2sth"
        
        style={{border:"0"}}
        allowFullScreen={"auto"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
      </Ratio>
    </>
  );
};

export default Maps;
