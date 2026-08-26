/**
 * Single source of truth for the Coffee Heaven menu.
 * Prices are strings so multi-size items render exactly as provided (e.g. "₹90 / ₹120 / ₹160").
 */

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb?: string;
  items: MenuItem[];
  /** Add-on / info lines shown under the category. */
  notes?: string[];
};

export const menu: MenuCategory[] = [
  {
    id: "shakes",
    label: "Shakes",
    blurb: "Thick, cold and blended to order.",
    items: [
      { name: "Strawberry", price: "₹130 / ₹160" },
      { name: "Caramel", price: "₹120 / ₹150" },
      { name: "Butterscotch", price: "₹120 / ₹150" },
      { name: "Vanilla", price: "₹130 / ₹160" },
      { name: "Hazelnut", price: "₹120 / ₹150" },
      { name: "Blueberry", price: "₹130 / ₹160" },
      { name: "Bubblegum", price: "₹130 / ₹160" },
      { name: "Toffee Nut", price: "₹120 / ₹150" },
      { name: "Strawberry Blueberry", price: "₹140 / ₹180" },
      { name: "Chocolate Cookie", price: "₹130 / ₹160" },
      { name: "Choco-Chocolate Cookie", price: "₹130 / ₹160" },
      { name: "Chocolate Shake", price: "₹130 / ₹150" },
      { name: "Cheesecake", price: "₹130 / ₹160" },
    ],
    notes: [
      "Add on to Strawberry: popping boba — ₹50",
      "Add on to Cheesecake: blueberry, mango or strawberry — ₹30",
    ],
  },
  {
    id: "cold-coffee",
    label: "Cold Coffee",
    blurb: "Our most-loved corner of the menu.",
    items: [
      { name: "Frappe", price: "₹120 / ₹150" },
      { name: "Strong Frappe", price: "₹140 / ₹180" },
      { name: "Choco Chip", price: "₹150 / ₹200" },
      { name: "Choco Chip Mocha", price: "₹160 / ₹220" },
      { name: "Kitkat Coffee", price: "₹150 / ₹190" },
      { name: "Oreo Coffee", price: "₹130 / ₹160" },
      { name: "Irish Coffee", price: "₹140 / ₹180" },
      { name: "Cheesecake Coffee", price: "₹140 / ₹180" },
      { name: "Caramel", price: "₹140 / ₹180" },
      { name: "Hazelnut", price: "₹140 / ₹180" },
      { name: "Caramel + Hazelnut", price: "₹150 / ₹190" },
      { name: "Hazelnut Irish Frappe", price: "₹150 / ₹190" },
      { name: "Biscoff Frappe", price: "₹160 / ₹220" },
    ],
    notes: ["For strong coffee, add an extra espresso shot — ₹30"],
  },
  {
    id: "iced-coffee",
    label: "Iced Coffee",
    blurb: "Clean, chilled and espresso-forward.",
    items: [
      { name: "Cranberry Tonic", price: "₹150 / ₹200" },
      { name: "Orange Tonic", price: "₹150 / ₹200" },
      { name: "Iced Espresso", price: "₹100" },
      { name: "Iced Americano", price: "₹100" },
      { name: "Iced Latte", price: "₹90 / ₹120 / ₹160" },
      { name: "Spanish Latte", price: "₹120 / ₹160 / ₹200" },
      { name: "Iced Cappuccino", price: "₹120 / ₹150" },
      { name: "Iced Mocha", price: "₹140 / ₹180" },
      { name: "Caramel Ice Mocha", price: "₹140 / ₹180" },
    ],
  },
  {
    id: "hot-coffee",
    label: "Hot Coffee",
    blurb: "Pulled fresh, steamed to order.",
    items: [
      { name: "Biscoff Latte", price: "₹150 / ₹200" },
      { name: "Cappuccino", price: "₹90 / ₹140" },
      { name: "Latte", price: "₹90 / ₹140" },
      { name: "Hot Mocha", price: "₹120 / ₹160" },
      { name: "Caramel Hot Mocha", price: "₹130 / ₹160" },
      { name: "Hot Chocolate", price: "₹150 / ₹180" },
      { name: "Espresso", price: "₹100", note: "Without milk" },
      { name: "Americano", price: "₹100", note: "Without milk" },
    ],
    notes: [
      "Cappuccino / Latte add-ons: toffee nut, vanilla, hazelnut, caramel, Irish — ₹30",
      "Hot chocolate add-ons: vanilla, hazelnut, caramel — ₹30",
    ],
  },
  {
    id: "coolers",
    label: "Coolers",
    blurb: "Everything here is ₹110.",
    items: [
      { name: "Virgin", price: "₹110" },
      { name: "Yuzu", price: "₹110" },
      { name: "Cranberry Lemonade", price: "₹110" },
      { name: "Blue Lagoon", price: "₹110" },
      { name: "Lemon Ice Tea", price: "₹110" },
      { name: "Peach Ice Tea", price: "₹110" },
      { name: "Green Apple", price: "₹110" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    blurb: "Cooked fresh in our kitchen.",
    items: [
      { name: "White Sauce Pasta", price: "₹130" },
      { name: "Red Sauce Pasta", price: "₹130" },
      { name: "Mix Sauce Pasta", price: "₹150" },
      { name: "Truffle Pasta", price: "₹150" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    blurb: "Artisan breads, pressed to order.",
    items: [
      {
        name: "Pesto Paneer Sandwich",
        price: "₹200",
        note: "Char-grilled paneer & fresh pesto pressed between toasted artisan bread, rich & aromatic.",
      },
      {
        name: "Avocado Sandwich",
        price: "₹200",
        note: "Ripe avocado, lightly seasoned and stone-milled, layered between golden toasted bread for a clean, creamy finish.",
      },
      {
        name: "Paneer Mushroom Sandwich",
        price: "₹200",
        note: "Pan-seared paneer & wild mushroom folded together for a smoky, umami-rich bite.",
      },
      {
        name: "Classic Veg Sandwich",
        price: "₹200",
        note: "Garden-fresh vegetables with a light house dressing — simple, wholesome & honest.",
      },
    ],
    notes: [
      "Bread: sourdough or brown bread",
      "Multigrain sourdough — ₹20 · Butter croissant — ₹50",
    ],
  },
  {
    id: "crispy-bytes",
    label: "Crispy Bytes",
    blurb: "For the table, or just for you.",
    items: [
      { name: "Salted Fries", price: "₹80" },
      { name: "Peri Peri Fries", price: "₹100" },
      { name: "Hash Brown", price: "₹100" },
      { name: "Cheese Puff", price: "₹60 / ₹100" },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    blurb: "Stacked, toasted and messy in the best way.",
    items: [
      { name: "Classic Burger", price: "₹80" },
      { name: "Barbeque Burger", price: "₹100" },
      { name: "Loaded Afgani Paneer Burger", price: "₹130" },
      { name: "Grilled Ghost Pepper", price: "₹130" },
    ],
    notes: ["Add a cheese slice — ₹30"],
  },
];
