import SectionTItle from "../SectionTitle/SectionTItle";
import reactIcon from '../../assets/react.svg';
import htmlIcon from "../../assets/html-5.png"
import cssIcon from '../../assets/css-3.png'
import jsIcon from '../../assets/js.png'
import BootstrapIcon from '../../assets/bootstrap.png'
import tailwindIcon from '../../assets/icons8-tailwindcss-48.png'
import gitIcon from '../../assets/icons8-git-48.png'
import githubIcon from '../../assets/github.png'
import expressIcon from '../../assets/icons8-express-js-48.png'
import firebaseIcon from '../../assets/icons8-firebase-48.png'
import mongodbIcon from '../../assets/icons8-mongodb-48.png'
import figmaIcon from '../../assets/icons8-figma-48.png'
import netlifyIcon from '../../assets/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-24.png'
import vercelIcon from '../../assets/vercel.svg'
import cIcon from '../../assets/letter-c.png'
import cplusplusIcon from '../../assets/c-.png'
import jwtIcon from '../../assets/icons8-jwt-48.png'
import javaIcon from '../../assets/java.png'
import nodejsIcon from '../../assets/nodejs.png'
import vscodeIcon from '../../assets/icons8-visual-studio-48.png'
import viteIcon from '../../assets/vite-svgrepo-com.svg'
import swiperjsIcon from '../../assets/swiperjs.png'

const Skills = () => {
    return (
        <div className="mt-20">
            <SectionTItle
                title='My Skills'
            ></SectionTItle>
            {/* <hr className="border-black my-4" /> */}
            <p className="text-center text-[#adb9c9] my-1">I possess a transformative range of skills, pushing boundaries and redefining what&apos;s possible.</p>
            <div className="grid grid-cols-2 gap-10 text-[#adb9c9] mt-10">
                <div className="bg-[#212428] p-8 rounded-lg" data-aos="fade-right">
                    <h4 className="text-lg ml-4 mb-5 uppercase">Primary Skills on</h4>
                    <div className="grid grid-cols-4 gap-4 mb-10">
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={htmlIcon} alt="" />
                            <p className="text-center mt-2 text-sm">HTML</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={cssIcon} alt="" />
                            <p className="text-center mt-2 text-sm">CSS</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={jsIcon} alt="" />
                            <p className="text-center mt-2 text-sm">JS</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={tailwindIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Tailwind</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={reactIcon} alt="" />
                            <p className="text-center mt-2 text-sm">React</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={viteIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Vite</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={firebaseIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Firebase</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={mongodbIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Mongodb</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={cplusplusIcon} alt="" />
                            <p className="text-center mt-2 text-sm">C++</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={expressIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Expressjs</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={vscodeIcon} alt="" />
                            <p className="text-center mt-2 text-sm">VS Code</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={githubIcon} alt="" />
                            <p className="text-center mt-2 text-sm">GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212428] p-8 rounded-lg" data-aos="fade-left">
                    <h4 className="text-lg ml-4 mb-5 uppercase">Secondary Skills on</h4>
                    <div className="grid grid-cols-4 gap-4 mb-10">
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={BootstrapIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Bootstrap</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={cIcon} alt="" />
                            <p className="text-center mt-2 text-sm">C</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={javaIcon} alt="" />
                            <p className="text-center mt-2 text-sm">JAVA</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={nodejsIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Node js</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={swiperjsIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Swiper js</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={jwtIcon} alt="" />
                            <p className="text-center mt-2 text-sm">JWT</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={gitIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Git</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={figmaIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Figma</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={netlifyIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Netlify</p>
                        </div>
                        <div className="w-[100px] py-2 shadow-lg bg-[#212428] rounded-md mx-auto" data-aos="zoom-in">
                            <img className="w-[45px] mx-auto" src={vercelIcon} alt="" />
                            <p className="text-center mt-2 text-sm">Vercel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;