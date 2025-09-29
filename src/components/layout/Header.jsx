import React, { useState } from "react";

const servicesData = {
  "Product Supply": {
    "Safety Solutions": {
      PPE: ["Helmets", "Gloves", "Shoes", "Coveralls"],
      "Safety Equipment": [
        "Safety harnesses",
        "Safety vests",
        "Fire extinguishers",
        "Traffic cones",
        "Barriers & signage",
      ],
    },
    "Industrial Electrical": {
      "Control Systems": [
        "Industrial Control & Sensors",
        "Wiring & Cable Management",
        "Panel Climate Control",
        "Power Components",
        "Panel Components",
        "Lighting Panels",
      ],
      "Power Distribution": [
        "Motor Control Centers (MCCs)",
        "MCC (Star Delta – Soft Starters)",
        "Distribution Panel Boards",
        "Synchronizing Panels",
        "Capacitor Banks",
        "Automatic Transfer Switch",
        "Automation Panels",
      ],
    },
    "Construction Materials": {
      "Pipes & Fittings": [
        "SS pipes",
        "CS pipes",
        "Cable trays",
        "Flanges",
        "Conduits",
        "Full range of fittings",
      ],
      "Electrical Fittings": [
        "Liquid Tight Connectors",
        "Liquid Tight Conduits",
        "EMT Connectors",
      ],
    },
    "Welding & Fastening": {
      "Welding Materials": [
        "Welding electrodes",
        "Alloys",
        "Fluxes",
        "Brazing Alloys",
        "Gouging carbons & consumables",
      ],
      Fasteners: ["Nuts", "Bolts", "Clamps", "Hose Clamps", "Wire Rope Clips"],
      Abrasives: ["Discs & abrasives", "Flap Discs", "Cutting Discs"],
    },
    "Tools & Equipment": {
      "Power Tools": ["Drills", "Welders", "Grinders", "Saws"],
      "Hand Tools": ["Wrenches", "Hammers", "Pliers", "Spanners"],
    },
    "Furniture Solutions": [
      "Camp furniture",
      "Staff & office furniture",
      "Executive furnishings & custom designs",
    ],
    "Office & Pantry Supplies": {
      "Office Supplies": ["Files", "Papers", "Toners", "Printers"],
      "Pantry Products": ["Stationery & pantry products"],
    },
  },
  "Equipment Rental": {
    "Heavy Equipment": ["Cranes", "Loaders", "Trucks", "Excavators"],
    "Light Equipment": ["Compressors", "Pumps", "Generators", "Tower lights"],
  },
  "Manpower Supply": {
    "Skilled Workers": ["Engineers", "Operators", "Welders", "Riggers"],
    "Semi-Skilled Workers": ["Drivers", "Mechanics", "Helpers"],
    "General Labor": ["General labor & support staff"],
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className=" backdrop-blur-md shadow-2xl font-serif rounded-3xl border border-white/20">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VoltAxis
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/50"
                >
                  {item.name}
                </a>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setServicesOpen(true);
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setServicesOpen(false);
                    setActiveCategory(null);
                    setActiveSubCategory(null);
                  }, 150);
                  setHoverTimeout(timeout);
                }}
              >
                <button className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/50 flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 z-50 flex"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                    }}
                  >
                    {/* Main Categories */}
                    <div className="w-56 py-2">
                      {Object.entries(servicesData).map(
                        ([mainCategory, subcategories]) => (
                          <div
                            key={mainCategory}
                            className="relative"
                            onMouseEnter={() => {
                              if (hoverTimeout) {
                                clearTimeout(hoverTimeout);
                                setHoverTimeout(null);
                              }
                              setActiveCategory(mainCategory);
                              setActiveSubCategory(null);
                            }}
                          >
                            <div className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer flex items-center justify-between">
                              {mainCategory}
                              <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Subcategories Panel */}
                    {activeCategory && (
                      <div
                        className="w-64 py-2 border-l border-gray-200/50 bg-white/98 backdrop-blur-md"
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                          setActiveCategory(activeCategory);
                        }}
                      >
                        <div className="px-4 py-2 text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50/50 sticky top-0">
                          {activeCategory}
                        </div>
                        {Array.isArray(servicesData[activeCategory]) ? (
                          <div className="px-2">
                            {servicesData[activeCategory].map((item, index) => (
                              <a
                                key={index}
                                href={`#${activeCategory
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 font-serif rounded-lg mx-2"
                                onClick={() => {
                                  setServicesOpen(false);
                                  setActiveCategory(null);
                                  setActiveSubCategory(null);
                                  if (hoverTimeout) {
                                    clearTimeout(hoverTimeout);
                                    setHoverTimeout(null);
                                  }
                                }}
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="px-2 max-h-80 overflow-y-auto">
                            {Object.entries(servicesData[activeCategory]).map(
                              ([subCategory, items]) => (
                                <div
                                  key={subCategory}
                                  className="mb-2 relative"
                                  onMouseEnter={() => {
                                    if (hoverTimeout) {
                                      clearTimeout(hoverTimeout);
                                      setHoverTimeout(null);
                                    }
                                    setActiveSubCategory(subCategory);
                                  }}
                                >
                                  <div className="px-4 py-2 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer flex items-center justify-between rounded-lg mx-2">
                                    {subCategory}
                                    {Array.isArray(items) &&
                                      items.length > 0 && (
                                        <svg
                                          className="w-3 h-3 text-gray-400"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Items Panel (Third Level) */}
                    {activeCategory &&
                      activeSubCategory &&
                      servicesData[activeCategory][activeSubCategory] &&
                      Array.isArray(
                        servicesData[activeCategory][activeSubCategory]
                      ) && (
                        <div
                          className="w-72 py-2 border-l border-gray-200/50 bg-white/99 backdrop-blur-md rounded-r-xl"
                          onMouseEnter={() => {
                            if (hoverTimeout) {
                              clearTimeout(hoverTimeout);
                              setHoverTimeout(null);
                            }
                            setActiveSubCategory(activeSubCategory);
                          }}
                        >
                          <div className="px-4 py-2 text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50/50 sticky top-0">
                            {activeSubCategory}
                          </div>
                          <div className="px-2 max-h-80 overflow-y-auto">
                            <div className="space-y-1">
                              {servicesData[activeCategory][
                                activeSubCategory
                              ].map((item, index) => (
                                <a
                                  key={index}
                                  href={`#${activeSubCategory
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 transition-all duration-300 font-serif rounded-lg mx-2"
                                  onClick={() => {
                                    setServicesOpen(false);
                                    setActiveCategory(null);
                                    setActiveSubCategory(null);
                                    if (hoverTimeout) {
                                      clearTimeout(hoverTimeout);
                                      setHoverTimeout(null);
                                    }
                                  }}
                                >
                                  • {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-xl hover:bg-white/50 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-white/30 backdrop-blur-sm rounded-2xl mt-2 border border-white/20">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile Services */}
                <div className="space-y-2">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl text-base font-medium hover:bg-white/50 transition-all duration-300 flex items-center justify-between"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
                      {Object.entries(servicesData).map(
                        ([mainCategory, subcategories]) => (
                          <div key={mainCategory}>
                            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide py-1">
                              {mainCategory}
                            </div>
                            {Array.isArray(subcategories) ? (
                              <div>
                                {subcategories
                                  .slice(0, 2)
                                  .map((item, index) => (
                                    <a
                                      key={index}
                                      href={`#${mainCategory
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="block text-gray-700 hover:text-blue-600 px-2 py-1 rounded-xl text-sm font-medium hover:bg-white/50 transition-all duration-300 font-serif"
                                      onClick={() => {
                                        setServicesOpen(false);
                                        setIsOpen(false);
                                      }}
                                    >
                                      • {item}
                                    </a>
                                  ))}
                              </div>
                            ) : (
                              <div>
                                {Object.entries(subcategories)
                                  .slice(0, 2)
                                  .map(([subCategory, items]) => (
                                    <a
                                      key={subCategory}
                                      href={`#${subCategory
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="block text-gray-700 hover:text-blue-600 px-2 py-1 rounded-xl text-sm font-medium hover:bg-white/50 transition-all duration-300 font-serif"
                                      onClick={() => {
                                        setServicesOpen(false);
                                        setIsOpen(false);
                                      }}
                                    >
                                      • {subCategory}
                                    </a>
                                  ))}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-medium mt-3 hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
