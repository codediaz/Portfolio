import iam from "../assets/iam.jpg";
import {ABOUT_ME} from '../../constants/const.js';
const Hero = () =>{

    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                        {ABOUT_ME.fullName}
                    </h1>
                    <span className="bg-gradient-to-r from-green-300 via-slate-500 to-blue-400 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent">
                       {ABOUT_ME.title}
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eos fugiat dolorum ipsa distinctio suscipit voluptatibus pariatur velit. Praesentium odio corrupti optio sunt consectetur esse, officia suscipit eos incidunt omnis similique dolorum magni provident magnam laudantium delectus recusandae minus ut illum consequuntur nobis quia! Quibusdam, exercitationem necessitatibus? Blanditiis, recusandae inventore.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="w-[90%]" src={iam} alt="Sergio Díaz" />
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;