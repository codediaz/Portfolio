import {FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import {ABOUT_ME} from '../../constants/const.js';

const Navbar = () => {

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <p>{ABOUT_ME.nickname}</p>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-xl">
            <FaGithub/>
            <FaLinkedin/>
            <FaTiktok/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
    </nav>
    );
 
};

export default Navbar;
