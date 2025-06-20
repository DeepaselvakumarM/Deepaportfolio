


// import HeroImg from '../assets/profile.jpg';
// import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center px-6 py-32 gap-10 bg-gradient-to-br from-[#121212] to-[#1f1f1f]">
      
//       {/* Text Section */}
//       <motion.div 
//         className="md:w-1/2 flex flex-col items-start text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//           Hi, <br />
//           I'm <span className="text-[#64ffda]">Deepa Selvakumar</span>
//         </h1>

//         <motion.p 
//           className="text-xl sm:text-2xl text-gray-300 mt-4 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Full Stack Developer • MERN • Problem Solver
//         </motion.p>

        

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <a 
//             href="/Deepa_Resume.pdf" 
//             download 
//             className="bg-[#1976d2] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#64ffda] hover:text-black transition duration-300"
//           >
//             Download Resume
//           </a>
//           <a 
//             href="#contact" 
//             className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-full font-medium hover:bg-[#64ffda] hover:text-black transition duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </motion.div>

//       {/* Image Section */}
//       <motion.div
//         className="md:w-1/3 w-2/3 rounded-xl overflow-hidden shadow-xl"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <img 
//           src={HeroImg} 
//           alt="Deepa Selvakumar" 
//           className="rounded-2xl object-cover w-full h-auto border-4 border-[#64ffda]/10"
//         />
//       </motion.div>
//     </section>
//   );
// }



import HeroStatic from '../assets/profile.jpg'; // replace with the downloaded image
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-32 gap-10 bg-gradient-to-br from-[#121212] to-[#1f1f1f] overflow-hidden">
      
      {/* Text Section */}
      <motion.div 
        className="md:w-1/2 flex flex-col items-start text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, <br />
          I&apos;m <span className="text-[#64ffda]">Deepa Selvakumar</span>
        </h1>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer • MERN • Problem Solver
        </motion.p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/Deepa_Resume.pdf" 
            download 
            className="bg-[#1976d2] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#64ffda] hover:text-black transition duration-300"
          >
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-full font-medium hover:bg-[#64ffda] hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/3 w-2/3 rounded-xl overflow-hidden shadow-2xl border-4 border-[#64ffda]/20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={HeroStatic} 
          alt="Illustration of female developer" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
