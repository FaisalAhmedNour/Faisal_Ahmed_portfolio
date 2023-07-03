import { Button } from "@material-tailwind/react";
import SectionTItle from "../SectionTitle/SectionTItle";
import { useState } from "react";
import Slider1 from "../Sliders/Slider1/Slider1";
import Slider2 from "../Sliders/Slider2/Slider2";
import Slider3 from "../Sliders/Slider3/Slider3";
import { Link } from "react-router-dom";

const Projects = () => {

    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    return (
        <div className="my-20 ">
            <SectionTItle
                title='My Projects'
            ></SectionTItle>
            <p className="text-center text-[#adb9c9] my-1">Empowered by my web development skills, I build immersive online worlds that captivate and engage.</p>
            <div className="mt-10">
                <div
                    onMouseOver={() => setIsHover1(true)}
                    onMouseOut={() => setIsHover1(false)}
                    className={`flex flex-col bg-[#212428] text-[#adb9c9] rounded-lg`}
                >
                    <div className="grid grid-cols-2">
                        <div className="p-5">
                            <h3 className="text-4xl mt-16 mb-5">CampSportopia</h3>
                            <p className="mb-5 mt-1">I built a full stack Summer Sports Camp site. There students can enroll different courses and Instructors can bring their courses to the students to enroll. For ensuring the proper standards of quality, I implemented a course approval process. By allowing admins to review and curate course submissions, maintaining a curated selection of courses for students</p>
                            <div>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">React</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">React Router</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Tailwind</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Material Tailwind</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Vite</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">MongoDB</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Firebase</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Express</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Axios</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Cors</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">SweetAlert2</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Dotenv</Button>
                            </div>
                            <div className="mt-10">
                                <Link to='https://github.com/FaisalAhmedNour/CampSportopia' target="block"><Button className="rounded-md mr-3 bg-[#cc0643]">Clint side</Button></Link>
                                <Link to='https://github.com/FaisalAhmedNour/CampSportopia_server' target="block"><Button className="rounded-md mr-3 bg-[#cc0643]">server Site</Button></Link>
                                
                            </div>
                        </div>
                        <div className="p-5">
                            <Slider1></Slider1>
                        </div>
                    </div>
                    {
                        isHover1 && <Link to='https://campsportopia.web.app/' target="block">
                            <Button size="sm" variant="outlined" className="flex items-center gap-3 text-[#cc0643] border-[#cc0643] mb-5 mx-auto">
                                Live Link
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </Button>
                            </Link>
                    }
                </div>
                <div
                    onMouseOver={() => setIsHover2(true)}
                    onMouseOut={() => setIsHover2(false)}
                    className={`flex flex-col bg-[#212428] text-[#adb9c9] rounded-lg my-10`}
                >
                    <div className="grid grid-cols-2">
                        <div className="p-5">
                            <h3 className="text-4xl mt-16 mb-5">Dish World</h3>
                            <p className="mb-5 mt-1">????? I built a full stack Summer Sports Camp site. There students can enroll different courses and Instructors can bring their courses to the students to enroll. For ensuring the proper standards of quality, I implemented a course approval process. By allowing admins to review and curate course submissions, maintaining a curated selection of courses for students</p>
                            <div>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">React</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">React Router</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Tailwind</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Vite</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">MongoDB</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Firebase</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Express</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Cors</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">SweetAlert2</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75] mb-3">Dotenv</Button>
                            </div>
                            <div className="mt-10">
                                <Link to='https://github.com/FaisalAhmedNour/Dish_World_client' target="block"><Button className="rounded-md mr-3 bg-[#cc0643]">Clint side</Button></Link>
                                <Link to='https://github.com/FaisalAhmedNour/Dish_Client_server' target="block"><Button className="rounded-md mr-3 bg-[#cc0643]">server Site</Button></Link>
                                
                            </div>
                        </div>
                        <div className="p-5">
                            <Slider2></Slider2>
                        </div>
                    </div>
                    {
                        isHover2 && <Link to='https://dish-world.web.app/' target="block">
                            <Button size="sm" variant="outlined" className="flex items-center gap-3 text-[#cc0643] border-[#cc0643] mb-5 mx-auto">
                                Live Link
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </Button>
                        </Link>
                    }
                </div>
                <div
                    onMouseOver={() => setIsHover3(true)}
                    onMouseOut={() => setIsHover3(false)}
                    className={`flex flex-col bg-[#212428] text-[#adb9c9] rounded-lg`}
                >
                    <div className="grid grid-cols-2">
                        <div className="p-5">
                            <h3 className="text-4xl mt-16 mb-5">Legal Solution</h3>
                            <p className="mb-5 mt-1">????? I built a full stack Summer Sports Camp site. There students can enroll different courses and Instructors can bring their courses to the students to enroll. For ensuring the proper standards of quality, I implemented a course approval process. By allowing admins to review and curate course submissions, maintaining a curated selection of courses for students</p>
                            <div>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75]">HTML</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75]">CSS</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75]">Bootstrap</Button>
                                <Button size="sm" className="rounded-full mr-3 bg-[#2c92eb75]">Netlify</Button>
                            </div>
                            <div className="mt-10">
                                <Link to='https://github.com/FaisalAhmedNour/legal-solution' target="block"><Button className="rounded-md mr-3 bg-[#cc0643]">Source Code</Button></Link>
                            </div>
                        </div>
                        <div className="p-5">
                            <Slider3></Slider3>
                        </div>
                    </div>
                    {
                        isHover3 && <Link to='https://comforting-truffle-59d75f.netlify.app/' target="block">
                            <Button size="sm" variant="outlined" className="flex items-center gap-3 text-[#cc0643] border-[#cc0643] mb-5 mx-auto">
                                Live Link
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;