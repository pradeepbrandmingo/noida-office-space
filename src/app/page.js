import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import PopularSectorsSection from "@/components/sections/home/PopularSectorsSection";
import SpaceCategoriesSection from "@/components/sections/home/SpaceCategoriesSection";
import FeaturedPropertiesSection from "@/components/sections/home/FeaturedPropertiesSection";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection";
import GetInTouchCtaSection from "@/components/sections/home/GetInTouchCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      {/* 1. Hero Section with Luxury Requirements Form */}
      <HeroSection />

      {/* 2. About Us Section */}
      <AboutSection />

      {/* 3. Popular Sectors in Noida (Backend Data Ready) */}
      <PopularSectorsSection />

      {/* 4. Find Your Ideal Space ("What are you looking for?") */}
      <SpaceCategoriesSection />

      {/* 5. Premium Office Spaces in Noida (Featured Properties with Dynamic Filters) */}
      <FeaturedPropertiesSection />

      {/* 6. Why Choose Us Section ("More Than Spaces, A Partner in Your Growth") */}
      <WhyChooseUsSection />

      {/* 7. Get In Touch CTA Section ("The right workspace today, a bigger tomorrow") */}
      <GetInTouchCtaSection />
    </main>
  );
}



