
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';

// export default function Header() {
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState('Home');

//   const navItems = [
//     { name: "Home", to: "home" },
//     { name: "About", to: "about" },
//     { name: "Skills", to: "skills" },
//     { name: "Projects", to: "projects" },
//     { name: "Contact", to: "contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       className={`fixed w-full z-50 flex justify-between items-center px-5 py-3 transition-all duration-300 ${
//         scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       {/* Logo */}
//       <motion.a
//         href="/"
//         className="flex items-center gap-2 font-bold text-xl text-[#1976d2]"
//         aria-label="Go to Home"
//         whileHover={{ scale: 1.05 }}
//       >
//         <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//         <span>Deepa</span>
//       </motion.a>

//       {/* Desktop Nav */}
//       <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
//         <ul className="flex space-x-8">
//           {navItems.map((item, index) => (
//             <motion.li key={index} whileHover={{ scale: 1.1 }}>
//               <ScrollLink
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className={`cursor-pointer font-medium px-3 py-2 transition-all duration-300 ${
//                   active === item.name
//                     ? "text-[#1976d2] font-semibold border-b-2 border-[#1976d2]"
//                     : "text-gray-700 hover:text-[#1976d2]"
//                 }`}
//                 onSetActive={() => setActive(item.name)}
//               >
//                 {item.name}
//               </ScrollLink>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Nav Toggle */}
//       <motion.button
//         onClick={() => setToggle(!toggle)}
//         aria-label="Toggle navigation menu"
//         className="block md:hidden text-black p-2"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Bars3Icon className="h-6 w-6" />
//       </motion.button>

//       {/* Mobile Nav Panel */}
//       <AnimatePresence>
//         {toggle && (
//           <motion.div
//             className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden z-50"
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <ul className="flex flex-col items-center space-y-8 text-2xl">
//               {navItems.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <ScrollLink
//                     to={item.to}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     className="text-gray-900 font-semibold"
//                     onClick={() => {
//                       setToggle(false);
//                       setActive(item.name);
//                     }}
//                   >
//                     {item.name}
//                   </ScrollLink>
//                 </motion.li>
//               ))}
//             </ul>

//             {/* Close Icon */}
//             <button
//               onClick={() => setToggle(false)}
//               className="absolute top-5 right-5 text-black"
//               aria-label="Close navigation menu"
//             >
//               <XMarkIcon className="h-8 w-8" />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }



import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 flex justify-between items-center px-5 py-3 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Text Logo (No Image) */}
      <motion.a
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-[#1976d2] to-[#64ffda] text-transparent bg-clip-text tracking-wide"
        whileHover={{ scale: 1.05 }}
      >
        Deepa.dev
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={`cursor-pointer font-medium px-3 py-2 transition-all duration-300 ${
                  active === item.name
                    ? "text-[#1976d2] font-semibold border-b-2 border-[#1976d2]"
                    : "text-gray-700 hover:text-[#1976d2]"
                }`}
                onSetActive={() => setActive(item.name)}
              >
                {item.name}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav Toggle */}
      <motion.button
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle navigation menu"
        className="block md:hidden text-black p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bars3Icon className="h-6 w-6" />
      </motion.button>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden z-50"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="flex flex-col items-center space-y-8 text-2xl">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-900 font-semibold"
                    onClick={() => {
                      setToggle(false);
                      setActive(item.name);
                    }}
                  >
                    {item.name}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              onClick={() => setToggle(false)}
              aria-label="Close navigation menu"
              className="absolute top-5 right-5 text-black"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
