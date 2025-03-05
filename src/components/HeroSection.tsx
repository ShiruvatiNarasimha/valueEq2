// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import DashboardSection from "./DashboardSection";

// const HeroSection = () => {
//   return (
//     <div className="relative bg-black text-white overflow-hidden flex flex-col items-center justify-center text-center min-h-screen pt-40">
//       {/* Animated background with moving lights */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
//         <motion.div
//           className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.4)_0%,transparent_70%)]"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </motion.div>

//       <div className="relative z-10 max-w-6xl">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
//           className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
//         >
//           <span className="block">The AI-Powered</span>
//           <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Financial Intelligence and Valuation Platform
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.3,
//             ease: [0.6, -0.05, 0.01, 0.99],
//           }}
//           className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto sm:text-xl md:mt-8"
//         >
//           The most advanced AI platform for financial data, valuation, and M&A
//           insights.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.6,
//             ease: [0.6, -0.05, 0.01, 0.99],
//           }}
//           className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10"
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700 transition-colors duration-200 sm:px-8 sm:py-4"
//           >
//             Sign Up Now
//           </motion.a>

//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 text-lg font-medium rounded-full text-blue-400 bg-gray-800 hover:bg-gray-700/50 transition-colors duration-200 flex items-center gap-2 sm:px-8 sm:py-4"
//           >
//             Request a Demo
//             <motion.span
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <ChevronRight className="h-5 w-5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>

//         {/* Dashboard section with animated lights */}
//         <div className="relative mt-16">
//           <motion.div
//             className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.3)_0%,transparent_70%)]"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <DashboardSection />
//         </div>
//       </div>

//       {/* Scrolling metrics placeholder */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-20" />
//     </div>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import DashboardSection from "./DashboardSection";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden flex flex-col items-center justify-center text-center min-h-screen pt-40">
      {/* Advanced animated neon background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >
          <span className="block">The AI-Powered</span>
          <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Financial Intelligence and Valuation Platform
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto sm:text-xl md:mt-8"
        >
          The most advanced AI platform for financial data, valuation, and M&A
          Insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10"
        >
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center"
          >
            <span>Get Started Free</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-2"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-medium rounded-full text-blue-300 bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2"
          >
            Watch Demo
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Enhanced animated glowing effect around DashboardSection */}
        <motion.div
          className="relative mt-10 rounded-2xl"
          animate={{
            boxShadow: [
              "0px 0px 15px rgba(0, 191, 255, 0.6)",
              "0px 0px 40px rgba(138, 43, 226, 0.8)",
              "0px 0px 15px rgba(0, 191, 255, 0.6)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <DashboardSection />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
