import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ServiceCard from "@/components/ui/ServiceCard";
import { FiTruck, FiSettings, FiUsers } from "react-icons/fi";

export function TimelineDemo() {
  // Define service data in a clean, reusable format
  const servicesData = [
    {
      title: "Product Supply",
      icon: <FiTruck className="text-white text-xl" />,
      iconColor: "from-blue-500 to-purple-500",
      descriptions: [
        "Comprehensive range of construction materials, industrial equipment, and safety products for all project needs",
      ],
      features: [
        "Safety Solutions (PPE, helmets, gloves, fire extinguishers)",
        "Industrial & Electrical Components (MCCs, panels, sensors)",
        "Construction Materials (SS/CS pipes, fittings, flanges)",
        "Welding & Fastening (electrodes, bolts, cutting discs)",
        "Tools & Equipment (power tools, hand tools)",
      ],
      images: [
        {
          src: "https://cdn-hohnl.nitrocdn.com/zCsIvuwUzbOjNDNHabecBgDuCGXVjLcB/assets/images/optimized/rev-4b1fec3/prismcalibration.com/wp-content/uploads/2020/10/safety-product.jpg",
          alt: "safety equipment",
        },
        {
          src: "https://mac-mess.cn/wp-content/uploads/2024/11/324661545-768x512.jpg",
          alt: "industrial equipment",
        },
        {
          src: "https://constrofacilitator.com/wp-content/uploads/2021/09/Construction-Materials.jpg.webp",
          alt: "construction materials",
        },
        {
          src: "https://weldingsimulator.co.in/wp-content/webp-express/webp-images/uploads/2022/07/Tool-storage-768x397.jpg.webp",
          alt: "welding tools",
        },
      ],
    },
    {
      title: "Equipment Rental",
      icon: <FiSettings className="text-white text-xl" />,
      iconColor: "from-green-500 to-teal-500",
      descriptions: [
        "Heavy and light equipment rental services for construction, industrial, and infrastructure projects across Saudi Arabia",
        "Our modern fleet ensures reliable performance and efficiency for projects of all scales, from small commercial builds to large industrial developments.",
      ],
      features: [
        "Heavy Equipment: Cranes, Excavators, Loaders, Trucks",
        "Light Equipment: Compressors, Pumps, Generators",
        "Tower Lights and Support Equipment",
      ],
      images: [
        {
          src: "https://static.wixstatic.com/media/7cb6b2_d06b40cf624c495d9a2ebf3ad0d591f9~mv2.png/v1/fill/w_925,h_616,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb6b2_d06b40cf624c495d9a2ebf3ad0d591f9~mv2.png",
          alt: "construction crane",
        },
        {
          src: "https://image.made-in-china.com/202f0j00FEWfHsSdMZpy/33-Tons-33t-PC360-Crawler-Excavator.webp",
          alt: "excavator",
        },
        {
          src: "https://www.hyundai-ce.eu/-/media/hyundai/images/hyundai-ce-eu/products/articulated-dump-trucks/hyundai-articulated-dump-trucks-adt.jpg?mw=1200&hash=9E91DF3176CB33FDEB7E31F29CD99151",
          alt: "construction trucks",
        },
        {
          src: "https://www.ringpower.com/media/5ayhz1gv/generator_exterior_23.png?entropycrop=128&width=1000",
          alt: "generators",
        },
      ],
    },
    {
      title: "Manpower Supply",
      icon: <FiUsers className="text-white text-xl" />,
      iconColor: "from-purple-500 to-pink-500",
      descriptions: [
        "Skilled, semi-skilled, and general workforce solutions for construction and industrial projects",
      ],
      features: [
        "Skilled Workers: Engineers, Operators, Welders, Riggers",
        "Semi-Skilled Workers: Drivers, Mechanics, Helpers",
        "General Labor & Support Staff",
        "Project-Based Workforce Deployment",
        "Certified and Experienced Personnel",
      ],
      images: [
        {
          src: "https://www.infra.ratepersqft.com/wp-content/uploads/2025/01/types-of-construction-workers%E2%80%8B-768x432.webp",
          alt: "construction workers",
        },
        {
          src: "https://vernlewis.com/wp-content/uploads/2025/07/welder-working-768x439.jpg",
          alt: "welders at work",
        },
        {
          src: "https://mecciengineers.in/wp-content/uploads/2024/01/businessmen-hands-white-table-with-documents-drafts-1-600x600.jpg",
          alt: "engineers planning",
        },
        {
          src: "https://www.rssinc.com/wp-content/uploads/2023/03/machine-operators-job-description.jpg",
          alt: "skilled operators",
        },
      ],
    },
  ];

  // Convert services data to Timeline format
  const data = servicesData.map((service) => ({
    title: service.title,
    content: (
      <ServiceCard
        title={service.title}
        descriptions={service.descriptions}
        features={service.features}
        images={service.images}
        icon={service.icon}
        iconColor={service.iconColor}
      />
    ),
  }));
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <TimelineDemo />
    </>
  );
}
