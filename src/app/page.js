"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import PopularSectorsSection from "@/components/sections/home/PopularSectorsSection";
import SpaceCategoriesSection from "@/components/sections/home/SpaceCategoriesSection";
import FeaturedPropertiesSection from "@/components/sections/home/FeaturedPropertiesSection";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection";
import GetInTouchCtaSection from "@/components/sections/home/GetInTouchCtaSection";
import RequirementModal from "@/components/modals/RequirementModal";

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    initialData: {},
  });

  const handleOpenModal = (data = {}) => {
    setModalState({
      isOpen: true,
      initialData: data,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      initialData: {},
    });
  };

  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      {/* 1. Hero Section with Luxury Requirements Form */}
      <HeroSection />

      {/* 2. About Us Section */}
      <AboutSection />

      {/* 3. Popular Sectors in Noida (EXPLORE BY LOCATION) */}
      <PopularSectorsSection
        onSelectSector={(sector) =>
          handleOpenModal({
            area: sector.name,
            requirements: `Interested in office spaces in ${sector.name}`,
          })
        }
      />

      {/* 4. Find Your Ideal Space ("What are you looking for?") */}
      <SpaceCategoriesSection
        onSelectCategory={(category) =>
          handleOpenModal({
            spaceType: category.title,
            requirements: `Looking for ${category.title}`,
          })
        }
      />

      {/* 5. Premium Office Spaces in Noida (Featured Properties with Dynamic Filters) */}
      <FeaturedPropertiesSection
        onOpenForm={(property) =>
          handleOpenModal(
            property
              ? {
                  area: property.location,
                  spaceType: property.badge || "",
                  requirements: property.title
                    ? `Inquiring about ${property.title} (${property.area || ""}, ${property.location || ""})`
                    : "",
                }
              : {}
          )
        }
      />

      {/* 6. Why Choose Us Section ("More Than Spaces, A Partner in Your Growth") */}
      <WhyChooseUsSection />

      {/* 7. Get In Touch CTA Section ("The right workspace today, a bigger tomorrow") */}
      <GetInTouchCtaSection onOpenForm={() => handleOpenModal()} />

      {/* Luxury Popup Requirement Modal */}
      <RequirementModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialData={modalState.initialData}
      />
    </main>
  );
}




