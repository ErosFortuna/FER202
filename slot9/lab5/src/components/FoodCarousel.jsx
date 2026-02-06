import Carousel from 'react-bootstrap/Carousel';
import { bannerImages } from '../data/bannerImages';

function MyCarousel({ bannerImages }) {
    return (
        <Carousel fade={true} interval={3000} pause={'hover'}>
            {bannerImages.map((item, index) => (
                <Carousel.Item key={index}>

                    <img
                        className="d-block w-100"
                        src={item.src}
                        alt={'Slide ' + (index + 1)}
                        style={{ height: "400px", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;
