import { Carousel } from "@material-tailwind/react";
import slide1 from '../../../assets/project3.1.png'
import slide2 from '../../../assets/project3.2.png'
import slide3 from '../../../assets/project3.3.png'
import slide4 from '../../../assets/project3.4.png'
import slide5 from '../../../assets/project3.5.png'

export default function Slider1() {
    return (
        <Carousel className="rounded-xl">
            <img
                src={slide1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide2}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide3}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide4}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide5}
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}  