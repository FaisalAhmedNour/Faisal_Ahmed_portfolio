import { Carousel } from "@material-tailwind/react";
import slide1 from '../../../assets/project1.1.png'
import slide2 from '../../../assets/project1.2.png'
import slide3 from '../../../assets/project1.3.png'
import slide4 from '../../../assets/project1.4.png'
import slide5 from '../../../assets/project1.5.png'
import slide6 from '../../../assets/project1.6.png'
import slide7 from '../../../assets/project1.7.png'
import slide8 from '../../../assets/project1.8.png'
import slide9 from '../../../assets/project1.9.png'
import slide10 from '../../../assets/project1.10.png'

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
            <img
                src={slide6}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide7}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide8}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide9}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide10}
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}