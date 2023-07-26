import SectionTItle from "../SectionTitle/SectionTItle";
import img from '../../assets/contact1.png';
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <a id="contact">
            <div>
                <SectionTItle
                    title='Contact With Me'
                ></SectionTItle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 my-10">
                    <div className="p-8 bg-[#212428] rounded-lg text-[#e4e6ea] mb-10 md:mb-0" data-aos="fade-right">
                        <img className="rounded-lg" src={img} alt="" />
                        <h2 className="text-3xl font-bold mt-8">Faisal Ahmed</h2>
                        <h4 className="text-xl text-[#92afbd] my-5">Web developer</h4>
                        <p className="text-xl text-[#92afbd] mb-4">I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p className="text-xl text-[#92afbd] mb-2">Phone: <span className="text-white">+8801749822723</span></p>
                        <p className="text-xl text-[#92afbd]">Email: <span className="text-white">faisalahmed.mec@gamil.com</span></p>
                        <p className="text-xl text-[#92afbd] my-7">FIND WITH ME</p>
                        <div className="flex gap-10">
                            <Link to='https://github.com/FaisalAhmedNour'>
                                <div className="w-[60px] py-2 shadow-lg bg-[#212428] rounded-md text-center cursor-pointer">
                                    <i className="fa-brands fa-github text-2xl mt-3"></i>
                                </div>
                            </Link>
                            <Link to='https://www.linkedin.com/in/faisal-ahmed-7a753a247/'>
                                <div className="w-[60px] py-2 shadow-lg bg-[#212428] rounded-md text-center cursor-pointer">
                                    <i className="fa-brands fa-linkedin-in text-2xl mt-3"></i>
                                </div>
                            </Link>
                            <Link to='https://web.facebook.com/FaisalAhmed6191/'>
                                <div className="w-[60px] py-2 shadow-lg bg-[#212428] rounded-md text-center cursor-pointer">
                                    <i className="fa-brands fa-facebook-f text-2xl mt-3"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 px-8 pb-5 bg-[#212428] rounded-lg" data-aos="fade-left">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Contact;