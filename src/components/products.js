const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://images.unsplash.com/photo-1587301353899-fa2cfc2b34d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://images.unsplash.com/photo-1526510096283-b0b3b6cac327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://images.unsplash.com/photo-1667543241047-cd7afd1722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "7",
    name: "Samsung Galaxy S21 Ultra",
    image:
      "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Samsung Galaxy S21 Ultra is a flagship smartphone with a stunning 6.8-inch Dynamic AMOLED display, a powerful Exynos 2100 processor, and a versatile quad-camera system.",
    brand: "Samsung",
    category: "Electronics",
    price: 1199.99,
    countInStock: 5,
    rating: 4.8,
    numReviews: 24,
  },
  {
    _id: "8",
    name: "Apple MacBook Pro 16-inch",
    image:
      "https://images.unsplash.com/photo-1639087595550-e9770a85f8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Apple MacBook Pro 16-inch features a stunning Retina display, a powerful Intel Core i9 processor, up to 64GB of RAM, and up to 8TB of SSD storage, making it the ultimate professional laptop.",
    brand: "Apple",
    category: "Electronics",
    price: 2399.99,
    countInStock: 8,
    rating: 4.9,
    numReviews: 30,
  },
  {
    _id: "9",
    name: "LG OLED CX Series",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416732cv13d.jpg",
    description:
      "The LG OLED CX Series is a premium smart TV with a stunning 4K OLED display, the Alpha 9 Gen 3 processor, Dolby Vision IQ, and ThinQ AI for smart features.",
    brand: "LG",
    category: "Electronics",
    price: 1999.99,
    countInStock: 3,
    rating: 4.7,
    numReviews: 15,
  },
  {
    _id: "10",
    name: "Bose SoundLink Revolve+",
    image:
      "https://images.unsplash.com/photo-1622086968871-b18e3f4ddf62?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Bose SoundLink Revolve+ is a portable Bluetooth speaker with 360-degree sound, a water-resistant design, and up to 16 hours of battery life.",
    brand: "Bose",
    category: "Electronics",
    price: 299.99,
    countInStock: 20,
    rating: 4.6,
    numReviews: 18,
  },
];

export default products;
