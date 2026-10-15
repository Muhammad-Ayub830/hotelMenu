export type Dish = {
  id: string;
  name: string;
  price: number;
  description: string;
  emoji: string;
  model: string;
};

const MODEL = "/models/dish.glb"; // same model for every dish for now

export const dishes: Dish[] = [
  { id: "biryani", name: "Chicken Biryani", price: 650, emoji: "🍛", model: MODEL, description: "Fragrant basmati rice layered with spiced chicken." },
  { id: "karahi", name: "Chicken Karahi", price: 1400, emoji: "🍲", model: MODEL, description: "Wok-cooked chicken with tomatoes, ginger and green chilies." },
  { id: "burger", name: "Zinger Burger", price: 550, emoji: "🍔", model: MODEL, description: "Crispy fried chicken fillet with mayo and lettuce." },
  { id: "pizza", name: "Fajita Pizza", price: 1200, emoji: "🍕", model: MODEL, description: "Stone-baked pizza with chicken fajita topping." },
  { id: "pasta", name: "Creamy Pasta", price: 850, emoji: "🍝", model: MODEL, description: "Penne in white garlic sauce with grilled chicken." },
  { id: "dessert", name: "Chocolate Brownie", price: 450, emoji: "🍫", model: MODEL, description: "Warm brownie served with vanilla ice cream." },
];