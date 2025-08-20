import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function AuthLayout() {
  const location = useLocation();

  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background_logo.png')" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // re-animates when route changes
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm md:max-w-md"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AuthLayout;
