import iam from "../assets/iam.jpg";
import {ABOUT_ME} from '../../constants/const.js';
import {delay, motion }from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () =>{

    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                >
                  {ABOUT_ME.fullName}
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-green-300 via-slate-500 to-blue-400 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent"
              >
                {ABOUT_ME.title}
              </motion.span>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae rem illum eum quia tenetur repellat consequatur temporibus nulla, sint odit, nihil neque dicta nostrum est? Ex obcaecati dolorem soluta.
                Deserunt atque laudantium sint rem voluptatem corporis nemo exercitationem earum in sed recusandae labore dolorem vitae hic officiis eligendi vero commodi harum delectus ullam nihil, minus veniam qui! Aliquid, culpa!
                Praesentium nesciunt in culpa laborum quod, deserunt rerum explicabo consequuntur voluptas, eligendi ea, vel voluptatibus porro cum itaque distinctio sed. Officia numquam similique enim incidunt maxime iusto, maiores repellat excepturi!
                Architecto cum fugiat veniam distinctio ullam. Nesciunt laborum facere tenetur quis reiciendis amet aspernatur. Quos hic quas, officia eveniet pariatur sit omnis laudantium ea maiores facilis! Maxime dicta id veritatis?
                Tenetur, asperiores. Sapiente distinctio eos veniam delectus dolorem magnam iure corrupti est earum fugiat sed hic minus voluptate quod veritatis eum nostrum, inventore maxime. Ab sapiente magnam eum quas quo!
              </motion.p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="w-[90%]"
                    src={iam}
                    alt="Sergio Díaz"
                  >
                  </motion.img>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;