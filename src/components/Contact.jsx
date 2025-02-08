import { CONTACT } from "../../constants/const";

const Contact = () => {
    return(
        <div className="border-b border-neutral-800 pb-4">
            <h2 className="my-10 text-center text-4xl">
            Get in Touch
            </h2>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center text-center tracking-tighter">
                    <p className="text-lg text-neutral-400 my-4">
                        Email: {CONTACT.email}
                    </p>
                    <p className="text-lg text-neutral-400">
                        Phone: {CONTACT.phone}
                    </p>
                    <p className="text-lg text-neutral-400">
                        Address: {CONTACT.address}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;