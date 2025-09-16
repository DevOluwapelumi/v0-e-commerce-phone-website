// Mock phone API data - replace with real API calls
export interface Phone {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  colors: string[]
  storage: string[]
  features: string[]
  description: string
  specifications: {
    display: string
    processor: string
    camera: string
    battery: string
    os: string
  }
}

// Mock data - in production, this would come from your chosen API
const mockPhones: Phone[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    originalPrice: 1099,
    image: "/iphone-15-pro-premium-smartphone.jpg",
    rating: 4.9,
    reviews: 1247,
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    features: ["5G", "Face ID", "Wireless Charging", "Water Resistant"],
    description: "The most advanced iPhone ever with titanium design and powerful A17 Pro chip.",
    specifications: {
      display: "6.1-inch Super Retina XDR",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      os: "iOS 17",
    },
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    image: "/iphone-15-pro-max-titanium-premium-smartphone.jpg",
    rating: 4.9,
    reviews: 2156,
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    features: ["5G", "Face ID", "Wireless Charging", "Water Resistant", "Action Button"],
    description: "The ultimate iPhone with the largest display and longest battery life.",
    specifications: {
      display: "6.7-inch Super Retina XDR",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto with 5x zoom",
      battery: "Up to 29 hours video playback",
      os: "iOS 17",
    },
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: 799,
    image: "/iphone-15-in-pink-color.jpg",
    rating: 4.8,
    reviews: 1834,
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
    storage: ["128GB", "256GB", "512GB"],
    features: ["5G", "Face ID", "Wireless Charging", "Water Resistant", "USB-C"],
    description: "The new iPhone 15 with USB-C and Dynamic Island.",
    specifications: {
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic chip",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "Up to 20 hours video playback",
      os: "iOS 17",
    },
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    image: "/samsung-galaxy-s24-ultra-black-premium-smartphone.jpg",
    rating: 4.8,
    reviews: 1456,
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    storage: ["256GB", "512GB", "1TB"],
    features: ["5G", "S Pen", "Wireless Charging", "Water Resistant", "AI Features"],
    description: "The ultimate Galaxy experience with built-in S Pen and AI capabilities.",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto",
      battery: "5000mAh with 45W fast charging",
      os: "Android 14 with One UI 6.1",
    },
  },
  {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 799,
    image: "/samsung-galaxy-s24-smartphone.jpg",
    rating: 4.7,
    reviews: 892,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    storage: ["128GB", "256GB", "512GB"],
    features: ["5G", "Galaxy AI", "Wireless Charging", "Water Resistant"],
    description: "Galaxy AI meets premium design in Samsung's flagship smartphone.",
    specifications: {
      display: "6.2-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "4000mAh with 25W fast charging",
      os: "Android 14 with One UI 6.1",
    },
  },
  {
    id: "samsung-galaxy-s24-plus",
    name: "Samsung Galaxy S24+",
    brand: "Samsung",
    price: 999,
    image: "/samsung-galaxy-s24-plus-in-violet-color.jpg",
    rating: 4.7,
    reviews: 743,
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    storage: ["256GB", "512GB"],
    features: ["5G", "Galaxy AI", "Wireless Charging", "Water Resistant"],
    description: "The perfect balance of size and performance with Galaxy AI.",
    specifications: {
      display: "6.7-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "4900mAh with 45W fast charging",
      os: "Android 14 with One UI 6.1",
    },
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 999,
    originalPrice: 1099,
    image: "/google-pixel-8-pro-camera-smartphone.jpg",
    rating: 4.8,
    reviews: 1123,
    colors: ["Obsidian", "Porcelain", "Bay"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    features: ["5G", "Pure Android", "AI Photography", "Wireless Charging", "Magic Eraser"],
    description: "The most advanced Pixel with pro-level camera and AI features.",
    specifications: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      battery: "5050mAh with 30W fast charging",
      os: "Android 14",
    },
  },
  {
    id: "google-pixel-8",
    name: "Google Pixel 8",
    brand: "Google",
    price: 699,
    originalPrice: 799,
    image: "/google-pixel-8-in-hazel-color.jpg",
    rating: 4.7,
    reviews: 634,
    colors: ["Obsidian", "Hazel", "Rose"],
    storage: ["128GB", "256GB"],
    features: ["5G", "Pure Android", "AI Photography", "Wireless Charging"],
    description: "Pure Google experience with advanced AI photography capabilities.",
    specifications: {
      display: "6.2-inch Actua display",
      processor: "Google Tensor G3",
      camera: "50MP Main + 12MP Ultra Wide",
      battery: "4575mAh with 30W fast charging",
      os: "Android 14",
    },
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    image: "/oneplus-12-smartphone-in-emerald-green.jpg",
    rating: 4.6,
    reviews: 423,
    colors: ["Silky Black", "Flowy Emerald", "Sunset Dune"],
    storage: ["256GB", "512GB"],
    features: ["5G", "Fast Charging", "OxygenOS", "Gaming Mode"],
    description: "Never Settle with flagship performance and ultra-fast charging.",
    specifications: {
      display: "6.82-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 64MP Periscope + 48MP Ultra Wide",
      battery: "5400mAh with 100W SuperVOOC",
      os: "OxygenOS 14 based on Android 14",
    },
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R",
    brand: "OnePlus",
    price: 599,
    image: "/oneplus-12r-smartphone-in-blue.jpg",
    rating: 4.5,
    reviews: 312,
    colors: ["Cool Blue", "Iron Gray"],
    storage: ["128GB", "256GB"],
    features: ["5G", "Fast Charging", "OxygenOS", "Gaming Mode"],
    description: "Flagship performance at an accessible price point.",
    specifications: {
      display: "6.78-inch AMOLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main + 8MP Ultra Wide + 2MP Macro",
      battery: "5500mAh with 100W SuperVOOC",
      os: "OxygenOS 14 based on Android 14",
    },
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 1199,
    image: "/xiaomi-14-ultra-with-large-camera-module.jpg",
    rating: 4.7,
    reviews: 567,
    colors: ["Black", "White"],
    storage: ["512GB", "1TB"],
    features: ["5G", "Leica Camera", "Wireless Charging", "IP68"],
    description: "Photography flagship with Leica-tuned cameras and premium design.",
    specifications: {
      display: "6.73-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Periscope + 50MP Telephoto",
      battery: "5300mAh with 90W fast charging",
      os: "MIUI 15 based on Android 14",
    },
  },
  {
    id: "xiaomi-14",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 799,
    image: "/xiaomi-14-smartphone-in-white.jpg",
    rating: 4.6,
    reviews: 445,
    colors: ["Black", "White", "Green", "Pink"],
    storage: ["256GB", "512GB"],
    features: ["5G", "Leica Camera", "Wireless Charging", "IP68"],
    description: "Compact flagship with Leica photography and premium materials.",
    specifications: {
      display: "6.36-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Telephoto",
      battery: "4610mAh with 90W fast charging",
      os: "MIUI 15 based on Android 14",
    },
  },
  {
    id: "oppo-find-x7-ultra",
    name: "OPPO Find X7 Ultra",
    brand: "OPPO",
    price: 1099,
    image: "/oppo-find-x7-ultra-with-hasselblad-camera.jpg",
    rating: 4.6,
    reviews: 289,
    colors: ["Ocean Blue", "Sepia Brown"],
    storage: ["256GB", "512GB"],
    features: ["5G", "Hasselblad Camera", "Wireless Charging", "IP68"],
    description: "Photography-focused flagship with Hasselblad collaboration.",
    specifications: {
      display: "6.82-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Periscope + 50MP Telephoto",
      battery: "5000mAh with 100W SuperVOOC",
      os: "ColorOS 14 based on Android 14",
    },
  },
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 999,
    image: "/vivo-x100-pro-with-zeiss-camera.jpg",
    rating: 4.5,
    reviews: 234,
    colors: ["Asteroid Black", "Sunset Orange"],
    storage: ["256GB", "512GB"],
    features: ["5G", "Zeiss Camera", "Wireless Charging", "IP68"],
    description: "Premium smartphone with Zeiss optics and flagship performance.",
    specifications: {
      display: "6.78-inch LTPO AMOLED",
      processor: "MediaTek Dimensity 9300",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Periscope",
      battery: "5400mAh with 100W fast charging",
      os: "Funtouch OS 14 based on Android 14",
    },
  },
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    price: 399,
    image: "/nothing-phone-2a-with-transparent-back-and-led-lig.jpg",
    rating: 4.4,
    reviews: 567,
    colors: ["Black", "White"],
    storage: ["128GB", "256GB"],
    features: ["5G", "Glyph Interface", "Wireless Charging", "Nothing OS"],
    description: "Unique design with Glyph Interface and clean Nothing OS experience.",
    specifications: {
      display: "6.7-inch AMOLED",
      processor: "MediaTek Dimensity 7200 Pro",
      camera: "50MP Main + 50MP Ultra Wide",
      battery: "5000mAh with 45W fast charging",
      os: "Nothing OS 2.5 based on Android 14",
    },
  },
  {
    id: "asus-rog-phone-8",
    name: "ASUS ROG Phone 8",
    brand: "ASUS",
    price: 1099,
    image: "/asus-rog-phone-8-gaming-smartphone-with-rgb-lights.jpg",
    rating: 4.7,
    reviews: 445,
    colors: ["Phantom Black", "Storm White"],
    storage: ["256GB", "512GB", "1TB"],
    features: ["5G", "Gaming Mode", "AirTriggers", "ROG Vision", "165Hz Display"],
    description: "Ultimate gaming smartphone with advanced cooling and gaming features.",
    specifications: {
      display: "6.78-inch AMOLED 165Hz",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 13MP Ultra Wide + 5MP Macro",
      battery: "6000mAh with 65W HyperCharge",
      os: "ROG UI based on Android 14",
    },
  },
  {
    id: "sony-xperia-1-vi",
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    price: 1199,
    image: "/sony-xperia-1-vi-with-professional-camera-features.jpg",
    rating: 4.5,
    reviews: 178,
    colors: ["Black", "Platinum Silver", "Khaki Green"],
    storage: ["256GB", "512GB"],
    features: ["5G", "4K Display", "Pro Camera", "3.5mm Jack", "IP68"],
    description: "Professional-grade smartphone with 4K display and advanced camera controls.",
    specifications: {
      display: "6.5-inch 4K OLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "5000mAh with 30W fast charging",
      os: "Android 14",
    },
  },
]

export async function searchPhones(query: string): Promise<Phone[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (!query.trim()) {
    return mockPhones
  }

  const searchTerm = query.toLowerCase()
  return mockPhones.filter(
    (phone) =>
      phone.name.toLowerCase().includes(searchTerm) ||
      phone.brand.toLowerCase().includes(searchTerm) ||
      phone.features.some((feature) => feature.toLowerCase().includes(searchTerm)),
  )
}

export async function getPhoneById(id: string): Promise<Phone | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockPhones.find((phone) => phone.id === id) || null
}

export async function getPhonesByBrand(brand: string): Promise<Phone[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return mockPhones.filter((phone) => phone.brand.toLowerCase() === brand.toLowerCase())
}

export async function getAllPhones(): Promise<Phone[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockPhones
}
