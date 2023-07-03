import {
    Button,
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form)
        emailjs.sendForm('service_edfg58h', 'template_u7uquon', form.current, 'eg-tdsef689HLWHk9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form onSubmit={sendEmail} ref={form} className="mt-8 mb-2">
            <div className="mb- gap-6 grid grid-cols-2">
                <div>
                    <label htmlFor="name" className="uppercase block mb-3 font-light text-md text-[#92afbd]">Your Name</label>
                    <input type="text" name="from_name" className="shadow-inner shadow-[#25282cee] border border-[#191b1e] text-[#92afbd] font-light text-md p-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full bg-[#191b1e] shadow-sm-light" required />
                </div>
                <div>
                    <label htmlFor="number" className="uppercase block mb-3 font-light text-md text-[#92afbd]">Phone Number</label>
                    <input type="number" name="from_phone" className="shadow-inner shadow-[#25282cee] border border-[#191b1e] text-[#92afbd] font-light text-md p-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full bg-[#191b1e] shadow-sm-light" required />
                </div>
                <div className="col-span-2">
                    <label htmlFor="email" className="uppercase block mb-3 font-light text-md text-[#92afbd]">Email</label>
                    <input type="email" name="from_email" className="shadow-inner shadow-[#25282cee] border border-[#191b1e] text-[#92afbd] font-light text-md p-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full bg-[#191b1e] shadow-sm-light" required />
                </div>
                <div className="col-span-2">
                    <label htmlFor="subject" className="uppercase block mb-3 font-light text-md text-[#92afbd]">Subject</label>
                    <input type="text" name="subject" className="shadow-inner shadow-[#25282cee] border border-[#191b1e] text-[#92afbd] font-light text-md p-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full bg-[#191b1e] shadow-sm-light" required />
                </div>
                <div className="col-span-2">
                    <label htmlFor="massage" className="uppercase block mb-3 font-light text-md text-[#92afbd]">Message</label>
                    <textarea type="text" name="message" rows="8" className="shadow-inner shadow-[#25282cee] border border-[#191b1e] text-[#92afbd] font-light text-md p-5 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full bg-[#191b1e] shadow-sm-light" required />
                </div>
            </div>
            <Button type="submit" className="mt-6 py-5 bg-[#1e1f22] shadow-[#1f2125] text-base font-thin text-[#cc0643]" fullWidth>
                Send
            </Button>
        </form>
    );
}