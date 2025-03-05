import { motion } from "framer-motion";
import dashboard from "../assets/images/dashboard.png";

const DashboardSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-10 bg-muted/30 relative overflow-hidden"
      >
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            src={dashboard}
            alt="Financial Dashboard"
            height={1200}
            width={1200}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default DashboardSection;
