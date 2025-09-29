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
          src: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "safety equipment",
        },
        {
          src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "industrial equipment",
        },
        {
          src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "construction materials",
        },
        {
          src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
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
          src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "construction crane",
        },
        {
          src: "https://images.unsplash.com/photo-1597149758814-e35c99bf4c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "excavator",
        },
        {
          src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "construction trucks",
        },
        {
          src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
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
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "construction workers",
        },
        {
          src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "welders at work",
        },
        {
          src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
          alt: "engineers planning",
        },
        {
          src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
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
