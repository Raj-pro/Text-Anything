export const companyInfo = {
  name: "ABC Lighting Corp",
  locations: [
    {
      address: "123 Solar Way, Phoenix, AZ 85001",
      phone: "(602) 555-0123"
    },
    {
      address: "456 Energy Blvd, Denver, CO 80201",
      phone: "(303) 555-0456"
    }
  ],
  hours: {
    weekdays: "8:00 AM - 6:00 PM MST",
    saturday: "9:00 AM - 4:00 PM MST",
    sunday: "Closed"
  }
};

export const products = [
  {
    id: "street-light",
    name: "SolarMax Pro Street Light",
    specs: {
      height: "20 feet",
      power: "100W",
      batteryLife: "12-14 hours per charge",
      lumens: "10,000",
      lifespan: "50,000 hours",
      warranty: "5 years"
    },
    description: "Commercial-grade solar street light with advanced motion sensing and dusk-to-dawn operation. Features high-efficiency monocrystalline solar panels and LiFePO4 battery technology.",
    price: "$1,299.99",
    imageUrl: "src/image/copilot-1.png"
  },
  {
    id: "driveway-light",
    name: "PathBrite Solar Driveway Light",
    specs: {
      height: "24 inches",
      power: "15W",
      batteryLife: "10-12 hours per charge",
      lumens: "1,200",
      lifespan: "30,000 hours",
      warranty: "3 years"
    },
    description: "Elegant driveway lighting solution with weatherproof aluminum construction and crystalline solar panel. Includes auto on/off and adjustable brightness settings.",
    price: "$129.99",
    imageUrl: "src/image/copilot-2.png"
  },
  {
    id: "wall-light",
    name: "LumiWall Solar Security Light",
    specs: {
      dimensions: "12\" x 8\" x 6\"",
      power: "30W",
      batteryLife: "8-10 hours per charge",
      lumens: "3,000",
      lifespan: "40,000 hours",
      warranty: "2 years"
    },
    description: "Modern wall-mounted solar light with 180° motion detection and three adjustable lighting modes. Perfect for entrances, garages, and pathways.",
    price: "$199.99",
    imageUrl: "src/image/copilot-3.png"
  }
];
