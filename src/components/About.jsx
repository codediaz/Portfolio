import AboutImage from "../assets/aboutme.jpg"
const About = () => {

    return (
        <div className="borde-b borde-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                    About
                    <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img
                    className="w-[70%]  rounded-2xl"
                    src={AboutImage}
                    alt="Gem Coding"
                    />
                </div>
                </div>
                <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, eum esse? Quia quisquam ea magni reiciendis, recusandae in, vel a libero deserunt tempora tenetur! Nisi possimus ab dolor harum esse suscipit exercitationem omnis praesentium odio earum odit iusto debitis laudantium quam error, minus atque pariatur? Porro dolorem amet atque dicta esse inventore eius alias asperiores expedita accusantium. Ipsum quo nemo eos ex odit praesentium laboriosam fugit molestiae adipisci minima natus, soluta omnis quos doloremque! Cum velit quibusdam doloremque quisquam numquam debitis ad! Minus, commodi modi non quam, eaque, unde earum adipisci voluptas enim nisi ex eos maiores vitae ab eum?.</p>
                </div>
                </div>
            </div>  
               
        </div>
    );

}

export default About;