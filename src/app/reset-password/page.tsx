"use client";

import ResetPasswordForm from "@/components/forms/reset-password-form";
import { AnimatePresence, motion } from "framer-motion";

export default function ResetPage() {
  return (
    <div className="w-full h-screen justify-center items-center text-card-foreground overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key="login-form"
          exit={{ opacity: 0, x: "-100%", filter: "blur(10px)" }}
          initial={{ opacity: 0, x: "-100%", filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full flex flex-col justify-center"
        >
          <ResetPasswordForm />
        </motion.div>
      </AnimatePresence>
      <div className="absolute -z-10 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </div>
  );
}
