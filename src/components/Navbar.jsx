import {FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import {ABOUT_ME} from '../../constants/const.js';

const Navbar = () => {

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="hidden lg:flex flex-shrink-0 items-center">
          <p>{ABOUT_ME.nickname}</p>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-xl">
            <a href="https://github.com/codediaz" target='_blank'>
            <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/sergio-diaz-fernandez" target='_blank'>
            <FaLinkedin/>
            </a>
            <a href="https://www.tiktok.com/@codediaz_" target='_blank'>
            <FaTiktok/>
            </a>
            <a href="https://x.com/codediaz_" target='_blank'>
            <FaTwitter/>
            </a>
        </div>
    </nav>
    );
 
};

export default Navbar;
