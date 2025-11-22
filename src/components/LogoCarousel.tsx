const LogoCarousel = () => {
  // Placeholder logos - can be replaced with actual company logos
  const logos = [
    { name: "Company 1", width: "120px" },
    { name: "Company 2", width: "140px" },
    { name: "Company 3", width: "130px" },
    { name: "Company 4", width: "125px" },
    { name: "Company 5", width: "135px" },
    { name: "Company 6", width: "120px" },
    { name: "Company 7", width: "145px" },
    { name: "Company 8", width: "128px" },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8 font-semibold">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll hover:pause">
          {/* First set of logos */}
          <div className="flex gap-12 items-center px-6">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ minWidth: logo.width }}
              >
                <div className="w-full h-16 bg-foreground/10 rounded-lg flex items-center justify-center text-xs font-semibold text-foreground/60">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-12 items-center px-6">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ minWidth: logo.width }}
              >
                <div className="w-full h-16 bg-foreground/10 rounded-lg flex items-center justify-center text-xs font-semibold text-foreground/60">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
