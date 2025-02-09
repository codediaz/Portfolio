import { CONTACT } from "../../constants/const";
import { motion } from "framer-motion";

const Contact = () => {
    return(
        <div className="border-b border-neutral-800 pb-4">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
        >
            Get in Touch
        </motion.h2>
        <div className="flex flex-col items-center tracking-tighter">
            <div className="flex flex-col items-center text-center">
                <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                 className="text-lg text-neutral-400 my-4"

                >
                    Email: {CONTACT.email}
                </motion.p>
                <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                 className="text-lg text-neutral-400"
                >
                   Phone: {CONTACT.phone}
                </motion.p>
                <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                 className="text-lg text-neutral-400"
                >
                    Address: {CONTACT.address}
                </motion.p>
                
            </div>
        </div>
        </div>
    );
};

export default Contact;