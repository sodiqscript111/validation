export interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  description: string;
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Leather Jacket",
    price: "$250",
    images: [
      "/leather_jacket1.png",
      "/leather_jacket2.png",
      "/leather.png"
    ],
    description: "A premium leather jacket crafted from high-quality materials. Designed for durability and style, this jacket features a classic cut that fits perfectly for any occasion. The texture improves with age, making it a timeless addition to your wardrobe.",
    faqs: [
      { question: "Material", answer: "100% Genuine Leather" },
      { question: "Care Instructions", answer: "Professional leather clean only." },
      { question: "Fit", answer: "True to size. Model is 6'1\" wearing size L." }
    ]
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: "$180",
    images: [
      "/nike_jeans.png",
      "/nike_jeans_hover.png"
    ],
    description: "Classic denim jeans with a modern fit. These jeans are made from durable denim fabric that offers both comfort and style. Perfect for everyday wear, they feature reinforced stitching and a versatile wash.",
    faqs: [
      { question: "Material", answer: "98% Cotton, 2% Elastane" },
      { question: "Care Instructions", answer: "Machine wash cold inside out." },
      { question: "Fit", answer: "Slim fit." }
    ]
  },
  {
    id: 3,
    name: "Winter Coat",
    price: "$320",
    images: [
      "/coat.png",
      "/coat_hover.png"
    ],
    description: "Stay warm in style with our heavy-duty winter coat. Insulated for maximum warmth, this coat features a water-resistant outer shell and a cozy lining. Essential for cold weather conditions.",
    faqs: [
      { question: "Material", answer: "Polyester blend with down filling" },
      { question: "Waterproof", answer: "Water-resistant coating." },
      { question: "Temperature Rating", answer: "Suitable for temperatures down to -10°C." }
    ]
  },
  {
    id: 4,
    name: "Cowhide Bag",
    price: "$450",
    images: [
      "/cowbag.png",
      "/cowbaghover.png",
      "/cowbagcloseup.png"
    ],
    description: "Exquisite cowhide bag with unique patterns. Each bag is one-of-a-kind due to the natural variations in the hide. Spacious enough for your daily essentials and built to last a lifetime.",
    faqs: [
      { question: "Material", answer: "100% Cowhide Leather" },
      { question: "Dimensions", answer: "14\" x 10\" x 4\"" },
      { question: "Closure", answer: "Magnetic snap closure." }
    ]
  },
  {
    id: 5,
    name: "Leather Belt",
    price: "$90",
    images: [
      "/chillbelt.png",
      "/chillbeltfront.png"
    ],
    description: "Minimalist leather belt with a sleek buckle. The perfect accessory to complete any outfit. Made from full-grain leather that develops a beautiful patina over time.",
    faqs: [
      { question: "Material", answer: "Full-grain Leather" },
      { question: "Width", answer: "1.5 inches" },
      { question: "Sizing", answer: "Order one size up from your pant size." }
    ]
  },
  {
    id: 6,
    name: "Designer Skirt",
    price: "$280",
    images: [
      "/skirt.png",
      "/skirt_front.png"
    ],
    description: "Elegant skirt with a unique silhouette. This designer piece features intricate detailing and a flattering cut. Made from premium fabric that drapes beautifully.",
    faqs: [
      { question: "Material", answer: "Silk and Wool blend" },
      { question: "Care", answer: "Dry clean only." },
      { question: "Length", answer: "Midi length." }
    ]
  },
  {
    id: 7,
    name: "Snake Pattern",
    price: "$120",
    images: [
      "/snake.png",
      "/snake_hover.png"
    ],
    description: "Bold snake pattern accessory. Add a touch of edge to your look with this statement piece. High-quality print on durable material.",
    faqs: [
      { question: "Material", answer: "Synthetic Leather" },
      { question: "Pattern", answer: "Embossed snake print." },
      { question: "Style", answer: "Unisex." }
    ]
  },
  {
    id: 8,
    name: "Stitched Gown",
    price: "$550",
    images: [
      "/stichgown.png",
      "/stichgown_closeup.png"
    ],
    description: "Hand-stitched gown for special occasions. This masterpiece features delicate embroidery and a flowing silhouette. A true work of art for your wardrobe.",
    faqs: [
      { question: "Material", answer: "Chiffon and Lace" },
      { question: "Construction", answer: "Hand-finished details." },
      { question: "Occasion", answer: "Evening wear / Gala." }
    ]
  },
  {
    id: 9,
    name: "Accessories",
    price: "$80",
    images: [
      "/braceletonhand.png",
      "/braceletcloseup.png"
    ],
    description: "Curated set of accessories to elevate your style. Includes bracelets and rings designed to be stacked or worn individually.",
    faqs: [
      { question: "Material", answer: "Sterling Silver / Gold Plated" },
      { question: "Allergies", answer: "Nickel-free." },
      { question: "Set Includes", answer: "3 bracelets, 2 rings." }
    ]
  }
];
