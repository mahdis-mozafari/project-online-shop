// import mobile from '../assets/mobile.jpg'
// import laptop from '../assets/laptop.jpg'
// import camera from '../assets/camera.jpg'
// import denim from '../assets/denim.jpg'
// import shoes from '../assets/shoes.jpg'
// import airpad from '../assets/airpad.jpg'
// import sunglasses from '../assets/sunglasses.jpg'
// import hat from '../assets/hat.jpg'

import { Carousel , Image} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getData } from '../../utils/fetcherApi'
export function SliderImage(){

    // const images =[mobile,laptop,camera,denim,shoes,airpad,sunglasses,hat]

    const [images, setImages] = useState(null);
    useEffect(() => {
      getData("https://picsum.photos/v2/list?&limit=5").then((data) => {
        setImages(data);
      });
    }, []);
    return(
        <Carousel>
        {images?.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image src={item.download_url} fluid style={{ maxHeight: "90vh", width: "100vw" }} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    )
}
