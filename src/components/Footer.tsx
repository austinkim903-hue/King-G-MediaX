const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xl font-light text-foreground">LENS</p>
          <p className="text-sm font-light text-muted-foreground">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
