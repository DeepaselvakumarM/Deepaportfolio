// import AboutImg from '../assets/Abouts.png';

// export default function About () {

//     return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
//         <div className='py-5 md:w-1/3'>
//             <img src={AboutImg} />
//         </div>
//         <div className='md:w-1/2 flex justify-center pl-4 '>
//             <div className='flex flex-col justify-center text-white'>
//                 <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
//                 <p className='pb-5'> I am currently pursuing my engineering degree with a strong passion for coding and software development. I have a solid foundation in web development technologies such as HTML, CSS, and JavaScript. Additionally, I am actively learning React for front-end development and Node,MongoDB for database management.
// </p>
//                 <p className='pb-5'>I take great pride in my work ethic and commitment to excellence. Being punctual and reliable is important to me, as I believe it reflects professionalism and respect for others' time. I also possess strong communication skills and enjoy working collaboratively in a team environment, leveraging diverse perspectives to achieve common goals.

// </p>
        
//             </div>
//         </div>
//     </section>
// }


import { motion } from 'framer-motion';
import AboutImg from '../assets/Abouts.png';

export default function About() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section 
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 py-16 md:px-20 bg-gradient-to-br from-[#121212] to-[#1f1f1f]"
        >
            {/* Image Section */}
            <motion.div 
                className="md:w-1/3 flex justify-center mb-10 md:mb-0"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1976d2] to-[#9c27b0] rounded-full blur-md opacity-70 group-hover:opacity-90 transition-all duration-500" />
                    <img 
                        src={AboutImg} 
                        alt="About Deepa" 
                        className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#64ffda]/40 group-hover:border-[#64ffda] transition-all duration-500"
                    />
                </div>
            </motion.div>

            {/* Text Section */}
            <motion.div 
                className="md:w-1/2 flex justify-center"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
            >
                <div className="flex flex-col justify-center max-w-prose text-[#e0e0e0]">
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#64ffda] to-[#9c27b0] text-transparent bg-clip-text"
                        variants={fadeIn}
                    >
                        About Me
                    </motion.h2>

                    <motion.p 
                        className="pb-6 text-lg leading-relaxed text-gray-300"
                        variants={fadeIn}
                    >
                        I'm  engineering graduated student with a passion for software development. I build full-stack apps using 
                        <span className="text-[#64ffda] font-medium"> HTML</span>, 
                        <span className="text-[#64ffda] font-medium"> CSS</span>, 
                        <span className="text-[#64ffda] font-medium"> JavaScript</span>, 
                        <span className="text-[#64ffda] font-medium"> React</span>, 
                        <span className="text-[#64ffda] font-medium"> Node.js</span> and 
                        <span className="text-[#64ffda] font-medium"> Spring Boot</span>.
                    </motion.p>

                    <motion.p 
                        className="pb-6 text-lg leading-relaxed text-gray-300"
                        variants={fadeIn}
                    >
                        I am known for being <span className="text-[#64ffda] font-medium">reliable</span>, 
                        <span className="text-[#64ffda] font-medium"> punctual</span>, and a 
                        <span className="text-[#64ffda] font-medium"> collaborative team player</span> who takes pride in writing clean and scalable code.
                    </motion.p>

                    {/* Skills Tags */}
                    <motion.div 
                        className="flex flex-wrap gap-4 mt-4"
                        variants={fadeIn}
                    >
                        {['Web Development', 'React', 'Node.js', 'MongoDB', 'Teamwork', 'Problem Solving'].map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-4 py-2 bg-[#1e1e1e] rounded-full text-sm font-medium text-[#64ffda] border border-[#64ffda]/30 hover:bg-[#64ffda]/10 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Resume Button */}
                    {/* <motion.div 
                        className="mt-8"
                        variants={fadeIn}
                    >
                        <a 
                            href="/Deepa_Resume.pdf" 
                            download 
                            className="inline-block bg-[#1976d2] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#64ffda] hover:text-black transition-all duration-300"
                        >
                            Download Resume
                        </a>
                    </motion.div> */}
                </div>
            </motion.div>
        </section>
    );
}
