import kcLogo from "@/assets/logos/kc-logo.png";
import catchcornerLogo from "@/assets/logos/catchcorner-logo.jpg";
import ezFacilityLogo from "@/assets/logos/ez-facility-logo.png";
import skeddaLogo from "@/assets/logos/skedda-logo.svg";
import fitCourtsLogo from "@/assets/logos/fit-courts-logo.png";
import kcMarkhamLogo from "@/assets/logos/kc-markham-logo.png";

const LogoCarousel = () => {
  // Client logos in randomized order
  const logos = [
    { name: "Skedda", image: skeddaLogo, width: "140px" },
    { name: "EZFacility", image: ezFacilityLogo, width: "160px" },
    { name: "KC Markham", image: kcMarkhamLogo, width: "120px" },
    { name: "Catchcorner by Sports Illustrated", image: catchcornerLogo, width: "180px" },
    { name: "Fit Courts", image: fitCourtsLogo, width: "130px" },
    { name: "Kings Court Sports Facility", image: kcLogo, width: "125px" },
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
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-16 object-contain"
                />
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
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
