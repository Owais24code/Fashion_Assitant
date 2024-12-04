export const fashionResponses = {
  casual: {
    text: "For a casual yet stylish look, here are my top recommendations:",
    suggestions: [
      {
        category: "Tops",
        items: [
          {
            brand: "Uniqlo",
            item: "AIRism Cotton Oversized T-shirt",
            price: "$19.90",
          },
          { brand: "Everlane", item: "The Premium-Weight Crew", price: "$48" },
        ],
      },
      {
        category: "Bottoms",
        items: [
          { brand: "Levi's", item: "511™ Slim Fit Jeans", price: "$98" },
          { brand: "Uniqlo", item: "Smart Ankle Pants", price: "$39.90" },
        ],
      },
      {
        category: "Footwear",
        items: [
          { brand: "Nike", item: "Air Max 270", price: "$150" },
          { brand: "Adidas", item: "Stan Smith", price: "$85" },
        ],
      },
    ],
  },
  formal: {
    text: "For a sophisticated formal ensemble, consider these premium pieces:",
    suggestions: [
      {
        category: "Suits",
        items: [
          { brand: "Hugo Boss", item: "Regular-fit wool suit", price: "$895" },
          { brand: "Suitsupply", item: "Napoli Navy Suit", price: "$599" },
        ],
      },
      {
        category: "Shirts",
        items: [
          {
            brand: "Thomas Pink",
            item: "Classic Fit Dress Shirt",
            price: "$145",
          },
          {
            brand: "Charles Tyrwhitt",
            item: "Non-Iron Twill Shirt",
            price: "$99",
          },
        ],
      },
      {
        category: "Shoes",
        items: [
          { brand: "Allen Edmonds", item: "Park Avenue Oxford", price: "$425" },
          { brand: "Magnanni", item: "Federico Oxford", price: "$395" },
        ],
      },
    ],
  },
  streetwear: {
    text: "For that perfect streetwear look, here's what's trending:",
    suggestions: [
      {
        category: "Tops",
        items: [
          { brand: "Supreme", item: "Box Logo Hoodie", price: "$168" },
          { brand: "BAPE", item: "Graphic Print T-Shirt", price: "$115" },
        ],
      },
      {
        category: "Bottoms",
        items: [
          { brand: "Nike", item: "Tech Fleece Joggers", price: "$110" },
          { brand: "Fear of God", item: "Essentials Sweatpants", price: "$90" },
        ],
      },
      {
        category: "Footwear",
        items: [
          { brand: "Nike", item: "Air Jordan 1 High", price: "$170" },
          { brand: "Adidas", item: "Yeezy Boost 350", price: "$220" },
        ],
      },
    ],
  },
  athletic: {
    text: "For peak performance and style in your workouts:",
    suggestions: [
      {
        category: "Training Wear",
        items: [
          { brand: "Nike", item: "Dri-FIT Training Top", price: "$35" },
          { brand: "Lululemon", item: "Metal Vent Tech Shirt", price: "$78" },
        ],
      },
      {
        category: "Bottoms",
        items: [
          { brand: "Nike", item: "Pro Training Shorts", price: "$35" },
          {
            brand: "Under Armour",
            item: "Rush Compression Leggings",
            price: "$65",
          },
        ],
      },
      {
        category: "Footwear",
        items: [
          { brand: "Brooks", item: "Ghost 14 Running Shoes", price: "$130" },
          { brand: "Nike", item: "Metcon 7 Training Shoes", price: "$130" },
        ],
      },
    ],
  },
  default:
    "I'd be happy to help you find the perfect fashion items. What style interests you? I can recommend casual, formal, streetwear, or athletic wear.",
};
