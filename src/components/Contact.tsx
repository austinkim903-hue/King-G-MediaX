import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-24 md:py-32 scroll-mt-24">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="mb-3 text-sm font-light uppercase letter-spacing-wider text-muted-foreground">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8">
            Let's Create Together
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-12">
            Ready to capture your next event, portrait, or special moment? 
            Let's connect and bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:willie.ke015@gmail.com"
              className="inline-block border border-foreground px-10 py-4 text-sm font-light uppercase letter-spacing-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Send a Message
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+254724477064"
              className="inline-block border border-foreground px-10 py-4 text-sm font-light uppercase letter-spacing-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              +254 724 477 064
            </motion.a>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-8">
            {[
              { name: "Instagram", url: "https://www.instagram.com/king_g_media?igsh=c3RmcXE0Z3o5cDQw" },
              { name: "TikTok", url: "https://vm.tiktok.com/ZSHoX4o5mPWex-WQeLg/" },
              { name: "Facebook", url: "https://www.facebook.com/share/1GFznATVMt/" },
              { name: "WhatsApp", url: "https://wa.me/254724477064" },
               { name: "YouTube", url: "https://youtube.com/@king.gmedia?si=zkFi0hs_i6UQB2We" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
