// import Img1 from '../assets/ecommerce-websites.jpg';
// import Img2 from '../assets/pro1.jpg';
// import Img3 from '../assets/download.jpg';

// export default function Projects() {

//     const config = {
//         projects : [
//             {
//                 image:Img1,
//                 description: 'A Ecommerce Website. Built with React.',
//                 link: 'https://github.com/Deepaselvakumar/Teamwork.git'
//             },
//             {
//                 image: Img2,
//                 description: 'Company websites using HTML,CSS',
//                 link: 'https://github.com/Deepaselvakumar/Teamwork.git'
//             },
//             {
//                 image:Img3,
//                 description: 'PortFolio wesite',
//                 link: 'https://github.com/Deepaselvakumar/Teamwork.git'
//             }
//         ]
//     }

//     return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
//         <div className="w-full">
//             <div className="flex flex-col px-10 py-5">
//                 <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
//                 <p>These are some of my best projects. I have built these with React, MERN and  CSS. Check them out.</p>
//             </div>
//         </div>
//         <div className="w-full">
//             <div className='flex flex-col md:flex-row px-10 gap-5'>
//                 {config.projects.map((project) => (
//                      <div className='relative'>
//                         <img className='h-[200px] w-[500px]' src={project.image}/>
//                         <div className='project-desc'>
//                             <p className='text-center px-5 py-5'>{project.description}</p>
//                             <div className='flex justify-center'>
//                                 <a className='btn' target='_blank' href={project.link}>View Project</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
               
               
//             </div>
//         </div>
//     </section>
// }






import { motion } from 'framer-motion';
import Img1 from '../assets/LMS.jpg';
import Img2 from '../assets/pro1.jpg';
import Img3 from '../assets/download.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: Img1,
                description: 'Library Management System build with React, Node.js, and MongoDB.',
                link: 'https://github.com/DeepaselvakumarM/LMS.git',
                tags: ['React', 'Node.js', 'MongoDB']
            },
            {
                image: Img2,
                description: 'Food Menu System build with React .',
                link: 'https://github.com/DeepaselvakumarM/FoodOrder.git',
                tags: ['React',"Bootstrap"]
            },
            {
                image: Img3,
                description: 'A clothing websites build with React.',
                link: 'https://github.com/DeepaselvakumarM/Clothing.git',
                tags: ['React', 'Framer Motion', 'Tailwind']
            }
        ]
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
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
            id='projects' 
            className="relative py-20 px-5 md:px-10 lg:px-20 min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#121212] to-[#1f1f1f] overflow-hidden"
        >
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#1976d2] blur-2xl" />
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#9c27b0] blur-2xl" />
            </div>

            {/* Section content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#64ffda] to-[#9c27b0] text-transparent bg-clip-text"
                    >
                        My Projects
                    </motion.h1>

                    <motion.p 
                        variants={fadeIn}
                        className="text-lg text-[#e0e0e0] max-w-3xl mb-16"
                    >
                        A collection of practical web development projects built with modern technologies and real-world use cases.
                    </motion.p>

                    {/* Project Cards */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {config.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-xl shadow-lg border border-[#64ffda]/20 bg-[#1e1e1e]"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src={project.image} 
                                        alt={`Project ${index + 1}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Description */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Project {index + 1}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 bg-[#1976d2] text-white rounded-full font-medium hover:bg-[#64ffda] hover:text-black transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Project
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
