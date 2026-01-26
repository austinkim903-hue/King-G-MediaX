import { motion } from "framer-motion";
import { Camera, Video, Calendar, Frame, Pencil, FileImage, Wand2, Plane, Palette, Film, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  const services = [
    {
      id: "photography",
      icon: Camera,
      title: "Photography",
      packages: [
        { name: "Basic Package", description: "1-hour shoot, 10 edited photos", price: "KSH 1,000" },
        { name: "Standard Package", description: "2-hour shoot, 20 edited photos", price: "KSH 2,000" },
        { name: "Premium Package", description: "Full-day shoot, all edited photos", price: "KSH 10,000" },
      ],
      extras: [
        { name: "Outdoor Shoot", price: "KSH 100/photo" },
        { name: "Graduation Shoot", price: "KSH 100/photo" },
        { name: "Studio Shoot", price: "KSH 200/photo" },
        { name: "Night Shoot", price: "KSH 100/photo" },
        { name: "Gardens Shoot", price: "KSH 150/photo" },
        { name: "Traditional Shoot", price: "KSH 150/photo" },
      ],
    },
    {
      id: "videography",
      icon: Video,
      title: "Videography",
      packages: [
        { name: "Starter Package", description: "1-minute promotional edited video", price: "KSH 500" },
        { name: "Professional Package", description: "5-minute cinematic video + editing", price: "KSH 1,000" },
        { name: "Full Production Package", description: "Multi-day shoot, full edit, special effects", price: "KSH 20,000" },
      ],
    },
    {
      id: "events",
      icon: Calendar,
      title: "Event Coverage",
      packages: [
        { name: "Basic Event Package", description: "Photography + 1-hour video", price: "KSH 20,000" },
        { name: "Standard Event Package", description: "Photo + video coverage all day", price: "KSH 30,000" },
        { name: "Premium Event Package", description: "Full coverage + highlight video + photo album + 2 A2 wall mounts", price: "KSH 45,000" },
      ],
      extras: [
        { name: "Baby Shower/Baby Bump", price: "KSH 10,000" },
        { name: "Birthday Shoot (4 hours)", price: "KSH 5,000" },
        { name: "Traditional Wedding", price: "KSH 20,000" },
        { name: "Real Estate Photography", price: "KSH 5,000" },
        { name: "Burial Ceremony", price: "KSH 20,000" },
      ],
    },
    {
      id: "mounting",
      icon: Frame,
      title: "Mounting",
      packages: [
        { name: "Standard Mounting", description: "Basic framing & mounting", price: "" },
        { name: "Premium Mounting", description: "Custom frames + professional mounting", price: "" },
      ],
      tables: [
        {
          title: "Standard Mounting",
          items: [
            { size: "A5", price: "KSH 850" },
            { size: "A4", price: "KSH 1,000" },
            { size: "A3", price: "KSH 1,500" },
            { size: "A2", price: "KSH 2,500" },
            { size: "A1", price: "KSH 3,000" },
            { size: "A0", price: "KSH 7,500" },
          ],
        },
        {
          title: "Premium Mounting",
          items: [
            { size: "A5", price: "KSH 1,300" },
            { size: "A4", price: "KSH 1,500" },
            { size: "A3", price: "KSH 2,000" },
            { size: "A2", price: "KSH 3,000" },
            { size: "A1", price: "KSH 3,500" },
            { size: "A0", price: "KSH 8,000" },
          ],
        },
      ],
    },
    {
      id: "logo",
      icon: Pencil,
      title: "Logo Design",
      packages: [
        { name: "Basic Logo Package", description: "2 logo concepts", price: "KSH 1,000" },
        { name: "Advanced Logo Package", description: "5 concepts + brand guide", price: "KSH 5,000" },
        { name: "Premium Logo Package", description: "Full brand identity (logo + guidelines)", price: "KSH 10,000" },
      ],
    },
    {
      id: "poster",
      icon: FileImage,
      title: "Poster Design",
      packages: [
        { name: "Simple Poster", description: "One design concept", price: "KSH 500" },
        { name: "Custom Poster", description: "3 concepts + print-ready files", price: "KSH 1,500" },
        { name: "Premium Poster", description: "Full design + marketing tips", price: "KSH 5,000" },
      ],
    },
    {
      id: "retouching",
      icon: Wand2,
      title: "Retouching",
      packages: [
        { name: "Basic Retouch", description: "Color correction + blemish removal", price: "KSH 50" },
        { name: "Advanced Retouch", description: "Full photo enhancement + effects", price: "KSH 100" },
        { name: "Premium Retouch", description: "Artistic retouch + batch editing", price: "KSH 150" },
      ],
    },
    {
      id: "drone",
      icon: Plane,
      title: "Drone Services",
      packages: [
        { name: "Aerial Photo Package", description: "10 edited aerial photos", price: "KSH 10,000" },
        { name: "Aerial Video Package", description: "2-minute drone video", price: "KSH 10,000" },
        { name: "Full Drone Package", description: "Photos + video + editing", price: "KSH 40,000" },
      ],
    },
    {
      id: "graphics",
      icon: Palette,
      title: "Graphic Design",
      packages: [
        { name: "Basic Graphics", description: "Simple designs (flyers, social posts)", price: "KSH 1,000" },
        { name: "Custom Graphics", description: "Full branding materials", price: "KSH 5,000" },
        { name: "Premium Graphics", description: "Comprehensive brand package", price: "KSH 10,000" },
      ],
    },
    {
      id: "editing",
      icon: Film,
      title: "Video Editing",
      packages: [
        { name: "Basic Edit", description: "Cut & trim video", price: "KSH 3,000" },
        { name: "Advanced Edit", description: "Add effects + color grading", price: "KSH 5,000" },
        { name: "Premium Edit", description: "Full production edit + special effects", price: "KSH 10,000" },
      ],
    },
    {
      id: "web",
      icon: Code,
      title: "Web Development",
      packages: [
        { name: "Basic Website", description: "Landing page, responsive design", price: "KSH 15,000" },
        { name: "Business Website", description: "Multi-page site, contact forms, SEO", price: "KSH 35,000" },
        { name: "E-commerce Website", description: "Full online store, payment integration", price: "KSH 75,000" },
        { name: "Custom Web App", description: "Custom functionality, database, admin panel", price: "KSH 150,000+" },
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="mb-3 text-sm font-light uppercase tracking-widest text-muted-foreground">
            Packages & Pricing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Professional services tailored to your needs. Choose from our range of packages or contact us for custom solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="photography" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-muted-foreground/30 px-4 py-2 text-sm font-light"
              >
                <service.icon className="w-4 h-4 mr-2" />
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border border-muted-foreground/30 p-8 hover:border-primary transition-colors"
                    >
                      <h3 className="font-serif text-xl text-foreground mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground font-light text-sm mb-4">{pkg.description}</p>
                      {pkg.price && (
                        <p className="font-serif text-2xl text-primary">{pkg.price}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mounting Tables */}
                {service.tables && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {service.tables.map((table) => (
                      <div key={table.title} className="border border-muted-foreground/30 p-6">
                        <h4 className="font-serif text-lg text-foreground mb-4">{table.title}</h4>
                        <div className="space-y-2">
                          {table.items.map((item) => (
                            <div key={item.size} className="flex justify-between items-center py-2 border-b border-muted-foreground/10">
                              <span className="text-muted-foreground font-light">{item.size}</span>
                              <span className="text-foreground">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Extra Services */}
                {service.extras && (
                  <div className="mt-8">
                    <h4 className="font-serif text-xl text-foreground mb-6 text-center">Individual Shoots</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {service.extras.map((extra) => (
                        <div
                          key={extra.name}
                          className="border border-muted-foreground/30 p-4 text-center hover:border-primary transition-colors"
                        >
                          <p className="text-sm text-foreground mb-1">{extra.name}</p>
                          <p className="text-primary font-light text-sm">{extra.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-light mb-6">
            Need a custom package? Contact us for personalized pricing.
          </p>
          <a
            href="#contact"
            className="inline-block border border-foreground px-8 py-3 text-sm font-light uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
