export type MenuItem = {
  id: string;
  name: string;
  price: number;
  veg: boolean;
  spice?: 1 | 2 | 3;
  desc?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "veg-curries",
    title: "Veg Curries",
    subtitle: "Slow-cooked, soulful & vegetarian",
    items: [
      { id: "vc1", name: "Paneer Butter Masala", price: 8.99, veg: true, spice: 1, desc: "Cottage cheese in silky tomato-cashew gravy" },
      { id: "vc2", name: "Kadai Paneer", price: 8.99, veg: true, spice: 2, desc: "Paneer wok-tossed with peppers & roasted spices" },
      { id: "vc3", name: "Palak Paneer", price: 8.49, veg: true, spice: 1, desc: "Paneer in fresh spinach gravy" },
      { id: "vc4", name: "Chana Masala", price: 7.49, veg: true, spice: 2, desc: "Chickpeas simmered in onion-tomato masala" },
      { id: "vc5", name: "Dal Tadka", price: 6.99, veg: true, spice: 1, desc: "Yellow lentils tempered with cumin & garlic" },
      { id: "vc6", name: "Aloo Gobi", price: 7.49, veg: true, spice: 2, desc: "Potato & cauliflower with home-style spices" },
      { id: "vc7", name: "Veg Kurma", price: 7.99, veg: true, spice: 1, desc: "Mixed vegetables in coconut-cashew gravy" },
      { id: "vc8", name: "Bhindi Masala", price: 7.99, veg: true, spice: 2, desc: "Okra sautéed with onions & masala" },
    ],
  },
  {
    id: "non-veg-curries",
    title: "Non Veg Curries",
    subtitle: "Bold spices. Real flavours.",
    items: [
      { id: "nc1", name: "Chicken Curry", price: 9.99, veg: false, spice: 2, desc: "Classic Andhra-style chicken curry" },
      { id: "nc2", name: "Butter Chicken", price: 10.49, veg: false, spice: 1, desc: "Tandoori chicken in creamy tomato gravy" },
      { id: "nc3", name: "Chicken Chettinad", price: 10.99, veg: false, spice: 3, desc: "Fiery South Indian chicken with roasted spices" },
      { id: "nc4", name: "Chicken Tikka Masala", price: 10.49, veg: false, spice: 2, desc: "Grilled tikka in rich tomato-cream sauce" },
      { id: "nc5", name: "Mutton Curry", price: 12.99, veg: false, spice: 3, desc: "Slow-cooked mutton in spicy gravy" },
      { id: "nc6", name: "Mutton Rogan Josh", price: 13.49, veg: false, spice: 2, desc: "Tender mutton in aromatic Kashmiri gravy" },
      { id: "nc7", name: "Fish Curry", price: 11.99, veg: false, spice: 2, desc: "Tangy coconut & tamarind fish curry" },
      { id: "nc8", name: "Prawn Masala", price: 12.49, veg: false, spice: 2, desc: "Prawns tossed in coastal masala" },
    ],
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    subtitle: "Long-grain basmati. Aromatic perfection.",
    items: [
      { id: "vb1", name: "Veg Dum Biryani", price: 8.99, veg: true, spice: 2, desc: "Layered basmati with mixed vegetables" },
      { id: "vb2", name: "Paneer Biryani", price: 9.49, veg: true, spice: 2, desc: "Fragrant rice with marinated paneer" },
      { id: "vb3", name: "Mushroom Biryani", price: 9.49, veg: true, spice: 2, desc: "Earthy mushrooms in saffron rice" },
      { id: "vb4", name: "Hyderabadi Veg Biryani", price: 9.99, veg: true, spice: 2, desc: "Slow-cooked dum-style biryani" },
    ],
  },
  {
    id: "non-veg-biryani",
    title: "Non Veg Biryani",
    subtitle: "Sealed dum. Royal flavour.",
    items: [
      { id: "nb1", name: "Chicken Dum Biryani", price: 10.99, veg: false, spice: 2, desc: "Hyderabadi-style with tender chicken" },
      { id: "nb2", name: "Chicken 65 Biryani", price: 11.49, veg: false, spice: 3, desc: "Spicy fried chicken layered in biryani" },
      { id: "nb3", name: "Mutton Biryani", price: 13.99, veg: false, spice: 2, desc: "Slow-cooked mutton dum biryani" },
      { id: "nb4", name: "Prawn Biryani", price: 12.99, veg: false, spice: 2, desc: "Coastal prawn biryani with whole spices" },
      { id: "nb5", name: "Fish Biryani", price: 12.49, veg: false, spice: 2, desc: "Aromatic biryani with marinated fish" },
      { id: "nb6", name: "Egg Biryani", price: 8.99, veg: false, spice: 2, desc: "Classic egg biryani with fresh herbs" },
    ],
  },
  {
    id: "non-veg-starters",
    title: "Non Veg Starters",
    subtitle: "Fiery, crispy, irresistible.",
    items: [
      { id: "ns1", name: "Chicken 65", price: 7.99, veg: false, spice: 3, desc: "Iconic spicy fried chicken bites" },
      { id: "ns2", name: "Chilli Chicken", price: 8.49, veg: false, spice: 3, desc: "Indo-Chinese style chilli chicken" },
      { id: "ns3", name: "Chicken Lollipop", price: 8.49, veg: false, spice: 2, desc: "Frenched chicken wings, crispy fried" },
      { id: "ns4", name: "Apollo Fish", price: 9.99, veg: false, spice: 3, desc: "Hyderabadi-style spicy fried fish" },
      { id: "ns5", name: "Prawn 65", price: 9.49, veg: false, spice: 3, desc: "Crispy prawns in fiery masala" },
      { id: "ns6", name: "Mutton Pepper Fry", price: 10.99, veg: false, spice: 2, desc: "Black pepper roasted mutton" },
      { id: "ns7", name: "Tandoori Chicken", price: 9.99, veg: false, spice: 2, desc: "Charcoal-grilled marinated chicken" },
    ],
  },
];

export const RESTAURANT = {
  name: "Karthikeya Spice Kitchen",
  tagline: "Every Bite, Full of Flavour",
  cuisine: "South Indian Food • Indian Street Food",
  address: "8 Gordon Street, Luton LU1 2QP, United Kingdom",
  addressLines: ["8 Gordon Street", "Luton LU1 2QP", "United Kingdom"],
  phone: "01582 750184",
  phoneLink: "tel:+441582750184",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Karthikeya+Spice+Kitchen+8+Gordon+Street+Luton+LU1+2QP",
  mapsEmbed: "https://www.google.com/maps?q=8+Gordon+Street+Luton+LU1+2QP&output=embed",
  hours: "Open • Closes 11 PM",
};
