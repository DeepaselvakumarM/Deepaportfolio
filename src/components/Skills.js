// import React from 'react'
// import python from '../assets/python log.png'
// import HTML from '../assets/html download.jpg'
// import css from '../assets/css.png'
// import js from '../assets/js.jpg'
// import mern from '../assets/mern.jpg'

// const Skills = () => {
//   return (
//     <>
//     <div className="w-full flex flex-col px-10 py-5 bg-secondary text-white">
//             <div >
//             <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>Skills</h1>
//                 </div>
//                 <p>In python iam strong in fundamendals,"I'm proficient in Python. </p>
//                 <p>I have strong skills in HTML and CSS, adept at creating responsive and visually appealing web interfaces. </p>
//                 <p>I have a solid grasp of JavaScript, proficient in both frontend and backend development, and experienced in building interactive and dynamic web applications.</p>
//                 <p>I am good in the MERN stack </p>
             
//                 <div className='skill gap-14 pt-6'>
//                     <div className=''>
//                         <img className='skill-img ' src={python}/>
//                         <h3>Pyhton</h3>
//                     </div>
//                     <div>
//                         <img className='skill-img' src={HTML}/>
//                         <h3>HTML</h3>
//                     </div>
//                     <div>
//                         <img className='skill-img' src={css}/>
//                         <h3>CSS</h3>
//                     </div>
//                     <div>
//                         <img className='skill-img' src={js}/>
//                         <h3>Javascript</h3>
//                     </div>
//                     <div>
//                         <img className='skill-img' src={mern}/>
//                         <h3>MERN</h3>
//                     </div>
//                 </div>
//                 </div>
// </>
//   )
// }

// export default Skills






import React from 'react';
import { motion } from 'framer-motion';
import python from '../assets/python log.png';
import HTML from '../assets/java.png';
import css from '../assets/spring.png';
import js from '../assets/js.jpg';
import mern from '../assets/mern.jpg';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: python,
      proficiency: 85,
      description: "Strong fundamentals with DSA, scripting, and automation."
    },
    {
      name: "Core java",
      icon: HTML,
      proficiency: 70,
      description: "Strong fundamentals with frameworks."
    },
    {
      name: "Spring Boot",
      icon: css,
      proficiency: 85,
      description: "Responsive design with Flexbox, Grid, animations, and SCSS."
    },
    {
      name: "JavaScript",
      icon: js,
      proficiency: 80,
      description: "ES6+, DOM APIs, event handling, promises, and fetch/Axios."
    },
    {
      name: "MERN Stack",
      icon: mern,
      proficiency: 75,
      description: "Mysql, Express, React, Node.js with real-world projects."
    }
  ];

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
      id="skills"
      className="relative py-20 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-[#121212] to-[#1f1f1f] overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-[#1976d2] blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#9c27b0] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#64ffda] to-[#9c27b0] text-transparent bg-clip-text"
            >
              My Skills
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              I’ve developed hands-on experience in modern technologies by building real-world projects and continuously learning.
            </motion.p>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group bg-[#1e1e1e]/70 border border-[#64ffda]/20 rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-6 w-20 h-20">
                    <div className="absolute inset-0 bg-[#64ffda]/10 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="relative z-10 w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                    <div
                      className="bg-gradient-to-r from-[#1976d2] to-[#9c27b0] h-2.5 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-400 text-center">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
