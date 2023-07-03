import { Button } from "@material-tailwind/react";
import image from '../../assets/image.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="text-[#c4cfde] grid grid-cols-1 md:grid-cols-2 mt-16">
            <div className="grid grid-cols-1 gap-5 py-10 pl-20 order-2 md:order-1">
                <h1 className="text-5xl font-[600]" data-aos="fade-up">Hi, I&#39;m Faisal Ahmed</h1>
                <h2 className="text-3xl" data-aos="fade-up" data-aos-delay="500">I am a <span className="text-[#e20146]">Web developer</span></h2>
                <div className="flex gap-10" data-aos="fade-up" data-aos-delay="1000">
                    <Link to='https://github.com/FaisalAhmedNour'>
                        <div className="w-[60px] py-2 shadow-lg rounded-md text-center cursor-pointer">
                            <i className="fa-brands fa-github text-2xl mt-3"></i>
                        </div>
                    </Link>
                    <Link to='https://www.linkedin.com/in/faisal-ahmed-7a753a247/'>
                        <div className="w-[60px] py-2 shadow-lg rounded-md text-center cursor-pointer">
                            <i className="fa-brands fa-linkedin-in text-2xl mt-3"></i>
                        </div>
                    </Link>
                    <Link to='https://web.facebook.com/FaisalAhmed6191/'>
                        <div className="w-[60px] py-2 shadow-lg rounded-md text-center cursor-pointer">
                            <i className="fa-brands fa-facebook-f text-2xl mt-3"></i>
                        </div>
                    </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500">
                    <Link to='https://drive.google.com/file/d/1VtzqaGiE5XmGijwfoGNNW9IbSFaILdkO/view' target="blank">
                        <Button
                            size="lg"
                            className="flex gap-1 items-center bg-[#292c30] shadow-lg shadow-[#0e0d0d] text-[#e20146] hover:shadow-[#e20144e0] mt-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span className="text-base">Download Resume</span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
                <img 
                    className="mx-auto w-[50%] rounded-full border-8 border-[#e20146]" 
                src={image} alt="" 
                />
            </div>
        </div>
    );
};

export default Banner;