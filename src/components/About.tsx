import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-secondary py-24 md:py-32 scroll-mt-24">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-sm font-light uppercase letter-spacing-wider text-muted-foreground">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              The Art of Seeing
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Photography is more than capturing images—it's about distilling emotion, 
                freezing time, and revealing the extraordinary within the ordinary.
              </p>
              <p>
                Based in Homabay County, Kenya, I specialize in creating visual narratives 
                that resonate deeply with viewers. Each frame is carefully composed to 
                evoke emotion and tell a story.
              </p>
              <p>
                My work has been featured across Kenya, from local publications 
                to national events, capturing moments that matter.
              </p>
            </div>

          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-foreground mb-2">3+</p>
                <p className="text-sm font-light uppercase letter-spacing-wide text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-foreground mb-2">3</p>
                <p className="text-sm font-light uppercase letter-spacing-wide text-muted-foreground">
                  Exhibitions
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-foreground mb-2">5</p>
                <p className="text-sm font-light uppercase letter-spacing-wide text-muted-foreground">
                  Awards Won
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-foreground mb-2">Kenya</p>
                <p className="text-sm font-light uppercase letter-spacing-wide text-muted-foreground">
                  Based In
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
