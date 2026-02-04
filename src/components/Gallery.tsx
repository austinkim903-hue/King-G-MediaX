import { motion } from "framer-motion";
import  Image1  from "@/assets/Image1.jpeg";
import Image2 from "@/assets/Image2.jpeg";
import Image3 from "@/assets/Image3.jpeg";
import Image4 from "@/assets/Image4.jpeg";
import Image5 from "@/assets/Image5.jpeg";
import Image6 from "@/assets/Image6.jpeg";
import Image7 from "@/assets/Image7.jpeg";
import Image8 from "@/assets/Image8.jpeg";
import Image9 from "@/assets/Image9.jpeg";
import Image10 from "@/assets/Image10.jpeg";
import Image11 from "@/assets/Image11.jpeg";
import Imagex from "@/assets/Imagex.jpeg";

const images = [
  { src: Image1, title: "@150", category: "Gardenshoot" },
  { src: Image2, title: "@100", category: "Outdoor" },
  { src: Image3, title: "@100", category: "Outdoor" },
  { src: Image4, title: "@200", category: "Indoor" },
  { src: Image5, title: "@100", category: "Outdoor" },
  { src: Image6, title: "@200", category: "Indoor" },
  { src: Image7, title: "@100", category: "Outdoor" },
  { src: Image8, title: "@150", category: "Gardenshoot" },
  { src: Image9, title: "@150", category: "Gardenshoot" },
  { src: Image10, title: "@100", category: "Outdoor" },
  { src: Image11, title: "@100", category: "Sandy Waves" },
  { src: Imagex, title: "@850", category: "Mounting" },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Gallery = () => {
  return (
    <section id="work" className="bg-background py-24 md:py-32 scroll-mt-24">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="mb-3 text-sm font-light uppercase letter-spacing-wider text-muted-foreground">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Selected Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {images.map((image, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="mb-2 text-xs font-light uppercase letter-spacing-wider text-muted-foreground">
                  {image.category}
                </p>
                <h3 className="font-serif text-2xl font-light text-foreground">
                  {image.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
