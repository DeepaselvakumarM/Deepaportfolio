
// export default function Contact () {

//     return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
//         <div className='flex flex-col items-center'>
           
//             <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
//             <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
//             <p className='py-2'><span className='font-bold'>Email :</span> sdeepa0711@gmail.com</p>
//             <p className='py-2'><span className='font-bold'>Phone :</span> 9791672016</p>
//         </div>
//     </section>
// }




import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white"
    >
      {/* Decorative background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-40 h-40 bg-[#1976d2] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#9c27b0] blur-3xl rounded-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#64ffda] to-[#9c27b0] text-transparent bg-clip-text">
          Contact
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          If you’d like to discuss opportunities, collaborate on projects, or simply connect, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Email */}
          <div className="bg-[#1e1e1e]/70 p-6 rounded-xl border border-[#64ffda]/20 shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <AiOutlineMail className="text-[#64ffda] text-3xl" />
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <p className="text-gray-400">sdeepa0711@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-[#1e1e1e]/70 p-6 rounded-xl border border-[#64ffda]/20 shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <AiOutlinePhone className="text-[#64ffda] text-3xl" />
              <h2 className="text-xl font-semibold">Phone</h2>
            </div>
            <p className="text-gray-400">+91 97916 72016</p>
          </div>
        </div>

        {/* Optional Social or CTA */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/deepas7113/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1976d2] text-white rounded-full font-medium hover:bg-[#64ffda] hover:text-black transition duration-300"
          >
            <AiFillLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
