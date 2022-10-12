import Carousel from 'react-bootstrap/Carousel';


const Inicio = () =>{
    return(
        <>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="superman.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackAdam.jpeg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="joker.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="spiderman.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="deadpool1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
        
        </>

        

    )
}
export default Inicio;