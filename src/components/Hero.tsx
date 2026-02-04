import { motion } from "framer-motion";
import heroImage from "@/assets/BackImage.jpeg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Hero photography"
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Welcome Text - Top */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-32 left-0 right-0 z-10 text-center font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground"
      >
        WELCOME TO
      </motion.h2>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-12 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground"
        >
          KING G MEDIA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-md text-base font-light text-muted-foreground"
        >
          Professional photography and videography capturing moments that tell your story
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          href="#work"
          className="mt-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-xs uppercase letter-spacing-wider">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
